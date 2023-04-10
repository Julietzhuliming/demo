var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s2_m5_' + window.moveType + '_title'] || MSG['l1_s2_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_005',
            }
        ],
    },   
    toolConfig: {
        'motion': ['motion_execution_action'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    guideClick: ['#\\:2'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="140"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="140"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="(y6(SBJ1?!@,Eq7Wfh9;"><field name="motionName">qianjin1085</field><next><block type="motion_execution_action" id="4LiC=ClA4]1X_oqrq+i:"><field name="motionName">huanhu1126</field><next><block type="motion_execution_action" id="t,yrSt%+/$|?UQs{US~V"><field name="motionName">houtui1004</field></block></next></block></next></block></next></block></xml>',
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};