var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s10_m3_' + window.moveType + '_title'] || MSG['l1_s10_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            }, {
                'text': 'l1_help_034',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_logic_compare']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="Vr8?{8okaZAz2l*tm$(f"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="kxXGxj%@M.yaXXUb.}OU"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e8aJ_-]?:A#]ptTGN4_2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id=":xZOV/PN_GH?5TePZZrQ"></block></value><value name="B"><shadow type="custom_math_num" id="5;XXdUZEe_xwV/DZ35sF"><field name="NUM">5</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="*=PKysuu^rO)%sa1~BbE"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="wvjp[F{@q+w(^ueyx)Vm"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="sensor_obstacle_distance" id="fx(K^JxGr}Y(qFIh-qak" x="241" y="356"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="Vr8?{8okaZAz2l*tm$(f"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="kxXGxj%@M.yaXXUb.}OU"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="e8aJ_-]?:A#]ptTGN4_2"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id=":xZOV/PN_GH?5TePZZrQ"></block></value><value name="B"><shadow type="custom_math_num" id="5;XXdUZEe_xwV/DZ35sF"><field name="NUM">5</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="*=PKysuu^rO)%sa1~BbE"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="wvjp[F{@q+w(^ueyx)Vm"><field name="TIME">1</field></shadow><block type="sensor_obstacle_distance" id="fx(K^JxGr}Y(qFIh-qak"></block></value></block></next></block></next></block></xml>',
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};