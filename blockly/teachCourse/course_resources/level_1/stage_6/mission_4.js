var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s6_m4_' + window.moveType + '_title'] || MSG['l1_s6_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_023',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times','custom_control_wait_for'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="5wd!Ou)H%hC#tTh~gmXf"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="sensor_phone_pad_tilt" id="UYPM=_5ARft;EK8E[P*6" x="85" y="268"><field name="TILT_TYPE">tilt_left</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="5wd!Ou)H%hC#tTh~gmXf"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="dn;YaYx(9;R|sVST7s)["><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="UYPM=_5ARft;EK8E[P*6"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="motion_action_stop" id="xKGe}y1BmG_.s6AV2L5;"><next><block type="acoustooptic_lights_on" id="f2.Anp;=~ud`Y_oVDm#5"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="W`Qy}bIsJ/hGW1xLM5mw"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
            ]
        },
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};