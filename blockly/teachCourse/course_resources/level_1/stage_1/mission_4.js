var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s1_m4_' + window.moveType + '_title'] || MSG['l1_s1_m4_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_002',
            }
        ],
    },    
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_continued_second" id="qd1NF}(bl?mWEv,OtTVI" x="257" y="265"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="jQdSwP$Dbv|3%AJOQ-MG"><field name="TIME">1</field></shadow></value></block><block type="motion_speed_continued_second" id="R!O.(![xk{Ez`_H;9E{c" x="133" y="406"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="c1)YM-N)xzr?K,#s@~%n"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="qd1NF}(bl?mWEv,OtTVI"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="jQdSwP$Dbv|3%AJOQ-MG"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="R!O.(![xk{Ez`_H;9E{c"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="c1)YM-N)xzr?K,#s@~%n"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="i*NLVWeNuL~8o/L7=WsE" x="163" y="217"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="43Q1KP^OY/`sapQx:Rcd"><field name="NUM">1</field></shadow></value></block><block type="motion_speed_distance" id="V:1He|7LWrugAys9JxeU" x="111" y="343"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="UVY1@3q4Pg?IA-H#B)zo"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="i*NLVWeNuL~8o/L7=WsE"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="43Q1KP^OY/`sapQx:Rcd"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="V:1He|7LWrugAys9JxeU"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="UVY1@3q4Pg?IA-H#B)zo"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="i*NLVWeNuL~8o/L7=WsE" x="249" y="265"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="43Q1KP^OY/`sapQx:Rcd"><field name="NUM">1</field></shadow></value></block><block type="motion_speed_distance" id="V:1He|7LWrugAys9JxeU" x="86" y="394"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="UVY1@3q4Pg?IA-H#B)zo"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="i*NLVWeNuL~8o/L7=WsE"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="43Q1KP^OY/`sapQx:Rcd"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="V:1He|7LWrugAys9JxeU"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="UVY1@3q4Pg?IA-H#B)zo"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};