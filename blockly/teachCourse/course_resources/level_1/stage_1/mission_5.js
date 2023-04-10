var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s1_m5_' + window.moveType + '_title'] || MSG['l1_s1_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_003',
            },
            {
                'text': 'l1_help_002',
            }
        ],
    },
    guideClick: ['.restart_button'],    
    guideDrag: [
        { key: 'drag1', startBlock: 'C}]@_63n42(!7hyeu,Az', endBlock: '', endPosition:{x:'50',y:'50vh'} },
    ],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="VtS;8Q6o0F=jncs3Lc-V"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="DG-L6]^4i!=2;SbwK`O-"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="C}]@_63n42(!7hyeu,Az"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="aR8}?R{kgZ[YX[a;1Q|{"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_continued_second" id="Wq8XT~tVj1hLiGs2H;o[" x="150" y="400"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="4rZ~A2;]B?jK1o~SZpS?"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="VtS;8Q6o0F=jncs3Lc-V"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="DG-L6]^4i!=2;SbwK`O-"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="Wq8XT~tVj1hLiGs2H;o["><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="4rZ~A2;]B?jK1o~SZpS?"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="^Sbp~;e?fYA5L2#;=OCX"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="[m)_O*cq9nu`qO..8#8j"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="C}]@_63n42(!7hyeu,Az"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="6mr~th+W9u}~y|2X44Iu"><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_distance" id="u}2WhNdGG:Sbz}JGf=r]" x="176" y="400"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="{HPmSjIHWNx*Q5FaaYe["><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="^Sbp~;e?fYA5L2#;=OCX"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="[m)_O*cq9nu`qO..8#8j"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="u}2WhNdGG:Sbz}JGf=r]"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="{HPmSjIHWNx*Q5FaaYe["><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="^DkEUQm$acUmJl~gfzI3"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="byPBdK4$I5k~a7#CGjrA"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="C}]@_63n42(!7hyeu,Az"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="w3GEh,fjO8ltTB8Zn_*/"><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_distance" id="i$9IR!0DKpo4;#j),Xt/" x="189" y="400"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="KCff$(7GzS^(0w2naESi"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="^DkEUQm$acUmJl~gfzI3"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="byPBdK4$I5k~a7#CGjrA"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="i$9IR!0DKpo4;#j),Xt/"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="KCff$(7GzS^(0w2naESi"><field name="NUM">1</field></shadow></value></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};