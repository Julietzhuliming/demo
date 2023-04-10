var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s7_m6_' + window.moveType + '_title'] || MSG['l1_s7_m6_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop', 'custom_control_if_else'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="41" y="163"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("></block></next></block><block type="motion_speed_continued_second" id="-Kw+`w`?D;t]A~ilc]hS" x="188" y="340"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="0~A9{,tKBdw=gaKIrdlh"><field name="TIME">0.2</field></shadow></value><next><block type="motion_speed_continued_second" id="33Tl4lClUST|AcvKf-*k"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="E*ZjAE_vV0nt5)ZX*Ezw"><field name="TIME">0.2</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="!*j)?9`j)N^xe31M2iYC"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="]]y{S-%D~;94U$fr?G#%"><field name="TILT_TYPE">tilt_swing</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="-Kw+`w`?D;t]A~ilc]hS"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="0~A9{,tKBdw=gaKIrdlh"><field name="TIME">0.2</field></shadow></value><next><block type="motion_speed_continued_second" id="33Tl4lClUST|AcvKf-*k"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="E*ZjAE_vV0nt5)ZX*Ezw"><field name="TIME">0.2</field></shadow></value></block></next></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="o:{#(O)_R|Zk}1BV!F1y"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 1, index: 0},
                {type: 'motion_speed_continued_second', times: 1, index: 1},
                {type: 'motion_action_stop', times: 1},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="162"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("></block></next></block><block type="motion_speed_distance" id="ZxVgdkW0;hyH(%t!`W#J" x="193" y="357"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="Dri{pif+CFzjYpnjX^Xm"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="}92Tbq]UOcqk[1oeAn_9"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="vjE/}uRwXukxY0WTUGZ."><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="!*j)?9`j)N^xe31M2iYC"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="]]y{S-%D~;94U$fr?G#%"><field name="TILT_TYPE">tilt_swing</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="X!ElGbl]cfqkh$zU[)^9"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="~6{zxNbjr+9c8r7[=@c/"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{n=vzG*Ve7vACjSJmwn9"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="f*/st_!=4,$b=Y|13C5@"><field name="NUM">1</field></shadow></value></block></next></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="o:{#(O)_R|Zk}1BV!F1y"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 1, index: 0},
                {type: 'motion_speed_distance', times: 1, index: 1},
                {type: 'motion_action_stop', times: 1},
            ]
        },
        'fourFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="51" y="167"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("></block></next></block><block type="motion_speed_distance" id="ZxVgdkW0;hyH(%t!`W#J" x="193" y="376"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="Dri{pif+CFzjYpnjX^Xm"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="}92Tbq]UOcqk[1oeAn_9"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="vjE/}uRwXukxY0WTUGZ."><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="51" y="167"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xLK~K6~N#F%l93HvWMc("><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="svaG^sUX:;a~eQl2O8Vd"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="X|p~uDmp].@e/WK2x%zy"><field name="TILT_TYPE">tilt_swing</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="ZxVgdkW0;hyH(%t!`W#J"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="Dri{pif+CFzjYpnjX^Xm"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="}92Tbq]UOcqk[1oeAn_9"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="vjE/}uRwXukxY0WTUGZ."><field name="NUM">1</field></shadow></value></block></next></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="udE{VvAfCT5Yf$aIPgHV"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 1, index: 0},
                {type: 'motion_speed_distance', times: 1, index: 1},
                {type: 'motion_action_stop', times: 1},
            ]
        },
    },
    missionStandardTime:30*1000//通过任务的标准时间,单位毫秒
};