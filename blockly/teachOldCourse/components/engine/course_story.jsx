const React = require('react');
const TaskData = require('../course_data');
var MainEntry = require('./../../../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var WorkspaceInit = MainEntry.workspaceInit;
var ubtUtils = MainEntry.ubtUtils;
var constants = MainEntry.constants;
var jsxManager = MainEntry.jsxManager;
var eventsListener = MainEntry.eventsListener;

var $ = require("jquery");

class courseStory extends React.Component {
    constructor(props) {
        super(props)
        this.courseId = blocklyDatas.getDataByKey('courseId')
        this.basePath = blocklyDatas.getDataByKey('course_basepath')

        this.story = this.props.data? this.props.data.story : TaskData.curTaskData.startStory
        this.storyType = this.props.data ? this.props.data.storyType : 'startStory'
       
        this.bgImgJson = {//课程每一关的故事背景对应表
            '2': '1', '3': '1', '4': '2', '5': '2', '6': '3', '7': '3', '8': '3', //星宝
            '10': '4', '11': '4', '12': '4', '13': '4', '14': '5', '15': '5', '16': '5',//路宝
            '18': '5','19': '5', '20': '5', '21': '5', '22': '5', '23': '5', '24': '4',//探险1号
        }
        this.createStory = this.createStory.bind(this)
        this.loadStoryPage = this.loadStoryPage.bind(this)
        this.colseStory = this.colseStory.bind(this)
        this.createOtherComponent = this.createOtherComponent.bind(this)
    }

    componentDidMount() {
        this.createStory(this.story)
    }
    componentWillUnmount() {
    }
    // 延迟加载，在课程动画的时候载入菜单和其他组件
    createOtherComponent(){
        // 引入课程的菜单
        require('../../../engine/blocks/blockSpace')
        WorkspaceInit.initWorkSpace(constants.PLATFORM_ASTROBOT, TaskData.curTaskData, TaskData.curTaskData.program.init)
        // 加载程序
        WorkspaceInit.loadProgramPhase2();

        let initConfigData = [
            { key: 'returnButton', data: null, callback: null, id: 'blockly_return_btn' }, //返回按钮
            { key: 'runButton', data: { isRunning: false }, callback: null, id: 'blockly_run_btn' }, //运行按钮
            { key: 'bluetoothButton', data: null, callback: null, id: 'bluetooth_btn' },  //蓝牙连接标识
            { key: 'courseTitle', data: { 'curCourseData': TaskData.curTaskData }, callback: null, id: 'course_title' },  //课程标题
            { key: 'courseMenuLock', data: null, callback: null, id: 'menulock_box' },  //菜单锁
        ]

        if (initConfigData.length > 0) {
            for (let i = 0; i < initConfigData.length; i++) {
                let curData = initConfigData[i];
                jsxManager.renderComponentByCondition(curData.key, curData.data, curData.callback, curData.id);
            }
        }
    }

    createStory(story){
        var _that = this;
        for (let i = 0; i < story.length; i++) {
            let obj = story[i];
            if (obj.hide_ele_index != null && obj.index != null) {
                let hide_delay = (obj.index - obj.hide_ele_index) * 1500 - 200 * i;
                $("#item_" + obj.hide_ele_index).delay(hide_delay).fadeOut();
            }
            if (i + 1 == story.length) {
                $("#item_" + i).delay(1500 * i).fadeIn(function () {
                    window.setTimeout(function () {
                        _that.colseStory();
                    }, 1500);
                });
            } else {
                $("#item_" + i).delay(1500 * i).fadeIn();
            }
        }
    }
    // 故事结束时候调用
    colseStory() {
        this.props.onRemove();
        if (this.storyType == "startStory") {
            // 展示其他组件
            this.createOtherComponent()
            // 开始故事结束调用视频自动弹出
            eventsListener.trigger('showVideo')
            
        }else if (this.storyType == "endStory") {
            if (window.blocklyObj && window.blocklyObj.courseSuccessPopup) {// 成功故事结束，调用雷达图 撒花 界面
                let courseId = blocklyDatas.getDataByKey('courseId') + ''
                console.log("courseSuccessPopup  ---courseId：", courseId)
                window.blocklyObj.courseSuccessPopup(courseId);
            } else {
                let url = window.location;
                let lang_ = ubtUtils.GetQueryString('lang') || 'zh-hans'
                let moveType = ubtUtils.GetQueryString('moveType') || 'doubleFeet'
                let modelID = ubtUtils.GetQueryString('modelID') || 'yuhangyuan'
                let courseId = Number(this.courseId) + 1
                if (courseId > 9) {
                    moveType = 'wheelMode'
                    if (courseId < 17) {
                        modelID = 'tanceche'
                    }
                    if (courseId > 17) {
                        modelID = 'TankbotPro'
                    }
                }
                window.location.href = 'http://' + url.hostname + ':8809/teachOldCourse/course.html?courseId=' + courseId + '&lang=' + lang_ + '&moveType=' + moveType + '&modelID=' + modelID;
            }
        }
    }
    // 加载故事内容
    loadStoryPage(story){
        var dialog_arr = [];
        for (var j = 0; j < story.length; j++){
            var obj = story[j];
            var _x = obj.x + "%";
            var _y = obj.y + "%";
            var _direction = obj.directioin;
            var _style = "";
            if (obj.directioin == "left") {

                _style = { top: _y , left: _x };

            } else if (obj.directioin == "right") {

                _style = { top: _y, right: _x };

            } else if (obj.directioin == "top") {

                _style = { left: _y,  top: _x };

            } else if (obj.directioin == "bottom") {

                _style = { left: _y, bottom: _x };

            }
            if (obj.type == "img") {
                dialog_arr.push(<div key={"item" + j} id={"item_" + j} className={"item_box " + obj.type + "_box " + obj.type + "_" + obj.directioin} style={_style}>
                    <img src={this.basePath +'/common/imgs/'+ obj.value} />
                </div>);
            }
            if (obj.type == "text") {
                dialog_arr.push(<div key={"item" + j} id={"item_" + j} className={"item_box " + obj.type + "_box " + obj.type + "_" + obj.directioin} style={_style}>
                    <span>{obj.value}</span>
                </div>);
            }
        }
        return dialog_arr;
    }

    render() {
        
        let _style={
            backgroundImage: 'url(' + this.basePath + '/common/imgs/bg' + this.bgImgJson[this.courseId] + '.jpg'+')',
        }
        return (
            <div className="story_container" style={_style}>
                <div className="div_bgopcity"><span></span></div>
                <div className={"storyitem_container course_" + this.courseId}>
                    {this.loadStoryPage(this.story)}
                </div>
            </div>
        )
    }
}

module.exports = courseStory;
