var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s9_m7_' + window.moveType + '_title'] || MSG['l1_s9_m7_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_logic_compare']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="34" y="150"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_lights_on" id="Gd3pcH|NftH6o?ilWbOh" x="194" y="236"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="]-~*.dTd}0^mvub-cOq]"><field name="TIME">0.2</field></shadow></value><next><block type="motion_action_stop" id="|rtUbZf[9p[v,8+Y@.+G"></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="34" y="150"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="[d?UGp`$-c~|%}m5}%=7"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="GvOJ(gz!D1Nd5pQhg6V+"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="p:u`;Dj+fwt@2BaAp2cD"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="CTNB2(peNAJ@)/Zx|vZx"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="h94C#N1ql_sf`,h~B$MX"></block></value><value name="B"><shadow type="custom_math_num" id="0Q1@?(EFtPQg*@xKwQym"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="Gd3pcH|NftH6o?ilWbOh"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="]-~*.dTd}0^mvub-cOq]"><field name="TIME">0.2</field></shadow></value><next><block type="motion_action_stop" id="|rtUbZf[9p[v,8+Y@.+G"></block></next></block></next></block></next></block></next></block></xml>',
        },
        ignore: [
            { type: 'motion_action_speed', name: ['speedType'] },
            { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] },
        ]
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};