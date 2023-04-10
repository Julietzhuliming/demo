var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 1,
    taskTitle: MSG['l1_s2_m1_' + window.moveType + '_title'] || MSG['l1_s2_m1_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="%VpJ}O8WQf86R%KU|qb_"><field name="motionName">qianjin1085</field></block></next></block><block type="acoustooptic_paly_tone" id="f/peAZBxZ7{^7j#CQw3}" x="180" y="301"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="%VpJ}O8WQf86R%KU|qb_"><field name="motionName">qianjin1085</field><next><block type="acoustooptic_paly_tone" id="f/peAZBxZ7{^7j#CQw3}"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
    },
    missionStandardTime:15*1000,//通过任务的标准时间,单位毫秒
};