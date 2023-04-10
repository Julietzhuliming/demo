var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s1_m2_' + window.moveType + '_title'] || MSG['l1_s1_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_001',
            }
        ],
    },    
    guideDrag: [
        { key: 'drag1', startBlock: '6x)?,ws^!yg)0P^8Ar_[', endBlock: 'RBpqO=zS:Min@~s1YZVV'},
    ],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_continued_second" id="6x)?,ws^!yg)0P^8Ar_[" x="158" y="327"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="l^0npcOfr,cny-5h@9J$"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="6x)?,ws^!yg)0P^8Ar_["><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="l^0npcOfr,cny-5h@9J$"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            ignore:[
                { type: 'motion_speed_continued_second', name: ['speedType','MOTION_SPEED_CONTINUED_SECOND']}
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="6x)?,ws^!yg)0P^8Ar_[" x="137" y="314"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="pK4_6dyh9BO_v@w5}h@/"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="6x)?,ws^!yg)0P^8Ar_["><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="pK4_6dyh9BO_v@w5}h@/"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType','CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000,//通过任务的标准时间,单位毫秒
};