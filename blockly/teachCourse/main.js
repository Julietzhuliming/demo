'use strict';

var MainEntry = require('./../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var WorkspaceInit = MainEntry.workspaceInit;
var ubtUtils = MainEntry.ubtUtils;
var dataService = MainEntry.dataService;
var jsxManager = MainEntry.jsxManager;
var constants = MainEntry.constants;
var course_data = require('./components/task_data');
import WatchCmdTimes from '../engine/common/utils/watch_cmd_times'
import {actionNameToId} from '../engine/common/utils/action_map'
require('./css/guide.css');
require('./css/lock.css');
require('./css/result.css');
require('./css/title.css');
require('./css/media.css');


function Main() {//第1位代表框架结构，第2位代表功能，第3位代表bug修复[对外发布时候才是1]，最后一位代表测试迭代版本
    /*Blockly.Blocks.version = '3.1.1.0511';
    Blockly.Blocks.codeVersion = '2018-05-11 11:00';*/
}

var popupKeyFiles = {
    // blockly COURSE  菜单所有弹出框 业务弹出框组件
    'courseTitle': require('./components/task/task_title.jsx'),
    'courseMenuLock': require('./components/task/menu_lock.jsx'),
    'handGuide': require('./components/task/hand_guide.jsx'),
    'errorBlockWarn': require('./components/task/errorblock_tip.jsx'),
    'successPage': require('./components/task/success.jsx'),
    'courseRunner': require('./components/task/course_runner.jsx'),
    'taskRestart': require('./components/task/task_restart.jsx'),
};
// 注册课程组件
jsxManager.regitsterPopupKeyFiles(popupKeyFiles);

// blockly 课程初始化组件的数组数据
var initConfigData = [
    { key: 'returnButton', data: null, callback: null, id: 'blockly_return_btn' }, //返回按钮
    { key: 'runButton', data: { isRunning: false }, callback: null, id: 'blockly_run_btn' }, //运行按钮
    { key: 'systemTips', data: null, callback: null, id: 'system_prompt' }, //系统信息提示
    { key: 'bluetoothButton', data: null, callback: null, id: 'bluetooth_btn' },  //蓝牙连接标识
    { key: 'courseTitle', data: null, callback: null, id: 'course_title' },  //课程标题
    { key: 'courseMenuLock', data: null, callback: null, id: 'menulock_box' },  //菜单锁
    { key: 'courseRunner', data: null, callback: null, id: 'course_runner' },  //课程运行逻辑
    { key: 'taskRestart', data: null, callback: null, id: 'task_restart' },  //重新开始按钮
    { key: 'handGuide', data: null, callback: null, id: 'hand_guide' },  //指引通配
];

/**
 * ,3，初始化课程组件
 */
WorkspaceInit.initCourseComponent = function () {
    // 加载程序
    WorkspaceInit.loadProgramPhase2();
    // 初始化组件
    if (initConfigData.length > 0) {
        for (let i = 0; i < initConfigData.length; i++) {
            let curData = initConfigData[i];
            if (curData.key == 'courseTitle'){
                curData.data = { 'curCourseData': course_data.curTaskData }
            }
            jsxManager.renderComponentByCondition(curData.key, curData.data, curData.callback, curData.id);
        }
    }
};
/**
 * 2，载入国际化资源,并根据语言引入block块
 */
Main.prototype.loadLanguageResource = function (languageCode, platformType) {
    var self=this

    window.LANGUAGE_CODE = languageCode;
    var libMsg = './../resource/lib/blockly/msg/js/' + languageCode + '.js';
    var resourceMsg = './../resource/msg/' + languageCode + '.js';
    ubtUtils.loadScript(libMsg, function () {});
    ubtUtils.loadScript(resourceMsg, function () {
        var moveType = blocklyDatas.getDataByKey('moveType') || 'commonType'
        window.moveType = moveType

        var stage_ = blocklyDatas.getDataByKey('stage') || 'stage_1';
        var mission_ = blocklyDatas.getDataByKey('mission') || 'mission_1';

        var basePath_ = '';
        if (window.blocklyObj) {//真机环境
            basePath_ = blocklyDatas.getDataByKey('sourcePath');
        } else {//浏览器环境
            var level_ = blocklyDatas.getDataByKey('level') || 'level_1';
            basePath_ = './course_resources/' + level_;
        }
        var configFile = basePath_ + '/' + stage_ + '/' + mission_ + '.js';
        var courseMsg = basePath_ + '/common/msg/' + languageCode + '.js';
        var imgPath = basePath_ + '/common/imgs/';
        window.BASE_COURSE_IMGPATH = imgPath;

        ubtUtils.loadScript(courseMsg, function () {
            console.log(window.MSG);
            ubtUtils.loadScript(configFile, function () {
                course_data.refreshData(window.courseData);
                console.log('刷新后的数据------->', course_data);
                var curTime = new Date();
                console.log("------------>curTime", curTime.getTime());
                window.ENTER_BLOCKLY_TIME = curTime.getTime();

                // 引入自定义block块
                require('../engine/blocks/blockSpace');

                let program = course_data.curTaskData.program
                let programXml = ''
                let passRule = program.passRule
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
                self.changeBlock()
                WorkspaceInit.initWorkSpace(platformType, course_data.curTaskData, programXml)
                blocklyDatas.getDataByKey('watchCmdTimes').setPassRule(passRule)
            });
        });
    });

    
};

Main.prototype.initWatchCmdTimes = function () {
    blocklyDatas.setKeyData('watchCmdTimes', new WatchCmdTimes())
}

//根据情况动态改变块的内容
Main.prototype.changeBlock = function () {
    var ifUltrasonic = blocklyDatas.getUltrasonicIds()[0] != 'ID'
    if (ifUltrasonic) {
        // if (true) {
        console.log('有超声')
        Blockly.Blocks['acoustooptic_lights_brightness'] = Blockly.Blocks['acoustooptic_ultrasonic_lights_brightness']
        Blockly.JavaScript['acoustooptic_lights_brightness'] = Blockly.JavaScript['acoustooptic_ultrasonic_lights_brightness']
    }
}

// blockly 入口文件初始化
Main.prototype.init = function () {
    // 4,生成监视通关全局变量
    this.initWatchCmdTimes()
    var languageCode = blocklyDatas.getDataByKey('languageCode');
    WorkspaceInit.initDataAndStyle(constants.PLATFORM_COURSE, languageCode);
    // 2,按照语言加载Block资源文件
    this.loadLanguageResource(languageCode, constants.PLATFORM_COURSE);
    // 3,加载课程组件
    window.addEventListener('load', WorkspaceInit.initCourseComponent);
};
var entry = new Main();
entry.init();
