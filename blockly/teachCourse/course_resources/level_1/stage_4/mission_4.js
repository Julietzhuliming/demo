var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s4_m4_' + window.moveType + '_title'] || MSG['l1_s4_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_020',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_continued_second" id="J=kK76w!)9=L$mE$5H|P" x="186" y="258"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="MHaMQT0se_Xtj#9U4mxQ"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="g|PU+,{G^XcuuW55DrE="><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="N:ti+yxDRJY09^c$U6.`"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="AI/~U6VABAy%@lmi)S2@"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="t#D~H|z/Uss*Mt|Z+A~/"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="J=kK76w!)9=L$mE$5H|P"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="MHaMQT0se_Xtj#9U4mxQ"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="g|PU+,{G^XcuuW55DrE="><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="N:ti+yxDRJY09^c$U6.`"><field name="TIME">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="dVBo7N3+D0AJEx6R#8[f" x="175" y="236"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="cMyEp{XI/Vf*dF#QfaF9"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="1U2=3,CM%e(:-@[XAH4P"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="g)Aqi@-$!R5]@N!I{d@#"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="GJY7+g)6L_/wk}%(|p%:"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="(~Pb`ud`YhGuFUb7p~MF"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="dVBo7N3+D0AJEx6R#8[f"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="cMyEp{XI/Vf*dF#QfaF9"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="1U2=3,CM%e(:-@[XAH4P"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="g)Aqi@-$!R5]@N!I{d@#"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="dVBo7N3+D0AJEx6R#8[f" x="168" y="231"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="cMyEp{XI/Vf*dF#QfaF9"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="1U2=3,CM%e(:-@[XAH4P"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="g)Aqi@-$!R5]@N!I{d@#"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="m_}peQeK*AtWBdJuc|nZ"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="]G@B#@wKEM)4?2N^4M;]"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="dVBo7N3+D0AJEx6R#8[f"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="cMyEp{XI/Vf*dF#QfaF9"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="1U2=3,CM%e(:-@[XAH4P"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="g)Aqi@-$!R5]@N!I{d@#"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM']},
            ]
        },
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};