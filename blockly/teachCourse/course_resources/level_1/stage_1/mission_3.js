var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s1_m3_' + window.moveType + '_title'] || MSG['l1_s1_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_001',
            }
        ],
    },
    guideDrag: [
        { key: 'drag1', startBlock: 'm0_Nf2Q,P2O@_p.di(TS', endBlock: 'RBpqO=zS:Min@~s1YZVV' },
    ],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="155"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_continued_second" id="m0_Nf2Q,P2O@_p.di(TS" x="52" y="268"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="rlBk8PHX`qB%Yo(Q33-7"><field name="TIME">1</field></shadow></value></block><block type="motion_speed_continued_second" id="I`bh{=h$=,j/^?@=H%[q" x="55" y="388"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="Y.6Q!,F8ElS(-ll*sP+r"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="m0_Nf2Q,P2O@_p.di(TS"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="rlBk8PHX`qB%Yo(Q33-7"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="I`bh{=h$=,j/^?@=H%[q"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="Y.6Q!,F8ElS(-ll*sP+r"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="155"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="m0_Nf2Q,P2O@_p.di(TS" x="53" y="270"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",#!6trZGC^hR@.y+o^rY"><field name="NUM">1</field></shadow></value></block><block type="motion_speed_distance" id="Ewoqxsv%yr`22_19LMp~" x="59" y="400"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="w!RoQrzQ$wakrDM5j?}O"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="m0_Nf2Q,P2O@_p.di(TS"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",#!6trZGC^hR@.y+o^rY"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="Ewoqxsv%yr`22_19LMp~"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="w!RoQrzQ$wakrDM5j?}O"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒

};