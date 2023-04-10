var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s9_m8_' + window.moveType + '_title'] || MSG['l1_s9_m8_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance','sensor_phone_pad_tilt'],
        'math': ['custom_math_logic_compare']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="58" y="156"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="61" y="84"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="Eb*,F9`i.Cb-z5OCtsVv"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="qskkwj|2_ZY8ROVsl,}0"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="hMJKPy=Ud{9?_lkZL9Y!"><field name="TILT_TYPE">tilt_up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="KrYRrS6Lu.3Pj42V_xxy"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="o#hfDJ$N=v:9F!TJ-x-E"></block></statement></block></statement></block></next></block></xml>',
        },
        'ignore':[
            { type: 'motion_action_speed', name: ['speedType']}
        ],
        passRule: [
            { type: 'motion_action_speed', times: 2 },
            { type: 'motion_action_stop', times: 2 },
        ]
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};