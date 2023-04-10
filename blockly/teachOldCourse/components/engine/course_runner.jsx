const React = require('react');
const TaskData = require('../course_data');
var MainEntry = require('./../../../engine/entry.js');
var eventsListener = MainEntry.eventsListener;
var jsxManager = MainEntry.jsxManager;
var constants = MainEntry.constants;
var blocklyDatas = MainEntry.blocklyDatas;
var RobatCommand = MainEntry.RobatCommand;
import { actionName2Id } from '../../../engine/common/utils/action_map'
import compareXmlObj from './../../../teachCourse/components/task/compareXmlObj'

var $ = require("jquery");
class courseRunner extends React.Component {
    constructor(props) {
        super(props)
        this.createErrorTip = this.createErrorTip.bind(this)
    }

    componentDidMount() {
        eventsListener.on('handleErrorProgram', this.handleWrongProgram)
        eventsListener.on('comPareProgram', this.comPareCurrentAndstandardProgram)
        eventsListener.on('createErrorTip', this.createErrorTip)
        eventsListener.on('createEndStory', this.createEndStory)
        eventsListener.on('setErrorBlockPositon', this.setErrorBlockPositon)
    }

    componentWillUnmount() {
        eventsListener.off('handleErrorProgram')
        eventsListener.off('comPareProgram')
        eventsListener.off('createErrorTip')
        eventsListener.off('createEndStory')
        eventsListener.off('setErrorBlockPositon')
    }
    // -----------------------------星际探险 的逻辑业务方法----------------------------------------------------------

    createErrorTip(data) {
        jsxManager.renderComponentByCondition('errorBlockWarn', data, null, 'result_container')
    }

    createEndStory(){
        // 发送欢呼的命令+欢呼的音效
        var jsonobj = { "type": 'emotion', "key": 'cheer', "description": MSG['cheer'], "playPath": constants.BASE_PATH + '/emotion/cheer/cheer.aac' }
        if (window.blocklyObj) {//播放录音
            window.blocklyObj.stopPlayAudio()
            window.blocklyObj.playAudio(JSON.stringify(jsonobj))
        }
        const systemActionsArr = blocklyDatas.getSystemActionsArr()
        let param = 'action|' + actionName2Id('huanhu1126', systemActionsArr)
        RobatCommand.send(param)

        jsxManager.renderComponentByCondition('courseStory', { story: TaskData.curTaskData.endStory, storyType: 'endStory' }, null, 'course_story')
    }
    // 设置保存错误块的 位置信息
    setErrorBlockPositon(errorBlockId) {
        let workspace = Blockly.getMainWorkspace()
        let errorBlock = workspace.getBlockById(errorBlockId)// 错误block块对象
        let scale = Blockly.getMainWorkspace().scale
        const obj = errorBlock.svgGroup_.children[0].getBoundingClientRect()
        let data = {
            left: (obj.left + obj.width) + 6 + 'px',
            top: obj.top + 'px',
            display: 'flex',
            height: (workspace.getBlockById('RBpqO=zS:Min@~s1YZVV').height - 8) * scale + 'px'
        }
        blocklyDatas.setKeyData('errorBlockPos', JSON.stringify(data))
    }

    // 7,程序比对出 错误的地方
    handleWrongProgram (errorBlockId) {
        blocklyDatas.setKeyData('errorBlockId', errorBlockId);
        let workspace = Blockly.getMainWorkspace()
        workspace.traceOn(true)
        //先去掉高亮
        if (Blockly.selected) {
            Blockly.selected.unselect();
        }
        workspace.highlightBlock(errorBlockId) //高亮错误的程序块
        $(".blocklySelected > .blocklyPath").addClass('errorBlockShadow')

        //如果是缺少分支，则弹框提示
        if (errorBlockId == -1) {
            const data = {
                type: 'compare',
                tips: MSG['lack_branch'],
            }
            const callBack = function () {
            }
            jsxManager.renderComponentByCondition('messageTips', data, callBack, "message_tips")
        }
        //如果是当前块有错误，则在错误块（或分支）后面显示警告
        else {
            eventsListener.trigger('setErrorBlockPositon', errorBlockId)
            let blockPositon = JSON.parse(blocklyDatas.getDataByKey('errorBlockPos'))
            eventsListener.trigger('createErrorTip', blockPositon)
        }

        //更新运行按钮的状态
        eventsListener.trigger('changeRunBtnState', false)
    }
    // 6,课程平台判断xml程序是否正确
    comPareCurrentAndstandardProgram(currentXml) {
        let errorBlockId
        let program_ = TaskData.curTaskData.program

        //调用比对程序
        errorBlockId = compareXmlObj(program_['standard'], currentXml, program_['ignore'])
        console.log('比对结果----------------->', errorBlockId)
        if (errorBlockId == '0') {  //匹配成功
            eventsListener.trigger('setComparetResultState', true)
        } else if ((errorBlockId && isNaN(errorBlockId)) || errorBlockId == '-1') {  //匹配到具体的错误的blockID 或者程序不完整
            eventsListener.trigger('handleErrorProgram', errorBlockId)
            eventsListener.trigger('setComparetResultState', false)
        }
    }
// -----------------------------课程的逻辑业务方法----------------------------------------------------------
    render() {
       return (
           <div></div>
       )
    }
}

module.exports = courseRunner;
