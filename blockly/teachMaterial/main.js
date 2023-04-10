'use strict';
var MainEntry = require('./../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var WorkspaceInit = MainEntry.workspaceInit;
var ubtUtils = MainEntry.ubtUtils;
var jsxManager = MainEntry.jsxManager;
var constants = MainEntry.constants;
var myBusinessService = MainEntry.myBusinessService;

function Main() {// 内测迭代版本时，只修改第4位
    /*Blockly.Blocks.version = '3.1.2.0719';
    Blockly.Blocks.codeVersion = '2018-07-19 14:20';*/
}

// blockly 初始化组件的数组数据
var initConfigData = [
    { key: 'blocklyGuide', data: null, callback: null, id: 'blockly_guide' }, //引导
    // { key: 'blocklyVersioin', data: null, callback: null, id: 'blockly_version' }, //版本信息弹框 产品说去掉
    { key: 'returnButton', data: null, callback: null, id: 'blockly_return_btn' }, //返回按钮
    { key: 'runButton', data: { isRunning: false }, callback: null, id: 'blockly_run_btn' }, //运行按钮
    // 右上角一排按钮
    { key: 'blocklyButton', data: { 'buttonClass': 'savebtn_box', 'buttonImgSrc': 'saveImg' }, callback: null, id: 'save_button' },  //保存项目按钮
    { key: 'blocklyButton', data: { 'buttonClass': 'projectbtn_box', 'buttonImgSrc': 'projectListImg' }, callback: null, id: 'project_button' }, //项目列表按钮
    { key: 'blocklyButton', data: { 'buttonClass': 'helpbtn_box', 'buttonImgSrc': 'helpImg' }, callback: null, id: 'help_button' },  //帮助提示按钮
    { key: 'blocklyButton', data: { 'buttonClass': 'swiftbtn_box', 'buttonImgSrc': 'swiftImg' }, callback: null, id: 'swift_button' },   //swift代码按钮

    { key: 'bluetoothButton', data: null, callback: null, id: 'bluetooth_btn' },  //蓝牙连接标识
    { key: 'systemTips', data: null, callback: null, id: 'system_prompt' }, //系统信息提示
    { key: 'projectName', data: null, callback: null, id: 'project_name' }, //项目名称
    { key: 'indexProjectList', data: null, callback: null, id: 'business_container' }, //项目列表

];
/**
 * // 4，加载blocly 组件
 */
WorkspaceInit.initTeachComponent = function () {
    var workspace = Blockly.getMainWorkspace();
    workspace.resize();
    entry.loadProgram();

    let isFirstEnter = parseInt(blocklyDatas.datas.isFirst);
    if (initConfigData.length > 0) {
        for (let curData of initConfigData) {
            if ((curData.key == 'blocklyVersioin' && isFirstEnter == 1) || curData.key != 'blocklyVersioin') {
                jsxManager.renderComponentByCondition(curData.key, curData.data, curData.callback, curData.id);
            }
        }
    }
};

/**
 * 载入国际化资源,并根据语言引入block块
 * 3，按照语言加载Block资源文件（包括blocklyMenu 和blocly 工作空间的块）
 */
Main.prototype.loadLanguageResource = function (languageCode, platformType) {
    // var _this = this;
    window.LANGUAGE_CODE = languageCode;
    ubtUtils.loadScript('./../resource/msg/' + languageCode + '.js', function () {
        console.log('blockly common msg', './../resource/msg/' + languageCode + '.js');
        ubtUtils.loadScript('./../resource/lib/blockly/msg/js/' + languageCode + '.js', function () {
            require('../engine/blocks/blockSpace');
            WorkspaceInit.initWorkSpace(platformType);
            // setTimeout(() => {
            //     var workspace = Blockly.getMainWorkspace();
            //     workspace.resize();
            //     _this.loadProgram();
            // }, 100);
        });
    });
};

// blocklyTeach 入口文件初始化
Main.prototype.init = function () {
    // 1，初始化参数
    var languageCode = blocklyDatas.getDataByKey('languageCode');
    WorkspaceInit.initDataAndStyle(constants.PLATFORM_BLOCKLY, languageCode);
    // 2，按照语言加载Block资源文件（包括blocklyMenu 和blocly 工作空间的块）
    this.loadLanguageResource(languageCode, constants.PLATFORM_BLOCKLY);
    // 3，加载blocly 组件
    window.addEventListener('load', WorkspaceInit.initTeachComponent);
};

/**
 * 加载指定的项目
 */
Main.prototype.loadProgram = function () {
    var xmlObj;
    if (!window.blocklyObj) {// 1)与2)二选一
        // 1) 加载defaultXml
        xmlObj = {};
        // 2) 加载模拟的官方案例
        // var xmlObjArray = blocklyDatas.getCompatibleList();
        // xmlObj = xmlObjArray[0];
    } else {
        // 调用接口获取加载的项目信息
        var info;
        if (window.blocklyObj.getInitProgramInfo) {
            info = window.blocklyObj.getInitProgramInfo();
        }
        if (info) {
            xmlObj = JSON.parse(info);
        } else {
            xmlObj = {};
        }
    }
    // 预览模式默认打开第一个官方案例
    const edit = blocklyDatas.getDataByKey('edit');
    if (!edit) {
        const list_data = blocklyDatas.getLocalDataByKey("projectList");
        if (list_data && list_data.length > 0) {
            xmlObj = list_data[0];
        }
    }
    // 无xmlId时加载defaultXml
    if (!xmlObj.xmlId) {
        var xml = blocklyDatas.getDataByKey('defaultXml');
        WorkspaceInit.loadBlocks(xml);
        return;
    }

    var currentObj = xmlObj;
    var _that = {
        goSure: () => { },
        goConcel: () => { },
        state: {
            curIndex: 0,
            item: currentObj
        }
    }
    myBusinessService.readXml_before_bus(null, _that);
};

// 启动程序
var entry = new Main();
entry.init();




