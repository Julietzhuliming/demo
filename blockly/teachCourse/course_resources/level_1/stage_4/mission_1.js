var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 1,
    taskTitle: MSG['l1_s4_m1_' + window.moveType + '_title'] || MSG['l1_s4_m1_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="jtox6uk?2snI,X@YY/18" x="51" y="191"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block><block type="acoustooptic_paly_tone" id="c:#~EHS!f73muA#{$2C}" x="116" y="271"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block><block type="acoustooptic_paly_tone" id="S}JrL2ABPXM`C.IGn)wv" x="53" y="361"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_tone" id="jtox6uk?2snI,X@YY/18"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="c:#~EHS!f73muA#{$2C}"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="S}JrL2ABPXM`C.IGn)wv"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']}
            ]
        },
    },
    missionStandardTime:20*1000,//通过任务的标准时间,单位毫秒
};