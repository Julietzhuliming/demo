/**
 * course_data.js
 *  version 1.0  zlm
 *  功能 ：保存当前课程的数据
 */
'use strict';
var MainEntry = require('./../../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
function TaskData() {
};
/* 
 * 刷新当前任务数据
 */
TaskData.prototype.refreshData = function (data) {
    this.curTaskData = this.changeTaskTitleByRules(data);
};
/* 
 * 获取当前任务数据
 */
TaskData.prototype.getTaskData = function () {
    return this.curTaskData;
};

// json转字符串
TaskData.prototype.jsonToString = function () {
    return JSON.stringify(this.curTaskData)
};

String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

TaskData.prototype.changeTaskTitleByRules = function (data) {
    let charArr = ['@', '%0', '%1', '%2', '%3', '%4', '%5', '%6', '%7'];//@替换图片，1红色，2黄色，3绿色,4橙色,，5紫色，6变粗
    let title = data.taskTitle;
    for (let i=0;i<charArr.length;i++){
        if (data.taskTitle.indexOf(charArr[i])>-1){
            data.taskTitle = titleChangeRules(charArr[i],data.taskTitle);
        }
        title = title.replaceAll(charArr[i],"");
    }
    title = title.replaceAll('run', MSG['run']);
    title = title.replaceAll('Jimu', '积木');
    if (window.LANGUAGE_CODE == 'zh-hans' || window.LANGUAGE_CODE == 'en'){
        // 语音播放需要替换这个符号
        title = title.replaceAll('＜', window.LANGUAGE_CODE == 'en'?'less than':'小于');
        title = title.replaceAll('＞', window.LANGUAGE_CODE == 'en' ? 'more than' : '大于');
    }
    data.currentTitle = title;
    return data;
};


function titleChangeRules(char,title){
    let newEleTag = '';
    let oldEle = '';
    if (char == '@'){
        let basePath = window.BASE_COURSE_IMGPATH;
        oldEle = title.match(/@(\S*)@/)[1];
        newEleTag = '<span class="special_1 runbutton">run</span>';
        title = title.replace(char + oldEle + char, newEleTag);
    }
    else if(char.indexOf('%')>-1){
        if (title.indexOf(char) > -1){
            var newStrArr = title.split(char);
            //去掉数组中的空字符串
            newStrArr = newStrArr.filter((item) => item != '')

            let _class = 'special_' + char.substring(1, char.length);
            for (let m=0;m<newStrArr.length;m++){
                if (title.indexOf(char) == 0){
                    if (m%2==0){
                        newStrArr[m] = '<span class="' + _class + '">' + newStrArr[m] + '</span>';
                    }
                }else{
                    if (m % 2 != 0) {
                        newStrArr[m] = '<span class="' + _class + '">' + newStrArr[m] + '</span>';
                    }
                }
            }
        }
        title = newStrArr.join("");
        // console.log('title============>', title);
    }

    return title;
}


module.exports = new TaskData();