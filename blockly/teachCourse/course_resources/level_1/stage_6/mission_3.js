var courseData = {
    level: 1,
    stage: 6,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s6_m3_' + window.moveType + '_title'] || MSG['l1_s6_m3_commonType_title'],
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
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="GInvE.:jW{-MsDMFh~ho"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="custom_control_wait_for" id="IVkT;VenzqUNKm9`wtlQ" x="136" y="279"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="1w#RbzID.=SYqu=oTx0;"><field name="TILT_TYPE">tilt_left</field></block></value></block><block type="motion_action_stop" id="Q7i`!m!aq8cF+i@mTQ[d" x="139" y="368"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="GInvE.:jW{-MsDMFh~ho"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="IVkT;VenzqUNKm9`wtlQ"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_phone_pad_tilt" id="1w#RbzID.=SYqu=oTx0;"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="motion_action_stop" id="Q7i`!m!aq8cF+i@mTQ[d"></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']}
            ]
        },
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};