'use strict';

var MainEntry = require('./../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var WorkspaceInit = MainEntry.workspaceInit;
var ubtUtils = MainEntry.ubtUtils;
var constants = MainEntry.constants;
var jsxManager = MainEntry.jsxManager;
var course_data = require('./components/course_data');
import WatchCmdTimes from '../engine/common/utils/watch_cmd_times'
require('./css/story.css');
require('./css/video.css');
require('./css/media.css');

require('./../teachCourse/css/lock.css');
require('./../teachCourse/css/title.css');
require('./../teachOldCourse/css/title.css');
require('./../teachCourse/css/media.css');

function Main() {//第1位代表框架结构，第2位代表功能，第3位代表bug修复[对外发布时候才是1]，最后一位代表测试迭代版本
    /*Blockly.Blocks.version = '3.1.1.0511 Ast';
    Blockly.Blocks.codeVersion = '2018-05-11 11:00 Ast';*/
}

var popupKeyFiles = {
    // blockly COURSE  菜单所有弹出框 业务弹出框组件
    'courseMenuLock': require('./../teachCourse/components/task/menu_lock.jsx'),
    'errorBlockWarn': require('./../teachCourse/components/task/errorblock_tip.jsx'),
    'courseTitle': require('./components/engine/task_title.jsx'),
    'courseStory': require('./components/engine/course_story.jsx'),
    'courseRunner': require('./components/engine/course_runner.jsx'),
    'courseVideo': require('./components/engine/video.jsx'),
};
// 注册课程组件
jsxManager.regitsterPopupKeyFiles(popupKeyFiles);

// blockly 课程初始化组件的数组数据
var initConfigData = [
    { key: 'systemTips', data: null, callback: null, id: 'system_prompt' }, //系统信息提示
    { key: 'courseStory', data: null, callback: null, id: 'course_story' },  //课程运行逻辑
    { key: 'courseRunner', data: null, callback: null, id: 'course_runner' },  //课程运行逻辑
];

/**
 * ,3，初始化课程组件
 */
WorkspaceInit.initCourseComponent = function () {
    let isFirstEnter = parseInt(blocklyDatas.datas.isFirst);
    if (initConfigData.length > 0) {
        for (let i = 0; i < initConfigData.length; i++) {
            let curData = initConfigData[i];
            let condition1 = curData.key == 'guide';
            let condition2 = (isFirstEnter == 1);
            if ((condition1 && condition2) || !condition1) {
                jsxManager.renderComponentByCondition(curData.key, curData.data, curData.callback, curData.id);
            }
        }
    }
};
/**
 * 2，载入国际化资源,并根据语言引入block块
 */
Main.prototype.loadLanguageResource = function (languageCode, platformType) {
    window.LANGUAGE_CODE = languageCode;
    ubtUtils.loadScript('./../resource/msg/' + languageCode + '.js', function () {
        ubtUtils.loadScript('./../resource/lib/blockly/msg/js/' + languageCode + '.js', function () {
            var serialName = blocklyDatas.getDataByKey('serialName') || 'AstroBot';
            window.SERIAL_NAME = serialName;

            var course_basepath = '';
            if (window.blocklyObj) {//真机环境
                course_basepath = blocklyDatas.getDataByKey('sourcePath') + '/'+serialName;
            } else {//浏览器环境
                course_basepath= './storyCourses/' + serialName  ;
            }
            blocklyDatas.setKeyData('course_basepath', course_basepath);
            
            var courseId = blocklyDatas.getDataByKey('courseId')||'2';
            var course_msg = course_basepath+ '/common/msg/'+ languageCode + '.js';
            var courseJsInfo = course_basepath + '/course_' + courseId + '/config.js';
            var course_video = course_basepath + '/course_' + courseId + '/video.mp4';
            var course_all=course_basepath + '/course_' + courseId;
            blocklyDatas.setKeyData('course_all', course_all);
            blocklyDatas.setKeyData('course_video', course_video);

            ubtUtils.loadScript(course_msg, function () {
                ubtUtils.loadScript(courseJsInfo, function () {
                    course_data.refreshData(window.courseData);
                    console.log('刷新后的数据------->', course_data);
                    let program = course_data.curTaskData.program
                    let passRule = program.passRule
                    blocklyDatas.getDataByKey('watchCmdTimes').setPassRule(passRule)
                });
            }); 
        });
    });
};

Main.prototype.initWatchCmdTimes = function () {
    blocklyDatas.setKeyData('watchCmdTimes', new WatchCmdTimes())
}

// blockly 入口文件初始化
Main.prototype.init = function () {
    // 4,生成监视通关全局变量
    this.initWatchCmdTimes()
    // 1，初始化参数，新版的blocklyTeach环境下的星际探险故事系列
    var languageCode = blocklyDatas.getDataByKey('languageCode');
    WorkspaceInit.initDataAndStyle(constants.PLATFORM_ASTROBOT, languageCode);
    // 2,按照语言加载Block资源文件
    this.loadLanguageResource(languageCode, constants.PLATFORM_ASTROBOT);
    // 3,加载课程组件
    window.addEventListener('load', WorkspaceInit.initCourseComponent);
};
var entry = new Main();
entry.init();
