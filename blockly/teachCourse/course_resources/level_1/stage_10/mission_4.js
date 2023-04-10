var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s10_m4_' + window.moveType + '_title'] || MSG['l1_s10_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            },
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
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_add_minus', 'custom_math_logic_compare']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_continued_second" id="!Ps:3,)?#?71m7x$g!ra"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="L!(]FK3WpBI0]Dh(rg,h"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87" x="197" y="369"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="bsCqdnx$8Ycn3b:o-@5`"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_continued_second" id="i7=VPcpx50YOC5m$R/bW"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="oiI7h08-ZMX/S:%ZLMvI"><field name="TIME">1</field></shadow><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_distance" id="_9+a3)Cj]uqAS.5-`ME7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i68KLJe2B_,fv=9wj~`K"><field name="NUM">2</field></shadow></value></block></next></block></next></block><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87" x="197" y="369"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="@9Y7JfESOD56s.Q(m=wF"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_distance" id="_9+a3)Cj]uqAS.5-`ME7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i68KLJe2B_,fv=9wj~`K"><field name="NUM">2</field></shadow><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_distance" id="_9+a3)Cj]uqAS.5-`ME7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i68KLJe2B_,fv=9wj~`K"><field name="NUM">2</field></shadow></value></block></next></block></next></block><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87" x="197" y="369"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="@9Y7JfESOD56s.Q(m=wF"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="5czwM,MI|JVo3AO?PG2^"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="X0I^[f,?}?4;?.J$bbzm"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="Qgl~1T34JgKv!G?Aps`t"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="|0L)^HrRauoY|Q/]_I`t"></block></value><value name="B"><shadow type="custom_math_num" id="+$j)X+q/)*zFkYq?T0J)"><field name="NUM">5</field></shadow></value></block></value><next><block type="motion_speed_distance" id="_9+a3)Cj]uqAS.5-`ME7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i68KLJe2B_,fv=9wj~`K"><field name="NUM">2</field></shadow><block type="custom_math_add_minus" id="w``Sm4}i(}!CmD$ByN87"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="W$o@2rQ?3Q5MDN1O+2-("><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="vd;9lhA9.h,|gB7UT*1{"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="2u%d2x4vp~wma^8$,x3S"><field name="NUM">0.5</field></shadow></value></block></value></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};