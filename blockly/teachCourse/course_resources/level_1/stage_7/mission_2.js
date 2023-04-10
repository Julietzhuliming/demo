var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s7_m2_' + window.moveType + '_title'] || MSG['l1_s7_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_025',
            },
            {
                'text': 'l1_help_026',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="]69]844AfSRdY_!%Kq`V"><next><block type="acoustooptic_paly_tone" id="7_kuF6Z2ha)W(VgZ!9-("><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="Ev-o}SC~G/rRQRr;a[3!"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="]69]844AfSRdY_!%Kq`V"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="Z3S|[x}s,6E|W`;!#afW"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="acoustooptic_paly_tone" id="7_kuF6Z2ha)W(VgZ!9-("><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></statement></block></next></block></xml>',
        },
        'ignore': [
            { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] }
        ],
        passRule: [
            {type: 'acoustooptic_paly_tone', times: 2},
        ]
    },
    missionStandardTime:30*1000//通过任务的标准时间,单位毫秒
};