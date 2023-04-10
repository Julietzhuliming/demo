var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint:1,
    mission:1,
    taskTitle: MSG['l1_s5_m1_' + window.moveType + '_title'] || MSG['l1_s5_m1_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone',  'acoustooptic_lights_on'],
    },
    program:{
        'commonType': {// 普通类别
            init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_action_speed" id="z%2Q,9IFAB~p=5=?Hv~h" x="137" y="204"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></xml>',
            standard:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="z%2Q,9IFAB~p=5=?Hv~h"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field></block></next></block></xml>',
        },
    },
    missionStandardTime:25*1000,//通过任务的标准时间,单位毫秒
};