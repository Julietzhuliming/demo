var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint:1,
    mission:1,
    taskTitle: MSG['l1_s1_m1_' + window.moveType + '_title'] || MSG['l1_s1_m1_commonType_title'],
    guideClick: ['#program_runbtn'],
    program:{
        'commonType': {// 普通类别
            init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="helloWorld" id="uxgMm3Wl%8?Sp:V7x%!t"></block></next></block></xml>',
            standard:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="helloWorld" id="uxgMm3Wl%8?Sp:V7x%!t"></block></next></block></xml>',
        },
    },
    missionStandardTime:15*1000,//通过任务的标准时间,单位毫秒
};