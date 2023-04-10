const TaskData = require('../task_data');
const MainEntry = require('./../../../engine/entry.js');
var eventsListener = MainEntry.eventsListener;
var blocklyDatas = MainEntry.blocklyDatas;
var ubtUtils = MainEntry.ubtUtils;
var constants = MainEntry.constants;
var WorkspaceInit = MainEntry.workspaceInit;
var ToolConfig = MainEntry.ToolConfig;
var jsxManager = MainEntry.jsxManager;

import { actionNameToId } from '../../../engine/common/utils/action_map'
/**
 * 初始化课程的参数
 */
function initCourseParams(params){
    console.log("initCourseParams--->",params)
    blocklyDatas.setKeyData('level',params.level)//'level_1'
    blocklyDatas.setKeyData('stage', params.stage)//'stage_1'
    blocklyDatas.setKeyData('mission', params.mission)//'mission_1'
    blocklyDatas.setKeyData('modelID', params.modelID)//'tanceche'
    blocklyDatas.setKeyData('moveType', params.moveType)//'doubleFeet'/'fourFeet'/'wheelMode'
    blocklyDatas.setKeyData('modelId', params.modelId)//'61'//app 需要用到
    blocklyDatas.setKeyData('missionId', params.missionId)//'1000000'//app 需要用到
    blocklyDatas.setKeyData('isSuccess', false);//重置一下成功的标识
}
/**
 * 更新工作空间的块 保存忽略规则
 */
function updateBlockAndSavePassrule(data){
    let programXml = ''
    let program = data.program
    let passRule = program.passRule
    let moveType = window.moveType
    if (program[moveType]) {
        programXml = program[moveType]['init']
        passRule = passRule ? passRule : program[moveType]['passRule']
    } else {
        if (moveType == 'fourFeet') {//四足而且四足的program 没有配置，取双足的配置
            if (program['doubleFeet']) {//如果双足的配置存在的话
                programXml = program['doubleFeet']['init']
                passRule = passRule ? passRule : program['doubleFeet']['passRule']
            } else {//不存在就取common
                programXml = program['commonType']['init']
                passRule = passRule ? passRule : program['commonType']['passRule']
            }
        } else {
            programXml = program['commonType']['init']
            passRule = passRule ? passRule : program['commonType']['passRule']
        }
    }
    const systemActionArr = blocklyDatas.getSystemActionsArr()
    programXml = actionNameToId(programXml, systemActionArr)
    let ele = document.querySelector('.blocklyTreeRoot>div:nth-child(2)>div:nth-child(1)')
    let obj = ele.getBoundingClientRect()
    let scale = Blockly.getMainWorkspace().scale
    programXml = programXml.replace('y="93"', 'y="' + obj.top / scale * 1.5 + '"')
    WorkspaceInit.loadBlocks(programXml)

    
    blocklyDatas.getDataByKey('watchCmdTimes').setPassRule(passRule)
}
/**
 * 更新菜单toolbox
 */
function updateToolBox(){
    let toolbox = (new ToolConfig(constants.PLATFORM_COURSE, TaskData.curTaskData)).getToolboxString();
    Blockly.getMainWorkspace().updateToolbox(toolbox);
}
/**
 * 创建任务指引
 */
function createGudie(){

    jsxManager.renderComponentByCondition('handGuide', null, null, 'hand_guide')
} 

/**
 * 加载下一项的课程任务
 */
function toNextMission(params){
    params = JSON.parse(params)
    eventsListener.trigger('removeGuide')
    initCourseParams(params)
    console.log("========>",Blockly.getMainWorkspace().getMetrics())
    Blockly.getMainWorkspace().getMetrics().viewLeft = '-5.684341886080802'
    Blockly.getMainWorkspace().getMetrics().viewTop = '-0'
    console.log("========>",Blockly.getMainWorkspace().getMetrics())

    // let transformParams = 'translate(97,0) scale(' + Blockly.getMainWorkspace().scale + ')'
    // let target = document.querySelector('.blocklyBlockCanvas')
    // if (target) {
    //     target.setAttribute('transform', transformParams)
    // }
    let basePath_ = '';
    if (window.blocklyObj) {//真机环境
        basePath_ = blocklyDatas.getDataByKey('sourcePath');
    } else {//浏览器环境
        var level_ = params.level||'level_1';
        basePath_ = './course_resources/' + level_;
    }

    let configFile = basePath_ + '/' + params.stage + '/' + params.mission + '.js';

    ubtUtils.loadScript(configFile, function () {
        TaskData.refreshData(window.courseData);
        console.log('success next 刷新后的数据------->', TaskData)
        //记录进入下一关的初始时间，用来计算通关时间的
        window.ENTER_BLOCKLY_TIME = new Date().getTime()

        eventsListener.trigger('updataTitle', window.courseData)
        eventsListener.trigger('updataMenuLock', window.courseData)
        eventsListener.trigger('updataSuccessTime')
        eventsListener.trigger('closeLeftMenu')
        updateBlockAndSavePassrule(TaskData.curTaskData)
        updateToolBox()
        setTimeout(()=>createGudie(),100)
    });
}

export { toNextMission}