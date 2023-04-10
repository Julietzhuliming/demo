var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s7_m5_' + window.moveType + '_title'] || MSG['l1_s7_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_029',
            },
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop', 'custom_control_if_else'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="q;_s6)7dbEoN=KTz+[5r"></block></next></block><block type="sensor_phone_pad_tilt" id=",zA_(vy/@}c;L,4c~@@I" x="124" y="308"><field name="TILT_TYPE">tilt_up</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="q;_s6)7dbEoN=KTz+[5r"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="6xtTmXUeI!hs}1}4XTvo"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id=",zA_(vy/@}c;L,4c~@@I"><field name="TILT_TYPE">tilt_up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="E4Z-GSzq;9C!_._e+B/I"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="m/EAN:)+187SMd2?q4B_"><field name="TIME">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="=]fw#:nux37GK=dE~LYv"></block></statement></block></statement></block></next></block></xml>',
            ignore:[
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 1},
                {type: 'motion_action_stop', times: 1},
            ]
        },
        'doubleFeet': {// 双足]
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="q;_s6)7dbEoN=KTz+[5r"></block></next></block><block type="sensor_phone_pad_tilt" id=",zA_(vy/@}c;L,4c~@@I" x="124" y="308"><field name="TILT_TYPE">tilt_up</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="q;_s6)7dbEoN=KTz+[5r"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="6xtTmXUeI!hs}1}4XTvo"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id=",zA_(vy/@}c;L,4c~@@I"><field name="TILT_TYPE">tilt_up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="E`%G#}:wI/K#6I=$a^VO"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="5HcB;-,u@xCks0H_^=w$"><field name="NUM">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="=]fw#:nux37GK=dE~LYv"></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 1},
                {type: 'motion_action_stop', times: 1},
            ]
        },
        
    },
    missionStandardTime:30*1000//通过任务的标准时间,单位毫秒
};