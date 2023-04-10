var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s9_m4_' + window.moveType + '_title'] || MSG['l1_s9_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_035',
            },
            {
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
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="145"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_continued_second" id="o.$n.k:rG8%~a~c{64n1"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="O~Hj_m!)0PWl0rT0XxSB"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="145"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="n+.iAJ@sLW;kHZoQ:|Pu"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_continued_second" id="o.$n.k:rG8%~a~c{64n1"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="O~Hj_m!)0PWl0rT0XxSB"><field name="TIME">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND'] },
            ],
            passRule: [
                { type: 'motion_speed_continued_second', times: 2 },
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="144"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="4W/51SE+U]hN/e03,QxT"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="50;Eha:F$7*~rAh#NF5!"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="144"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id=";Sbes3~7]R;w-o!]HuuR"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="4W/51SE+U]hN/e03,QxT"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="50;Eha:F$7*~rAh#NF5!"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM'] },
            ],
            passRule: [
                { type: 'motion_speed_distance', times: 2 },
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="158"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="4W/51SE+U]hN/e03,QxT"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="50;Eha:F$7*~rAh#NF5!"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="158"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="v9eI~#{OdEDxZ=}{1PK/"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="=r()Fp;IlK`PB*[%rbAO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="/pVNf6}D6:k99bSuWO:]"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e$+v!bj=gf,[}SZ6O4I:"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="A:]!g^1#BOIOp6+EZ%?b"></block></value><value name="B"><shadow type="custom_math_num" id="R:vO2l!.6o6qbP#K/7T]"><field name="NUM">10</field></shadow></value></block></value><next><block type="motion_speed_distance" id="4W/51SE+U]hN/e03,QxT"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="50;Eha:F$7*~rAh#NF5!"><field name="NUM">1</field></shadow></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM'] },
            ],
            passRule: [
                { type: 'motion_speed_distance', times: 2 },
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};