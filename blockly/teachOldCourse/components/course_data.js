/**
 * courseData.js version 1.0
 * 
 * blockly course data
 * blockly课程数据
 * 
 * feature blockly course data
 * 
 */
'use strict' ; 
function CourseData() {
}
CourseData.prototype.refreshData = function (data) {
    this.curTaskData = this.changeTaskTitleByRules(data);
}
// 返回当前课程
CourseData.prototype.getCourseData = function () {
    return this.curTaskData;
};
// json转字符串
CourseData.prototype.jsonToString = function () {
    return JSON.stringify(this.curTaskData)
};

CourseData.prototype.changeTaskTitleByRules = function (data) {
    let charArr = ['@', '%0', '%1', '%2', '%3', '%4', '%5', '%6', '%7','%8'];//@替换图片，1红色，2黄色，3绿色,4橙色,，5紫色，6变粗
    let title = data.courseTitle;
    for (let i = 0; i < charArr.length; i++) {
        if (data.courseTitle.indexOf(charArr[i]) > -1) {
            data.courseTitle = titleChangeRules(charArr[i], data.courseTitle);
        }
        title = title.replaceAll(charArr[i], "");
    }
    title = title.replaceAll('run', MSG['run']);
    title = title.replaceAll('Jimu', '积木');
    data.currentTitle = title;
    return data;
};

function titleChangeRules(char, title) {
    let newEleTag = '';
    let oldEle = '';
    if (char == '@') {
        let basePath = window.BASE_COURSE_IMGPATH;
        oldEle = title.match(/@(\S*)@/)[1];
        newEleTag = '<span class="special_1 runbutton">run</span>';
        title = title.replace(char + oldEle + char, newEleTag);
    }
    else if (char.indexOf('%') > -1) {
        if (title.indexOf(char) > -1) {
            var newStrArr = title.split(char);
            //去掉数组中的空字符串
            newStrArr = newStrArr.filter((item) => item != '')

            let _class = 'special_' + char.substring(1, char.length);
            for (let m = 0; m < newStrArr.length; m++) {
                if (title.indexOf(char) == 0) {
                    if (m % 2 == 0) {
                        newStrArr[m] = '<span class="' + _class + '">' + newStrArr[m] + '</span>';
                    }
                } else {
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

module.exports = new CourseData();