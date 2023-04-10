const React = require('react');
const TaskData = require('../task_data');
var MainEntry = require('./../../../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var WorkspaceInit = MainEntry.workspaceInit;
var eventsListener = MainEntry.eventsListener;
var $ = require("jquery");

class HandGuide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0,
            guideClick: TaskData.curTaskData.guideClick,
        }
        this.timeEvent = 0
        this.scale = Blockly.getMainWorkspace().scale
        this.helpScale = this.helpScale.bind(this)
        this.helpMove = this.helpMove.bind(this)
        this.showPopup = this.showPopup.bind(this)
        this.courseGuideHide = this.courseGuideHide.bind(this)
        this.removeGuide = this.removeGuide.bind(this)
        this.touchStart_ = this.touchStart_.bind(this)
        this.touchEnd_ = this.touchEnd_.bind(this)
        this.hideLongPress = this.hideLongPress.bind(this)
        this.showRestartGuide = this.showRestartGuide.bind(this)
    }

    componentWillUnmount() {
        eventsListener.off('courseGuideHide');
        eventsListener.off('showRestartGuide');
        eventsListener.off('removeGuide');
        clearInterval(this.drage_interval)
    }

    componentDidMount() {
        
        eventsListener.on('courseGuideHide', this.courseGuideHide);
        eventsListener.on('showRestartGuide', this.showRestartGuide);
        eventsListener.on('removeGuide', this.removeGuide);
        let that = this
        let blockScale = this.scale
        let ddx = $('.blocklyReturn').css('width')
        ddx = Number(ddx.substring(0, ddx.length - 2))
        let ele = document.getElementById('guide_svg')
        if (TaskData.curTaskData.guideDrag) {
            let guideDrag = TaskData.curTaskData.guideDrag
            if (guideDrag) {

                for (let i = 0; i < guideDrag.length; i++) {
                    let id = 'hand_guide_drag' + (i + 1)
                    let startBlock = WorkspaceInit.workspace.getBlockById(guideDrag[i].startBlock)
                    let start = {}
                    let end = {}
                    if (startBlock.nextConnection) {
                        start = {
                            left: (startBlock.previousConnection.x_ - 33) * blockScale + ddx,
                            top: startBlock.previousConnection.y_ * blockScale,
                            color: startBlock.svgGroup_.childNodes[0].getAttribute('fill'),
                            d: startBlock.svgGroup_.childNodes[0].getAttribute('d'),
                            height: startBlock.height + 1,
                            width: startBlock.width + 1,
                            opacity: 0.5,
                        }

                        if (guideDrag[i].endBlock == '') {
                            end = {
                                left: guideDrag[i].endPosition['x'],
                                top: guideDrag[i].endPosition['y']
                            }
                        } else {
                            let endBlock = WorkspaceInit.workspace.getBlockById(guideDrag[i].endBlock)
                            end = {
                                left: (endBlock.nextConnection.x_ - 33) * blockScale + ddx,
                                top: endBlock.nextConnection.y_ * blockScale
                            }
                        }
                    } else {
                        let startobj = startBlock.svgGroup_.getBoundingClientRect()
                        start = {
                            left: startobj.left,
                            top: startobj.top,
                            color: startBlock.svgGroup_.childNodes[0].getAttribute('fill'),
                            d: startBlock.svgGroup_.childNodes[0].getAttribute('d'),
                            height: startBlock.height + 1,
                            width: startBlock.width + 1,
                            opacity: 0.8,
                        }
                        let endBlock1 = WorkspaceInit.workspace.getBlockById(guideDrag[i].endBlock)
                        let endobj = endBlock1.svgGroup_.childNodes[1].getBoundingClientRect()
                        end = {
                            left: endobj.left,
                            top: endobj.top,
                        }
                    }
                    that.renderSvgShadow(start)
                    that.initDragHandPositon(start, id)
                    that.animateFunc(id, start, end)
                    that.drage_interval = window.setInterval(function () {
                        that.animateFunc(id, start, end)
                        blocklyDatas.setKeyData('gudieFlag', true)//指引标识
                        // console.log("setinterval animate------>")
                    }, 1600)
                }
            }
        }
    }
   
    // 块循环移动动画
    animateFunc(id, start, end, svgid) {
        $('#' + id).fadeIn(1)
        let handPosition = {
            top: end.top,
            left: end.left
        }
        let that = this

        $('#' + id).animate(handPosition, 600, function () {
            $('#' + id).fadeOut(600, function () {
                that.renderSvgShadow(start)
                that.initDragHandPositon(start, id)
            });
        })
    }
    // 初始化块位置
    initDragHandPositon(start, id) {
        $("#" + id).css({"top": start.top + 'px', "left": start.left + 'px'});
        $('.svg_guide_div').css({"top": start.top + 'px', "left": start.left + 'px'});
    }
    // 绘制块形状
    renderSvgShadow(start) {
        let path = document.getElementById('svgPath')
        if (path){
            path.setAttribute('d', start.d)
            path.setAttribute('fill', start.color)
            path.setAttribute('fill-opacity', start.opacity)
            path.setAttribute('stroke', start.color)
            $("#guide_svg").css({
                "top": 0 + 'px',
                "left": 0 + 'px',
                "width": start.width,
                "height": start.height
            });
            document.querySelector('#guide_svg').setAttribute('viewBox', `-0.5 -0.5 ${start.width} ${start.height}`)
        }
    }

    // 拖拽类别的指引
    renderHandGuideMove() {
        const guideDrag = TaskData.curTaskData.guideDrag
        let arr = []
        if (guideDrag) {
            for (let i = 0; i < guideDrag.length; i++) {
                arr.push(<div key={i} className={"hand_guide_box hand_drag_box " + guideDrag[i].key}
                              id={"hand_guide_drag" + (i + 1)}
                              onTouchEnd={this.helpMove.bind(this, i + 1)}>
                    <img src="./images/hand.png" className="handPointer handMove"/>
                    <svg style={{transform: `scale(${this.scale})`, transformOrigin: '0 0'}} version="1.1"
                         xmlns="http://www.w3.org\/2000\/svg"
                         className="guide_svg" id="guide_svg">
                        <path id='svgPath' className="svgPath"/>
                    </svg>
                </div>)
            }
        }
        return arr
    }

    helpMove(result, e) {
        this._stopPropagation(e)
        $("#hand_guide_drag" + result).hide()
    }
    hideLongPress(e){
        $("#longPressImg").hide()
    }

    //手指在工作空间的块上原地闪烁
    getWorkSpaceBlockGuidePos(guideObj){
        let targetBlock = WorkspaceInit.workspace.getBlockById(guideObj.id)
        let obj
        if (guideObj.index == undefined)
            obj = targetBlock.svgGroup_.getBoundingClientRect()
        else
            obj = targetBlock.svgGroup_.children[guideObj.index].getBoundingClientRect()
        let style_ = {
            top: `${obj.top}px`,
            left: `${obj.left}px`,
            height: `${obj.height}px`,
            width: `${obj.width}px`,
        }
        return style_
    }
    // 得到左边菜单栏位置上的指引闪烁
    getMenuBlockGuidePos(strParam){
        let aim
        if (strParam.indexOf('#\\:') >-1){
            let menu_index = strParam.substring(strParam.indexOf(':') + 1, strParam.length)
            console.log(menu_index)
            let eleList = document.querySelectorAll('.blocklyTreeRoot>div:nth-child(2)')
            aim = eleList[0].children[menu_index/1-1];
        }else {
            aim = document.querySelector(strParam)
        }
        const obj = aim.getBoundingClientRect()
        let style_ = {
            top: `${obj.top}px`,
            left: `${obj.left}px`,
            height: `${obj.height}px`,
            width: `${obj.width}px`,
        }
        return style_
    }
    // 放大缩小类别的指引
    renderHandGuideScale() {
        const guideClick = this.state.guideClick
        let curData = TaskData.curTaskData
        let arr = []
        if (guideClick) {
            for (let i = 0; i < guideClick.length; i++) {
                let style_
                let restartClass
                if (typeof (guideClick[i]) == 'string') {// 得到左边菜单栏位置上的指引闪烁
                    style_= this.getMenuBlockGuidePos(guideClick[i])
                    guideClick[i].indexOf(':') > -1 ? style_.zIndex = '79' : ''
                    guideClick[i].indexOf('runbtn') > -1 ? style_.zIndex = '99' : ''
                    restartClass = guideClick[i].indexOf('restart_button') > -1 ? 'restartGuide hideGuide' : ''
                } else {//手指在工作空间的块上原地闪烁
                    style_ = this.getWorkSpaceBlockGuidePos(guideClick[i])
                }
                
                if (curData.level == '1' && curData.stage == '2' && curData.mission == '6') {// 长按动画弹出复制弹框
                    arr.push(
                        <div key={i} className="longPress flex" style={style_} onTouchStart={this.touchStart_} onTouchEnd={this.touchEnd_} >
                            <img src="./images/longpress.gif" id="longPressImg" />
                        </div>
                    )
                }else{
                    arr.push(<div key={i} className={"hand_guide_box " + restartClass}
                        onTouchStart={this.helpScale} style={style_}>
                        <img src="./images/hand.png" className="handPointer handScale" />
                        <div></div>
                    </div>)
                }
                
            }
        }
        return arr
    }
    helpScale(e) {
        //如果点的不是div，而是img，就什么也不做
        if(e.target.nodeName!=='DIV'){
            return
        }
        const el = e.currentTarget
        el.parentNode.removeChild(el)
        const clickCount = this.state.clickCount
        this.setState({
            clickCount: clickCount + 1
        }, () => {
            if (this.state.clickCount == this.state.guideClick.length) {
                this.props.onRemove()
            }
        })
    }
    // 显示重置按钮指引
    showRestartGuide(blockId){
        let data = TaskData.curTaskData
        if (data.level == '1' && data.stage == '1' && data.mission == '5' && blockId == data.guideDrag[0].startBlock){
            console.log(blockId)
            let ele = document.querySelector(".restartGuide");
            let all_class = ele.getAttribute('class');
            all_class = all_class.replace("hideGuide", " ");
            ele.setAttribute('class', all_class);
        }
    }
    // 隐藏掉课程拖拽指引，清掉clearInterval
    courseGuideHide(blockId) {
        let that = this
        let guideDrag = TaskData.curTaskData.guideDrag
        if (guideDrag) {
            for (let i = 0; i < guideDrag.length; i++) {
                if (blockId == guideDrag[i].startBlock) {
                    console.log("courseGuideHide animate------>")
                    clearInterval(this.drage_interval)
                }
            }
        }
    }
    // 移除组件
    removeGuide(){
        this.props.onRemove()
    }
    touchStart_(e){
        // 750毫秒以后隐藏动画并且出现复制弹框
        this.timeEvent = window.setTimeout(this.showPopup,750)
    }
    touchEnd_(e){
        clearTimeout(this.timeEvent);
    }
    // 展示复制弹框
    showPopup(e) {
        this.hideLongPress()
        this.timeEvent = 0
        let targetBlock_ = WorkspaceInit.workspace.getBlockById('U[2EsPg]t8@%11za.6pG')
        targetBlock_.showContextMenu_()
        return this.props.onRemove()
    }

    _stopPropagation(e) {
        if (!e) return
        e.stopPropagation()
        e.preventDefault()
    }

    render() {
        const arr_click = this.renderHandGuideScale()
        const arr_drag = this.renderHandGuideMove()

        return (
            <div className="hand_guide_div">
                {arr_click}
                {arr_drag}
            </div>
        )
    }
}

module.exports = HandGuide;
