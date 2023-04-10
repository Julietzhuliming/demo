var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s5_m4_' + window.moveType + '_title'] || MSG['l1_s5_m4_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on','acoustooptic_lights_left_right'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="fA{EOrIy4VeUM5z(Jv()"><field name="acoustoLeft">#FF0000</field><field name="acoustoRight">#FF0000</field></block></next></block><block type="acoustooptic_paly_tone" id=";9X/$L-./U7ZI@wN?BX8" x="184" y="297"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="63" y="142"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="fA{EOrIy4VeUM5z(Jv()"><field name="acoustoLeft">#FF0000</field><field name="acoustoRight">#000000</field><next><block type="custom_control_wait_seconds" id="ql{e;*Y1dWr-?mq%Ze~7"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="%AALn*CudmrE(R1bQM%i"><field name="NUM">2</field></shadow></value><next><block type="acoustooptic_paly_tone" id=";9X/$L-./U7ZI@wN?BX8"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></xml>',
        },
        'ignore':[
            { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};