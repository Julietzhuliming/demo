//当前模块的全局变量，存储传过来的忽略数组
let arr_ignore = []
//当前模块的全局变量，用来计算程序中运行的当前type的index
let arr_types = []

//存储未比较成功的标准多分支
let arr_branches = []
//判断是否为多分支，不同的情况打印不同的错误信息
let ifMultiple

function in_array(searchItem, array) {
    const len = array.length
    const obj = {ifIn: false}
    for (let i = 0; i < len; i++) {
        if (searchItem === array[i]) {
            obj.ifIn = true
            obj.index = i
            return obj
        }
    }
    return obj
}

function String2XML(xmlString) {
    let xmlobject
    // for IE
    if (window.ActiveXObject) {
        xmlobject = new ActiveXObject("Microsoft.XMLDOM")
        xmlobject.async = "false"
        xmlobject.loadXML(xmlString)
        return xmlobject
    }
    // for other browsers
    else {
        const parser = new DOMParser()
        xmlobject = parser.parseFromString(xmlString, "text/xml")
        return xmlobject
    }
}

function compareBranch(standarNode, currentNode) {
    const len_childNodes_s = standarNode.childNodes.length
    const len_childNodes_c = currentNode.childNodes.length

    //如果标准只有一个分支，则直接进行比较（返回有问题的块的id）
    if (len_childNodes_s === 1) {
        ifMultiple = false

        return compareNode(standarNode, currentNode)
    }
    //标准有多个分支（返回当前有问题的块的分支的id或提示当前分支数不够）
    else if (len_childNodes_s >= 1) {
        ifMultiple = true

        for (let i = 0; i < len_childNodes_c; i++) {
            const c_childNodes_i = currentNode.childNodes[i]

            //该当前分支比较结果
            let c_result

            for (let j = 0; j < len_childNodes_s; j++) {
                const s_childNodes_j = standarNode.childNodes[j]
                const s_childNodes_j_id = s_childNodes_j.attributes['id'].value

                //判断该标准分支是否还未比较成功，如果还未比较成功，则比较
                if (in_array(s_childNodes_j_id, arr_branches).ifIn) {

                }
                //如果该标准分支已经比较成功，则不再用于后续分支比较
                else {
                    continue
                }
                const c_s_result = compareNode(s_childNodes_j, c_childNodes_i)
                if (c_s_result) {
                    c_result = false
                }
                else {
                    c_result = true
                    //该标准分支比较成功后从数组中划掉，并进行下一个当前分支的比较
                    arr_branches = arr_branches.filter((item) => item !== s_childNodes_j_id)
                    break
                }
            }

            //如果该当前分支没有一个比较成功，则返回该当前分支的id
            if (!c_result) {
                console.log('该当前分支没有比较成功', c_childNodes_i.attributes['id'].value)

                return c_childNodes_i.attributes['id'].value
            }
        }

        //标准有多个分支，而当前分支数不够
        if (len_childNodes_s > len_childNodes_c) {
            console.log('当前分支数不够')

            return -1
        }
    }
}

function compareNode(standarNode, currentNode) {
    const len_childNodes_s = standarNode.childNodes.length
    const len_childNodes_c = currentNode.childNodes.length

    for (let i = 0; i < len_childNodes_s; i++) {
        const s_childNodes_i = standarNode.childNodes[i]
        const c_childNodes_i = currentNode.childNodes[i]

        /*绝对忽略begin（与块的结构相关，与忽略规则无关）*/
        //acoustooptic_lights_brightness块要跳过eye_color
        if (standarNode.attributes['type'] && standarNode.attributes['type'].value === 'acoustooptic_lights_brightness' && s_childNodes_i.attributes['name'] && s_childNodes_i.attributes['name'].value === 'eye_color') {
            continue
        }
        //标准为嵌套，跳过该shadow节点（无效节点），直接进行下一个节点（有效节点）的比较
        else if (len_childNodes_s === 2 && s_childNodes_i.nodeName === 'shadow') {
            continue
        }
        //跳过name为LIST_SERVOS的field的比较（无效节点）
        else if (s_childNodes_i.nodeName === 'field' && s_childNodes_i.attributes['name'].value === 'LIST_SERVOS') {
            continue
        }
        //跳过name为PROGRAM_BRANCH的field的比较（分支标志，无效节点）
        else if (s_childNodes_i.nodeName === 'field' && s_childNodes_i.attributes['name'].value === 'PROGRAM_BRANCH') {
            continue
        }
        /*绝对忽略end*/

        //当前没有衔接上
        else if (s_childNodes_i.nodeName === 'next' && c_childNodes_i == undefined) {
            const id = currentNode.id
            if (!ifMultiple) {
                console.log('当前没有衔接上----------------->')
                console.log('c_id: ', id)
            }
            // debugger
            return id
        }
        //当前值没有嵌套
        else if (s_childNodes_i.nodeName === 'value' && c_childNodes_i == undefined) {
            const id = currentNode.id
            if (!ifMultiple) {
                console.log('当前值没有嵌套----------------->')
                console.log('c_id: ', id)
            }
            // debugger
            return id
        }
        //当前控制语句没有嵌套
        else if (s_childNodes_i.nodeName === 'statement' && c_childNodes_i == undefined) {
            const id = currentNode.id
            if (!ifMultiple) {
                console.log('当前控制语句没有嵌套----------------->')
                console.log('c_id: ', id)
            }
            // debugger
            return id
        }
        //当前表达式没有嵌套
        else if (s_childNodes_i.nodeName === 'block' && c_childNodes_i == undefined) {
            const id = currentNode.parentNode.id
            if (!ifMultiple) {
                console.log('当前表达式没有嵌套----------------->')
                console.log('c_id: ', id)
            }
            // debugger
            return id
        }
        //节点名称相同
        else if (s_childNodes_i.nodeName === c_childNodes_i.nodeName) {
            //有type属性的要么为block，要么为shadow，都有子节点。需要比较type属性的值，且需要递归比较子节点。有id，比对不同时返回当前节点的id
            if (s_childNodes_i.hasAttribute('type')) {
                if (c_childNodes_i.hasAttribute('type')) {
                    if (s_childNodes_i.attributes['type'].value != c_childNodes_i.attributes['type'].value) {
                        if (!ifMultiple) {
                            console.log('blockly或shadow的type不同----------------->')
                            console.log('s_type: ', s_childNodes_i.attributes['type'].value)
                            console.log('c_type: ', c_childNodes_i.attributes['type'].value)
                        }
                        // debugger
                        return c_childNodes_i.id
                    }
                    else {
                        //每次遇到比对相同后的type，都添加进arr_types，方便内层的忽略判断
                        arr_types.push(s_childNodes_i.attributes['type'].value)

                        //重点！！！
                        const result = compareNode(s_childNodes_i, c_childNodes_i)
                        //比对不成功，返回id
                        if (result != undefined)
                            return result
                        //比对成功，不返回，继续进行for循环中的下一个比对
                    }
                }
                else {
                    const id = c_childNodes_i.id
                    if (!ifMultiple) {
                        console.log('标准block/shadow有type属性，而当前无----------------->')
                        console.log('c_id: ', id)
                    }
                    // debugger
                    return id
                }
            }
            //有name属性的为field或value。需要比较name属性的值。无id，比对不同时返回父节点的id。相同时还要判断子节点为文本节点还是元素节点
            else if (s_childNodes_i.hasAttribute('name')) {
                if (c_childNodes_i.hasAttribute('name')) {
                    if (s_childNodes_i.attributes['name'].value != c_childNodes_i.attributes['name'].value) {
                        if (!ifMultiple) {
                            console.log('field的name不同----------------->')
                            console.log('s_name: ', s_childNodes_i.attributes['name'])
                            console.log('c_name: ', c_childNodes_i.attributes['name'])
                        }
                        // debugger
                        return c_childNodes_i.parentNode.id
                    }
                    else {
                        //根据忽略规则进行忽略判断
                        let ifIgnore = false
                        //用于半比对，特殊处理{ type: 'acoustooptic_paly_sound', name: ['chooseSound'], content:"animal" }类型的忽略
                        let content = ''
                        const s_type = s_childNodes_i.parentNode.attributes['type'].value
                        const len_ignore = arr_ignore.length
                        for (let j = 0; j < len_ignore; j++) {
                            //type在忽略数组当前的item里时，查看item是否有index标记
                            if (s_type === arr_ignore[j].type) {
                                const current_type = s_type
                                const ignore_index = arr_ignore[j].index
                                //没有index标记时，直接忽略该type
                                if (ignore_index == undefined) {
                                    //顺序执行至name和content判断
                                }
                                //有index标记时，查看其是否与程序中运行的当前type的index（通过arr_types.filter().length-1得到）相等
                                else {
                                    const current_index = arr_types.filter((item) => item === current_type).length - 1
                                    //如果index相等，那么就顺序执行至当中的name和content判断
                                    if (current_index === ignore_index) {
                                    }
                                    //如果index不相等，跳过name和content判断，继续检查下一个item
                                    else {
                                        continue
                                    }
                                }

                                /*name和content判断begin*/
                                //name在，判断是否有content
                                const obj = in_array(s_childNodes_i.attributes['name'].value, arr_ignore[j].name)
                                if (obj.ifIn) {
                                    //如果有content，则不忽略，但内容要与content半比对才行
                                    const _content = arr_ignore[j].content
                                    if (_content) {
                                        if (_content instanceof Array)
                                            content = _content[obj.index]
                                        else
                                            content = _content
                                    }
                                    else {
                                        ifIgnore = true
                                    }
                                }
                                //name不在，不忽略该name
                                else {
                                }
                                //此处要么忽略，要么不忽略，一定break
                                break
                                /*name和content判断end*/
                            }
                            //type不在忽略数组当前的item里时，继续检查下一个item
                            else {
                                continue
                            }
                        }

                        //忽略，不比对，什么都不返回（compareNode结果为undefined）
                        if (ifIgnore) {
                        }
                        //不忽略，需要先进行子节点类型判断
                        else {
                            //nodeType为3，为field，有子文本节点（子节点为文本节点，即最内层的文本部分）
                            if (s_childNodes_i.childNodes[0].nodeType === 3) {
                                if (c_childNodes_i.childNodes[0].nodeType === 3) {
                                    //直接比较textContent（注意textContent为所有子孙节点的文本内容的字符串拼接（可作用于的最小单位为文本节点）。因为xml中文本节点无兄弟节点，所以s_childNodes_i.childNodes[0].textContent或s_childNodes_i.textContent都可以。注意s_childNodes_i.childNodes[0]不可以（虽然看起来可以，但它是个节点，不是个字符串）
                                    //半比对
                                    if (content != '') {
                                        let result

                                        //如果是字符串则是正则匹配
                                        if (typeof content === 'string') {
                                            const regex = new RegExp(content)
                                            //同时比较c_childNodes_i.childNodes[0].textConten和s_childNodes_i.childNodes[0].textContent
                                            result = regex.test(c_childNodes_i.childNodes[0].textContent) && regex.test(s_childNodes_i.childNodes[0].textContent)

                                        }
                                        //如果是函数，则用函数来比较
                                        else if (typeof content === 'function') {
                                            result = content(c_childNodes_i.childNodes[0].textContent, s_childNodes_i.childNodes[0].textContent)
                                        }

                                        if (!result) {
                                            if (!ifMultiple) {
                                                console.log('半比对content有误----------------->')
                                                console.log('s_textContent: ', s_childNodes_i.textContent)
                                                console.log('c_textContent: ', c_childNodes_i.textContent)
                                                console.log('content: ', content)
                                            }
                                            // debugger
                                            return c_childNodes_i.parentNode.id
                                        }
                                        else {
                                            //比对成功什么都不返回（compareNode结果为undefined）
                                        }
                                    }
                                    //全比对
                                    else if (s_childNodes_i.childNodes[0].textContent != c_childNodes_i.childNodes[0].textContent) {
                                        // if (s_childNodes_i.textContent != c_childNodes_i.textContent) {
                                        if (!ifMultiple) {
                                            console.log('field的textContent不同----------------->')
                                            console.log('s_textContent: ', s_childNodes_i.textContent)
                                            console.log('c_textContent: ', c_childNodes_i.textContent)
                                        }
                                        // debugger
                                        //如果父节点为shadow，返回父节点的父节点的父节点（上级block）的id
                                        if (c_childNodes_i.parentNode.nodeName === 'shadow')
                                            return c_childNodes_i.parentNode.parentNode.parentNode.id
                                        //如果父节点为block，直接返回父节点的id
                                        else
                                            return c_childNodes_i.parentNode.id
                                    }
                                    else {
                                        //比对成功什么都不返回（compareNode结果为undefined）
                                    }
                                }
                                else {
                                    const id = c_childNodes_i.parentNode.id
                                    if (!ifMultiple) {
                                        console.log('标准为文本节点，而当前不是----------------->')
                                        console.log('c_id: ', id)
                                    }
                                    // debugger
                                    return id
                                }
                            }
                            //为value，有子元素节点，需要递归比较子节点
                            else {
                                const result = compareNode(s_childNodes_i, c_childNodes_i)
                                if (result != undefined)
                                    return result
                            }
                        }
                    }
                }
                else {
                    const id = c_childNodes_i.parentNode.id
                    if (!ifMultiple) {
                        console.log('标准field有name属性，而当前无----------------->')
                        console.log('c_id: ', id)
                    }
                    // debugger
                    return id
                }
            }
            //没有属性的都为next，只需要递归比较子节点
            else {
                /*if (!ifMultiple) {
                    console.log('没有属性时的节点名称----------------->')
                    console.log('s_nodeName: ', s_childNodes_i.nodeName)
                    console.log('c_nodeName: ', c_childNodes_i.nodeName)
                }*/
                const result = compareNode(s_childNodes_i, c_childNodes_i)
                if (result != undefined)
                    return result
            }
        }
        //节点名称不同。比对不同时返回当前节点的id或父节点的id
        else {
            if (!ifMultiple) {
                console.log('节点名称不同时的节点名称----------------->')
                console.log('s_nodeName: ', s_childNodes_i.nodeName)
                console.log('c_nodeName: ', c_childNodes_i.nodeName)
            }
            // debugger
            return c_childNodes_i.id || c_childNodes_i.parentNode.id
        }
    }

    if (len_childNodes_c > len_childNodes_s) {
        let id = ''
        const node = currentNode.childNodes[len_childNodes_c - 1]
        //如果多出的块是block
        if (node.nodeName === 'block') {
            id = node.id
        }
        //如果多出的块是next
        else if (node.nodeName === 'next') {
            id = node.childNodes[0].id
        }

        if (!ifMultiple) {
            console.log('当前有多余块----------------->')
            console.log('c_id: ', id)
        }
        // debugger
        return id
    }
}

function compareXmlObj(standardXml, currentXml, ignore) {
    arr_ignore = ignore ? ignore : []
    arr_types = []
    //此正则匹配前提是块的id里不含<>"字符
    arr_branches = standardXml.match(/id="[^<]*<[^<]*name="PROGRAM_BRANCH"/g).map((item) => item.match(/id="[^"]*"/g)[0].replace('id="', '').replace('"', ''))

    const standardXmlObj = String2XML(standardXml)
    const currentXmlObj = String2XML(currentXml)
    // console.log(standardXmlObj, currentXmlObj)

    if (standardXmlObj && currentXmlObj) {
        const s_obj = standardXmlObj.documentElement
        const c_obj = currentXmlObj.documentElement
        if (s_obj.nodeName === 'xml' && c_obj.nodeName === 'xml') {
            if (s_obj.childNodes && c_obj.childNodes) {
                const compareResult = compareBranch(s_obj, c_obj)
                return compareResult == undefined ? 0 : compareResult
            } else {
                //块缺省
                return -1
            }
        }
        else {
            console.log('最外层不是xml')
        }
    }
    else {
        console.log('xml转换后的obj有问题')
    }
}

export default compareXmlObj