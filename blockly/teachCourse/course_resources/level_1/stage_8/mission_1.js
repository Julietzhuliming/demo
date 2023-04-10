var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 1,
    taskTitle: MSG['l1_s8_m1_' + window.moveType + '_title'] || MSG['l1_s8_m1_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    guideClick: ['#\\:5'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="141"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="+n#G/6]]DJ;Ce?fbv,P2"></block></next></block><block type="acoustooptic_paly_tone" id="K{/a-jVnXC~joYDmHPz5" x="33" y="292"><field name="toneName">E5</field><field name="beatType">beat_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="+n#G/6]]DJ;Ce?fbv,P2"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_ahead_obstacle" id="_;8p[ERP$nQ+!ICt3sFR"></block></value><next><block type="acoustooptic_paly_tone" id="K{/a-jVnXC~joYDmHPz5"><field name="toneName">E5</field><field name="beatType">beat_1</field></block></next></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
            ]
        },
    },
    missionStandardTime: 30 * 1000,//通过任务的标准时间,单位毫秒
};