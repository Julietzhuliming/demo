var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s7_m4_' + window.moveType + '_title'] || MSG['l1_s7_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_039',
            },
            {
                'text': 'l1_help_030',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop','custom_control_if_else'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="37" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="4LyXl/F~HpTuJUc{jG?l"></block></next></block><block type="sensor_phone_pad_tilt" id="8:;rJlJ9(/EP-NT%#O)z" x="210" y="290"><field name="TILT_TYPE">tilt_down</field></block><block type="motion_speed_continued_second" id="1;]kN?-=DPZjAOG$ldau" x="68" y="344"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="f:F{``)2o9pT`8}Q91KG"><field name="TIME">1</field></shadow></value></block><block type="motion_speed_continued_second" id="Dj/1cn88IuwE,xJS:$b:" x="67" y="418"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="!r8d|)i.%Cx{_z_k)=Sr"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="51" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="4LyXl/F~HpTuJUc{jG?l"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="Q}8C^+D1/B^d2u~EQ(-w"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="8:;rJlJ9(/EP-NT%#O)z"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="Dj/1cn88IuwE,xJS:$b:"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="!r8d|)i.%Cx{_z_k)=Sr"><field name="TIME">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_continued_second" id="1;]kN?-=DPZjAOG$ldau"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="f:F{``)2o9pT`8}Q91KG"><field name="TIME">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2, index: 0},
                {type: 'motion_speed_continued_second', times: 2, index: 1},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="35" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="4LyXl/F~HpTuJUc{jG?l"></block></next></block><block type="sensor_phone_pad_tilt" id="8:;rJlJ9(/EP-NT%#O)z" x="208" y="298"><field name="TILT_TYPE">tilt_down</field></block><block type="motion_speed_distance" id="9vqL2y=(q=d32nA7Do:y" x="65" y="343"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_LH.u#hxSXu%*XWVF1Xf"><field name="NUM">2</field></shadow></value></block><block type="motion_speed_distance" id="d)(LV5*GoS7D)|b^X`NM" x="65" y="422"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="iltiWd_ub(aM-bni]4H}"><field name="NUM">2</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="51" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="4LyXl/F~HpTuJUc{jG?l"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="Q}8C^+D1/B^d2u~EQ(-w"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="8:;rJlJ9(/EP-NT%#O)z"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="F`0Bf@E[rGeIVqUwg#fD"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%EAjh61/wBfThre^xeFr"><field name="NUM">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_distance" id="P6-J_rGa^qz{/l3+YM$l"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="7id/pAw]NvlS-~#WL!=s"><field name="NUM">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2, index: 0},
                {type: 'motion_speed_distance', times: 2, index: 1},
            ]
        },
       
    },
    missionStandardTime:30*1000//通过任务的标准时间,单位毫秒
};