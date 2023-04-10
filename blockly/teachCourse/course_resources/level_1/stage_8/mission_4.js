var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s8_m4_' + window.moveType + '_title'] || MSG['l1_s8_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            },
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop', 'custom_control_if_else'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="182"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="!eFy|5t1dnh1@:r@nh7?"></block></next></block><block type="sensor_ahead_obstacle" id="%X$*2BV37;m_/eGe{/[m" x="102" y="360"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="!eFy|5t1dnh1@:r@nh7?"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="@E%Qm(B?xwIndrVpO!%A"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="%X$*2BV37;m_/eGe{/[m"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="W^MY5~4^VeZPZ)i$~zc="><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="FfLN9U!Lh6l?zWyk(B3_"><field name="TIME">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="lFdSDPgG~LK/WC$EckrH"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND']},
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2},
                {type: 'motion_action_stop', times: 2}
            ]
        },
        'doubleFeet': {
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="57" y="172"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="!eFy|5t1dnh1@:r@nh7?"></block></next></block><block type="sensor_ahead_obstacle" id="%X$*2BV37;m_/eGe{/[m" x="112" y="348"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="!eFy|5t1dnh1@:r@nh7?"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="GISC`-,fti})caKu}V=l"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="%X$*2BV37;m_/eGe{/[m"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="gnj*c@OXlF,wPi+^4{{}"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="d8zitiK#b2suK!grwd$T"><field name="NUM">0</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="vI!VgLAp;)A|v4q5!Z$@"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
                {type: 'motion_action_stop', times: 2}
            ]
        }
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};