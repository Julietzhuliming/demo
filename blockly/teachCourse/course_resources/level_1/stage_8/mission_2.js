var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s8_m2_' + window.moveType + '_title'] || MSG['l1_s8_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_025',
            },
            {
                'text': 'l1_help_033',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="%m4@Ravnjo@qw74L,x9#"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_ahead_obstacle" id="}qYb-X4L^*kZwY3,b1Y("></block></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="LfYJ6^;a3|@zkwAT9,w2"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="%m4@Ravnjo@qw74L,x9#"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_ahead_obstacle" id="}qYb-X4L^*kZwY3,b1Y("></block></value><next><block type="acoustooptic_paly_tone" id="9hqtnxB-:/%`pNStR;Ac"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
            ],
            passRule: [
                {type: 'acoustooptic_paly_tone', times: 2}
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};