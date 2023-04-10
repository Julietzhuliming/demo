const React = require('react')
// const TaskData = require('../task_data')
var MainEntry = require('../../../engine/entry.js')
var blocklyDatas = MainEntry.blocklyDatas
var ubtUtils = MainEntry.ubtUtils
var constants = MainEntry.constants
var eventsListener = MainEntry.eventsListener;
var VideoComponent = require('./video.jsx')
var img_help = require('../../../teachCourse/images/help.png')
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class CourseTitle extends React.Component {
    constructor(props) {
        super(props)
        this.titleStyle = this.adjust()
        this.platformType = blocklyDatas.getDataByKey('platformType')
        this.canToggle = true

        this.state = {
            courseTitle: this.getCourseTitle(this.props.data.curCourseData),
            helpList: this.getHelpListData(this.props.data.curCourseData),
            ifShowHelp: false,
            ifSpreadP: 'normal',
            clickHelpCount: 0,
            currentHelpIndex: 0,
            initHelpIndex: -1,
        }

        this.goSure = this.goSure.bind(this)
        this.goCancel = this.goCancel.bind(this)
        this.toggleHelp = this.toggleHelp.bind(this)
        this.touchstart = this.touchstart.bind(this)
        this.touchmove = this.touchmove.bind(this)
        this.touchend = this.touchend.bind(this)
        this.verticalTitle = this.verticalTitle.bind(this)
        this.updataTitle = this.updataTitle.bind(this)
        this.getHelpListData = this.getHelpListData.bind(this)
        this.getCourseTitle = this.getCourseTitle.bind(this)
        this.resetClickHelpCount = this.resetClickHelpCount.bind(this)

        this.resetClickHelpCount()
    }

    adjust() {
        const leftWidth = document.querySelector('.blocklyToolboxDiv').clientWidth
        const rightWidth = document.body.clientWidth * 0.09
        const middleWidth = document.body.clientWidth - leftWidth - rightWidth
        const width = middleWidth * 0.9
        const moveLeft = leftWidth + middleWidth * 0.5

        return {width, moveLeft}
    }

    componentDidMount() {
        eventsListener.on('toggleHelp', this.toggleHelp);
        eventsListener.on('updataTitle', this.updataTitle);

        //文字不溢出时，不显示下拉展开箭头
        const titleText = document.querySelector('#titleText')
        const courseToogle = document.querySelector('.courseToogle')
        if (titleText.offsetHeight == titleText.scrollHeight) {
            courseToogle.style.display = 'none'
        }
    }

    componentWillUnmount() {
        eventsListener.off('toggleHelp');
        eventsListener.off('updataTitle');
    }

    getCourseTitle(data) {

        if (this.platformType == constants.PLATFORM_COURSE)//课程
            return data.stage + '-' + data.mission + ': ' + data.taskTitle

        if (this.platformType == constants.PLATFORM_ASTROBOT) //星际探险
            return data.courseId + ': ' + data.courseTitle
    }

    getHelpListData(data) {
        let helpList_ = data.helpList
        let moveType_ = blocklyDatas.getDataByKey('moveType')
        return (helpList_ ? (helpList_[moveType_] || helpList_['commonType']) : undefined)
    }

    resetClickHelpCount() {
        // 重置click help button 的次数
        blocklyDatas.setKeyData('clickHelpcount', 0)
    }

    updataTitle(data) {
        this.resetClickHelpCount()
        this.setState({
            courseTitle: data.stage + '-' + data.mission + ': ' + data.taskTitle,
            helpList: this.getHelpListData(data),
            ifShowHelp: false,
            ifSpreadP: 'normal',
            clickHelpCount: 0,
            currentHelpIndex: 0,
            initHelpIndex: -1,
            ttsText: data.currentTitle,
            isUp: false,//标题是否收起
        }, () => {
            let ttsAutio = document.querySelector('#tts_autio_id')
            ttsAutio.play()// 播放
        })
    }

    verticalTitle() {
        let ifSpreadP
        if (this.state.ifSpreadP == 'vertical')
            ifSpreadP = 'normal'
        else if (this.state.ifSpreadP == 'normal')
            ifSpreadP = 'vertical'

        this.setState({
            ifSpreadP
        })
    }

    toggleHelp(e) {
        let programRunning_ = blocklyDatas.getDataByKey("programRunning")
        if (programRunning_ == true) return
        if (!this.canToggle) {
            return
        }
        this.canToggle = false
        if (e) {
            e.stopPropagation()
            e.preventDefault()
        }
        let times = this.state.clickHelpCount
        const ifShowHelp = this.state.ifShowHelp
        //打开
        if (!ifShowHelp) {
            let initHelpIndex = this.state.initHelpIndex + 1
            if (initHelpIndex === this.state.helpList.length)
                initHelpIndex = 0
            let currentHelpIndex = initHelpIndex

            this.setState({
                clickHelpCount: times + 1,
                ifShowHelp: true,
                ifSpreadP: 'horizontal',
                initHelpIndex,
                currentHelpIndex
            }, () => {
                let count = 0
                if (this.state.clickHelpCount % 2 == 0) {
                    count = this.state.clickHelpCount / 2
                } else {
                    count = (this.state.clickHelpCount + 1) / 2
                }
                blocklyDatas.setKeyData('clickHelpcount', count)
                setTimeout(() => {
                    this.canToggle = true
                }, 250)
            })
        }
        //关闭
        else {
            this.setState({
                clickHelpCount: times + 1,
                ifShowHelp: false,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        ifSpreadP: 'normal',
                    })
                    this.canToggle = true
                }, 250)
            })
        }
    }

    goSure(e) {
        this._stopPropagation(e)
        this.props.callback({direction: this.state.selected})
        return this.props.onRemove()
    }

    goCancel(e) {
        this._stopPropagation(e)
        return this.props.onRemove()
    }

    _stopPropagation(e) {
        if (!e) return
        e.stopPropagation()
        e.preventDefault()
    }

    touchstart(e) {
        this.startX = e.changedTouches[0].pageX
    }

    touchmove(e) {
        const moveX = e.changedTouches[0].pageX - this.startX
        if (Math.abs(moveX) >= 60) {
            //此语句是为了 解决 Android4.X touchstart,touchmove,touchend的Bug
            if (navigator.userAgent.toLowerCase().indexOf("android 4.") > 0) {
                e.preventDefault()
            }
        }
    }

    touchend(e) {
        const helpList = this.state.helpList
        let current = this.state.currentHelpIndex
        const moveX = e.changedTouches[0].pageX - this.startX
        if (Math.abs(moveX) < 60) {//x 移动偏差60以内
            console.log("no move")
        } else {
            if (moveX > 60) {
                console.log("right")
                current--
                if (current < 0) {
                    current = helpList.length - 1
                }
            }
            if (moveX < -60) {
                console.log("left")
                current++
                if (current > helpList.length - 1) {
                    current = 0
                }
            }
            this.setState({
                currentHelpIndex: current
            })
        }
    }

    render() {
        let lis = []
        if (this.state.helpList != undefined && this.state.helpList.length > 1)
            for (let i = 0, item; item = this.state.helpList[i]; i++) {
                lis.push(<li key={i} className={i === this.state.currentHelpIndex ? 'active' : ''}></li>)
            }

        let text
        let content

        if (this.platformType == constants.PLATFORM_ASTROBOT) {//星际探险
            if (this.state.helpList) {
                const currentHelpIndex = this.state.helpList[this.state.currentHelpIndex]
                text = currentHelpIndex.text
                content = currentHelpIndex.content
                console.log(text)
            }
        }

        const ifSpreadP = this.state.ifSpreadP
        const left = this.titleStyle.moveLeft
        const width = this.titleStyle.width

        return (
            <div className={ifSpreadP + ' oldCourse'} onTouchEnd={this.toggleHelp}>
                {/* tts 语音播报容器 */}
                <div id="bdtts_div_id">
                </div>
                <div className={"courseTitle"} style={{left, width}} onTouchEnd={this._stopPropagation}>
                    <div className={ifSpreadP == 'horizontal' ? 'noround' : ''}>
                        <p>
                            <span id="titleText" dangerouslySetInnerHTML={{__html: this.state.courseTitle}}></span>
                        </p>
                        {this.state.helpList != undefined &&
                        <img id="task_help" src={img_help} alt="" onClick={this.toggleHelp}/>}
                    </div>
                    <div className={"courseToogle" + (ifSpreadP == 'horizontal' ? ' hide' : '')}
                         onTouchEnd={this.verticalTitle}></div>
                    <ReactCSSTransitionGroup
                        transitionName='help_dropdown'
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}>
                        {this.state.ifShowHelp &&
                        <HelpDropdown key={1} lis={lis} text={text} content={content}
                                      touchstart={this.touchstart}
                                      touchmove={this.touchmove} touchend={this.touchend}
                        />
                        }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

class HelpDropdown extends React.Component {
    constructor(props) {
        super(props)

        this.replaceHelpText = this.replaceHelpText.bind(this)
        if (this.props.text) {
            this.state = {
                textHtml: this.replaceHelpText(this.props.text)
            }
        }
    }

    componentDidMount() {
        const bigSon = document.querySelector('.bigSon')
        const rem = parseInt(getComputedStyle(bigSon).fontSize)
        const maxHeight = document.body.clientHeight * 0.97 - document.querySelector('.courseTitle').offsetHeight - 4 * rem
        bigSon.style.maxHeight = maxHeight + 'px'
    }

    componentWillReceiveProps(nextProps) {
        this.setState({textHtml: this.replaceHelpText(nextProps.text)});
    }

    replaceHelpText(text) {
        if (text) {

            if (text.indexOf('@') > -1) {
                let oldEle = text.match(/@(\S*)@/)[1]
                let newEleTag = '<span class="special_1 runbutton">run</span>'
                text = text.replace('@' + oldEle + '@', newEleTag)
            }
            if (text.indexOf('%1') > -1) {
                var newStrArr = text.split('%1');
                for (var m = 0; m < newStrArr.length; m++) {
                    if (text.indexOf('%1') == 0) {
                        if (m % 2 == 0) {
                            newStrArr[m] = '<span class="special_1">' + newStrArr[m] + '</span>';
                        }
                    } else {
                        if (m % 2 != 0) {
                            newStrArr[m] = '<span class="special_1">' + newStrArr[m] + '</span>';
                        }
                    }
                }
                text = newStrArr.join("");
            }
            return text
        }
    }

    render() {
        let content = this.props.content
        let child
        if (content == '') {
            child = <div>
                <VideoComponent src={blocklyDatas.getDataByKey('course_video')}></VideoComponent>
            </div>
        }
        else {
            content = content.replace(/course_all/g, blocklyDatas.getDataByKey('course_all'))
            child = <div dangerouslySetInnerHTML={{__html: content}}></div>
        }

        return (
            <div className="help_dropdown" onTouchStart={this.props.touchstart}
                 onTouchMove={this.props.touchmove} onTouchEnd={this.props.touchend}
            >
                <div className="bigSon">
                    <div>
                        <p dangerouslySetInnerHTML={{__html: this.state.textHtml}}></p>
                        {child}
                    </div>
                </div>
                <ul>
                    {this.props.lis}
                </ul>
            </div>
        )
    }
}

module.exports = CourseTitle
