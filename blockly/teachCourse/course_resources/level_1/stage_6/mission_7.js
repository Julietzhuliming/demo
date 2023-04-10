var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s6_m7_' + window.moveType + '_title'] || MSG['l1_s6_m7_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_025',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_repeat_times', 'custom_control_wait_for'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6" x="96" y="214"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="motion_speed_continued_second" id="3WjG!@lcCGTK^p04ENTw"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=",*i?{VocRzDquJcF![g%"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="WeqsLd)|m0ujWr{@7Z,_"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_continued_second" id="3WjG!@lcCGTK^p04ENTw"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=",*i?{VocRzDquJcF![g%"><field name="TIME">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2}
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="42" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6" x="88" y="216"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="motion_speed_distance" id="(E%)XQS|E!Egh)(Jn]h{"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",wMF(M]TovvNpblQ0h[+"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="/5e+qSxXVGW4#iT07}gt"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="(E%)XQS|E!Egh)(Jn]h{"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",wMF(M]TovvNpblQ0h[+"><field name="NUM">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_distance', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2}
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6" x="96" y="220"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="motion_speed_distance" id="(E%)XQS|E!Egh)(Jn]h{"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",wMF(M]TovvNpblQ0h[+"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="%vZz4f*a[A_*^G,9_@0T"><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="bvo]]Q##ttJ:RPP7E{W6"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="zt|X205unG}^Vf9%V)mW"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="9;$O]/x@MQ/tOPpx2E-w"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="(E%)XQS|E!Egh)(Jn]h{"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=",wMF(M]TovvNpblQ0h[+"><field name="NUM">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',
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