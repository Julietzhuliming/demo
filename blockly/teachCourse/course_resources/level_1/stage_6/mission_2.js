var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s6_m2_' + window.moveType + '_title'] || MSG['l1_s6_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_021',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_seconds'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="?Y}gK:J,hUlHl+$([spt"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="?Y}gK:J,hUlHl+$([spt"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_seconds" id=",z)Z4QNKS@XAE1^g=|Zh"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="}xZV!Y`Em33kqu389tv~"><field name="NUM">2</field></shadow></value><next><block type="motion_action_stop" id="1zJw1cCpINa%(c+_(2p("></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']}
            ]
        },
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};