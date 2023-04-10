var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s6_m6_' + window.moveType + '_title'] || MSG['l1_s6_m6_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text':'l1_help_025',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times', 'custom_control_wait_for'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="45" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"></block></next></block><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8" x="121" y="311"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_continued_second" id="6WeCdVO@W%72)q:az|T|"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="hX9ag4EV-+GBXFB0J4K?"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_continued_second" id="6WeCdVO@W%72)q:az|T|"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="hX9ag4EV-+GBXFB0J4K?"><field name="TIME">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2}
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="38" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"></block></next></block><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8" x="136" y="301"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="XjQiHM$@9%Dv:{yVqNoo"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="m0wX$o*3TeLpWt3T$c|P"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="XjQiHM$@9%Dv:{yVqNoo"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="m0wX$o*3TeLpWt3T$c|P"><field name="NUM">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_distance', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2}
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="31" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"></block></next></block><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8" x="112" y="296"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="XjQiHM$@9%Dv:{yVqNoo"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="m0wX$o*3TeLpWt3T$c|P"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="UNLEsg|5Fr.@{GctYc!n"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="f2yP%$])/s05W.Pam9z8"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="T?Lr,MoRl?YHV6+]X_#}"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="v`@rtkd#V_vjbefLfSD9"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="XjQiHM$@9%Dv:{yVqNoo"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="m0wX$o*3TeLpWt3T$c|P"><field name="NUM">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_distance', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2}
            ]
        },
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};