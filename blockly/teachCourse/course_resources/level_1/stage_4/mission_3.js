var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s4_m3_' + window.moveType + '_title'] || MSG['l1_s4_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_020',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="164"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="-wQ*B8U(8j%6:1|X2Na_" x="125" y="267"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id=".omcjIY5!WzycFA6amd*"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id=",~v}!@j.%ID^7c%X)JF~"><field name="NUM">9</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="-wQ*B8U(8j%6:1|X2Na_"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']}
            ]
        }
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};