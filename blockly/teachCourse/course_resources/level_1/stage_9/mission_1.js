var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint:1,
    mission:1,
    taskTitle: MSG['l1_s9_m1_' + window.moveType + '_title'] || MSG['l1_s9_m1_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_034',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program:{
        'commonType': {// 普通类别
            init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="23" y="149"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="B^Tddp2_A=:oy0~oy*IO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="}|P0CiL8{28csKjak^l["><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="9%g8h=_-=pz9py]wS}o6"><field name="NUM">0</field></shadow><block type="sensor_obstacle_distance" id="VqjQ[/N%n*7a6QiJTSQV"></block></value><value name="B"><shadow type="custom_math_num" id="EA1ch!S^gl;_%^e8dr.i"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_paly_tone" id="{j9WS`iz61z8}L{!{_B5"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="B^Tddp2_A=:oy0~oy*IO"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="}|P0CiL8{28csKjak^l["><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="9%g8h=_-=pz9py]wS}o6"><field name="NUM">0</field></shadow><block type="sensor_obstacle_distance" id="VqjQ[/N%n*7a6QiJTSQV"></block></value><value name="B"><shadow type="custom_math_num" id="EA1ch!S^gl;_%^e8dr.i"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_paly_tone" id="{j9WS`iz61z8}L{!{_B5"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
        },
        'ignore':[
            { type: 'acoustooptic_paly_tone', name: ['toneName','beatType']},
        ],
    },
    missionStandardTime:35*1000,//通过任务的标准时间,单位毫秒
};