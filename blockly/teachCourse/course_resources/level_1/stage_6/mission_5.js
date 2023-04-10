var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s6_m5_' + window.moveType + '_title'] || MSG['l1_s6_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_024',
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
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="51" y="154"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk" x="127" y="282"><field name="TILT_TYPE">tilt_left</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="!jJ3Dg68`ah-`}MaF5Hz"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_continued_second" id="ExfhLm6:!+0//y{ttTPw"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="+!GnxWG9[exi8Qb5ut39"><field name="TIME">2</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="134"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk" x="112" y="254"><field name="TILT_TYPE">tilt_left</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="?20BtAG_P62w+I.8pikQ"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="ge`T){GEJ11Vaa7IGM`$"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}UfMG-_`DkN[XwJFjQG"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="152"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk" x="127" y="270"><field name="TILT_TYPE">tilt_left</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="0~GbdBm/G6u.)j?)+*-!"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="DQz{OiENoCL2p2-y*SJu"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="ix6S51htYt?mhY+8x?gk"><field name="TILT_TYPE">tilt_right</field></block></value><next><block type="motion_speed_distance" id="!qPh[i5@TxiI|GBO)4-o"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="s`F:tZ|jV`J5D(J.)AEV"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};