var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s9_m5_' + window.moveType + '_title'] || MSG['l1_s9_m5_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
    },
    guideClick:["#\\:5"],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="37" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="rAALOss?$.`IFrV+$^E+"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="FWi`~_*P}?~V1Z9]ign7"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="GPcr0)xo56R_;e#$^;|."><field name="NUM">1</field></shadow></value><value name="B"><shadow type="custom_math_num" id="jCsspu$]}/^C~W^cmTeA"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="ihB*:Uls%Wsg/~u-BF`C"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="P4{0-z%@-2SKHG3!{{Y0"><field name="TIME">2.0</field></shadow></value><next><block type="acoustooptic_paly_tone" id=")X$d*RwB]lI,~w!*SOo["><field name="toneName">E5</field><field name="beatType">beat_8_1</field></block></next></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="$`^/yZBY]*vPot|Wcf/f"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="rAALOss?$.`IFrV+$^E+"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="FWi`~_*P}?~V1Z9]ign7"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="GPcr0)xo56R_;e#$^;|."><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="!ht=maCcf!*S6Z]Yx2iy"></block></value><value name="B"><shadow type="custom_math_num" id="jCsspu$]}/^C~W^cmTeA"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="ihB*:Uls%Wsg/~u-BF`C"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="P4{0-z%@-2SKHG3!{{Y0"><field name="TIME">2.0</field></shadow></value><next><block type="acoustooptic_paly_tone" id=")X$d*RwB]lI,~w!*SOo["><field name="toneName">E5</field><field name="beatType">beat_8_1</field></block></next></block></next></block></statement></block></next></block></xml>',
          },
        'ignore': [
            { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
            { type: 'acoustooptic_paly_tone', name: ['toneName','beatType']},
        ],
        passRule: [
            { type: 'acoustooptic_paly_tone', times: 2 },
        ]
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};