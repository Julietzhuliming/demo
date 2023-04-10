var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s2_m4_' + window.moveType + '_title'] || MSG['l1_s2_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_006',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    guideClick: [{id: '_AO8W|oJP3_3,2u|Nm=|', index: 3}],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="_AO8W|oJP3_3,2u|Nm=|"><field name="motionName">daiming1115</field></block></next></block><block type="motion_speed_continued_second" id=":v/eklNGNUz63IKU_:{+" x="157" y="296"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="B(pBkXm5X^Ldrtg7`[yB"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="_AO8W|oJP3_3,2u|Nm=|"><field name="motionName">huanhu1126</field><next><block type="motion_speed_continued_second" id=":v/eklNGNUz63IKU_:{+"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="B(pBkXm5X^Ldrtg7`[yB"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] },
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="_AO8W|oJP3_3,2u|Nm=|"><field name="motionName">daiming1115</field></block></next></block><block type="motion_speed_distance" id="D(}9TS)2*%k1$.V;BJvC" x="180" y="281"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",W1/DM$`~tdtrs2a35y!"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="_AO8W|oJP3_3,2u|Nm=|"><field name="motionName">huanhu1126</field><next><block type="motion_speed_distance" id="D(}9TS)2*%k1$.V;BJvC"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",W1/DM$`~tdtrs2a35y!"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] },
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};