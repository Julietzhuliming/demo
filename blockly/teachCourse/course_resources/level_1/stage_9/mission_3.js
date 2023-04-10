var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s9_m3_' + window.moveType + '_title'] || MSG['l1_s9_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_035',
            }, {
                'text': 'l1_help_036',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="41" y="134"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><next><block type="motion_speed_continued_second" id="/ofC(bL5L4g6Hx|{*H[2"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="q0JIJrvk*:h!G}h1NMBX"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i" x="165" y="319"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_continued_second" id="/ofC(bL5L4g6Hx|{*H[2"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="q0JIJrvk*:h!G}h1NMBX"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            'ignore': [
                {type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="144"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><next><block type="motion_speed_distance" id="C,YG]U:~Mjc2SJV@]Z.0"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="=H`Nz3/.$/pcgtCI{C;="><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i" x="165" y="319"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="C,YG]U:~Mjc2SJV@]Z.0"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="=H`Nz3/.$/pcgtCI{C;="><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            'ignore': [
                {type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="140"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><next><block type="motion_speed_distance" id="]4k{U%oBaLC-o9JxZf`9"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="YkSR]|GEJU(6QN@-SGkl"><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i" x="165" y="319"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="140"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="r:[d~t#m$_f.4sC_oO2t"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="H8^|{Pi(d|p)pF.ul*~i"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="LiGW9Bp5NgaYU~Gzs8]2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="HTZTw}tf=*y+@~TfB*Ku"></block></value><value name="B"><shadow type="custom_math_num" id=")gQ|,7=X[A8%|WU$m}dO"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="]4k{U%oBaLC-o9JxZf`9"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="YkSR]|GEJU(6QN@-SGkl"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            'ignore': [
                {type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};