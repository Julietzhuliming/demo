const React = require('react')
const TaskData = require('../task_data')
var MainEntry = require('./../../../engine/entry.js')
var eventsListener = MainEntry.eventsListener
var blocklyDatas = MainEntry.blocklyDatas
var jsxManager = MainEntry.jsxManager
import compareXmlObj from './compareXmlObj'
import { toNextMission } from './goToNextMission'
var $ = require("jquery")

/**
 * 课程运行逻辑控制器
 */
class courseRunner {
    constructor() {
    }
    
    /* 
    * 创建错误提示
    */
    createSuccessPage() {
        jsxManager.renderComponentByCondition('successPage', null, null, 'result_container');
    }

    /* 
    * 创建错误提示
    * data {}
    */
    createErrorTip(data) {
        jsxManager.renderComponentByCondition('errorBlockWarn', data, null, 'result_container');
    }

    // 设置保存错误块的 位置信息
    setErrorBlockPositon(errorBlockId) {
        let workspace = Blockly.getMainWorkspace()
        let errorBlock = workspace.getBlockById(errorBlockId)// 错误block块对象
        if (errorBlock.nextConnection == null) {
            if (errorBlock.parentBlock_) {
                errorBlock = errorBlock.parentBlock_
            } else {
                errorBlock = errorBlock
            }
        }
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
    handleWrongProgram(errorBlockId) {
        blocklyDatas.setKeyData('errorBlockId', errorBlockId)
        let workspace = Blockly.getMainWorkspace()
        workspace.traceOn(true)
        //先去掉高亮
        if (Blockly.selected)  Blockly.selected.unselect()
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
        let moveType = blocklyDatas.getDataByKey('moveType')
        let program_ = TaskData.curTaskData.program[moveType] || TaskData.curTaskData.program['commonType']

        if (TaskData.curTaskData.program[moveType] == undefined && moveType == 'fourFeet') {
            program_ = TaskData.curTaskData.program['doubleFeet'] || TaskData.curTaskData.program['commonType']
        }
        let ignore_ = program_['ignore'] || TaskData.curTaskData.program['ignore']
        //调用比对程序
        errorBlockId = compareXmlObj(program_['standard'], currentXml, ignore_)
        console.log('比对结果----------------->', errorBlockId)
        if (errorBlockId == '0') {  //匹配成功
            eventsListener.trigger('setComparetResultState', true)
        } else if ((errorBlockId && isNaN(errorBlockId)) || errorBlockId == '-1') {  //匹配到具体的错误的blockID 或者程序不完整
            eventsListener.trigger('handleErrorProgram', errorBlockId)
            eventsListener.trigger('setComparetResultState', false)
        }
    }
}
module.exports = new courseRunner();