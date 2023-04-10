var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s4_m2_' + window.moveType + '_title'] || MSG['l1_s4_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_020',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="?_hnx9o5o~HB9*.VPlfk"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="QtM7o@GcC$QXED8P=Q0j"><field name="NUM">3</field></shadow></value></block></next></block><block type="acoustooptic_paly_tone" id=";[s(l~)|^Nre^)iiQ1p8" x="133" y="324"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="?_hnx9o5o~HB9*.VPlfk"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="QtM7o@GcC$QXED8P=Q0j"><field name="NUM">5</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id=";[s(l~)|^Nre^)iiQ1p8"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']}
            ]
        },
    },

    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};