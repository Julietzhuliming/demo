var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s8_m5_' + window.moveType + '_title'] || MSG['l1_s8_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            },
        ],
    },
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop', 'custom_control_if_else'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="65" y="173"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="8GB5(2x]=$P~O]{}w@zI"></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="8GB5(2x]=$P~O]{}w@zI"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="gM;Tvcq/4M?0s+j64.zo"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="_}RBxs^0Z$vquVB_x70a"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_action_speed" id="Ed/abm)gg}t;i*ixYQ~n"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_action_stop" id="iko@3+eu:7enb{oJuq1y"><next><block type="acoustooptic_paly_tone" id="E%MNm%scJakp]9@^|(|N"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
            ],
            passRule: [
                {type: 'motion_action_speed', times: 2},
                {type: 'acoustooptic_paly_tone', times: 2}
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};