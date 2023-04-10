var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 1,
    taskTitle: MSG['l1_s10_m1_' + window.moveType + '_title'] || MSG['l1_s10_m1_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
        'math': ['custom_math_num']
    },
    guideDrag: [
        { key: 'drag1', startBlock: '!)@UfL{LqF{q}CJfElY%', endBlock: '~PRn@{WdIAd`A`On$iG/' },
    ],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="]1h?TyU?x!AvVSy_.SB%"><field name="TIME">1</field></shadow></value></block></next></block><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%" x="168" y="278"><field name="NUM">8</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="]1h?TyU?x!AvVSy_.SB%"><field name="TIME">1</field></shadow><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%"><field name="NUM">8</field></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%bCw3$%25[xh@ax#73Xc"><field name="NUM">1</field></shadow></value></block></next></block><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%" x="185" y="278"><field name="NUM">8</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%bCw3$%25[xh@ax#73Xc"><field name="NUM">1</field></shadow><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%"><field name="NUM">8</field></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%bCw3$%25[xh@ax#73Xc"><field name="NUM">1</field></shadow></value></block></next></block><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%" x="176" y="278"><field name="NUM">8</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="~PRn@{WdIAd`A`On$iG/"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%bCw3$%25[xh@ax#73Xc"><field name="NUM">1</field></shadow><block type="custom_math_num" id="!)@UfL{LqF{q}CJfElY%"><field name="NUM">8</field></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
    },
    missionStandardTime:35*1000,//通过任务的标准时间,单位毫秒
};