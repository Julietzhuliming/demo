var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint:1,
    mission:1,
    taskTitle: MSG['l1_s7_m1_' + window.moveType + '_title'] || MSG['l1_s7_m1_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_026',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_wait_for', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    guideClick: ['#\\:5'],
    program:{
        'commonType': {// 普通类别
            init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="146"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="y|BA*`j.3voJWl=|ao2]"></block></next></block><block type="acoustooptic_paly_tone" id="jn:Q|IwEY84zkvp!OrQ4" x="145" y="293"><field name="toneName">E5</field><field name="beatType">beat_1</field></block></xml>',
            standard:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="y|BA*`j.3voJWl=|ao2]"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="|cm|(8*#[@,:mu:e_GxC"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="acoustooptic_paly_tone" id="jn:Q|IwEY84zkvp!OrQ4"><field name="toneName">E5</field><field name="beatType">beat_1</field></block></next></block></next></block></xml>',
        },
        'ignore':[
            { type: 'acoustooptic_paly_tone', name: ['toneName','beatType']}
        ],
    },
    missionStandardTime:30*1000,//通过任务的标准时间,单位毫秒
};