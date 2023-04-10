var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s2_m8_' + window.moveType + '_title'] || MSG['l1_s2_m8_commonType_title'],
    helpList: {
        'doubleFeet': [
            {
                'text': 'l1_help_009',
                        }, {
                'text': 'l1_help_011',
                        }, {
                'text': 'l1_help_014',
            }
        ],
        'fourFeet': [
            {
                'text': 'l1_help_009',
            }, {
                'text': 'l1_help_012',
            }, {
                'text': 'l1_help_014',
            }
        ],
        'commonType': [
            {
                'text': 'l1_help_009',
            },{
                'text': 'l1_help_010',
            }, {
                'text': 'l1_help_013',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_paly_sound'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="6W){.}ImMe8q?9M3k^/F"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field></block></next></block><block type="motion_speed_continued_second" id="$Qxi3zia8.mt8+=k1jkm" x="131" y="247"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="7@8hD+2E[*3d@qwk1d8]"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="F}~iYgB%mCZ|wo+e:$Wh"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="16mX)ynlu!gcT1O*q46`"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="6W){.}ImMe8q?9M3k^/F"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field><next><block type="motion_speed_continued_second" id="$Qxi3zia8.mt8+=k1jkm"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="7@8hD+2E[*3d@qwk1d8]"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="F}~iYgB%mCZ|wo+e:$Wh"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="16mX)ynlu!gcT1O*q46`"><field name="TIME">0.5</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0, type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND'] },
                { index: 1, type: 'motion_speed_continued_second', name: ['speedType'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="=7Ho8#e0V$Mwk2;n@Ux}"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field></block></next></block><block type="motion_speed_distance" id="Jo;@|=7]x,MMK=CJzOXC" x="157" y="270"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="mA.@tZ]$tW~[)L:_MSer"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{DSWS!m;7r+rIzp5q3*K"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="]~hK6bHr/k_(#d*!#/rj"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="=7Ho8#e0V$Mwk2;n@Ux}"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field><next><block type="motion_speed_distance" id="Jo;@|=7]x,MMK=CJzOXC"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="mA.@tZ]$tW~[)L:_MSer"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{DSWS!m;7r+rIzp5q3*K"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="]~hK6bHr/k_(#d*!#/rj"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0, type: 'motion_speed_distance', name: [ 'CUSTOM_MATH_NUM'] },
                { index: 1, type: 'motion_speed_distance', name: ['speedType'] },
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="=7Ho8#e0V$Mwk2;n@Ux}"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field></block></next></block><block type="motion_speed_distance" id="Jo;@|=7]x,MMK=CJzOXC" x="157" y="270"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="mA.@tZ]$tW~[)L:_MSer"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{DSWS!m;7r+rIzp5q3*K"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="]~hK6bHr/k_(#d*!#/rj"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="=7Ho8#e0V$Mwk2;n@Ux}"><field name="isDelay">true</field><field name="chooseSound">machine:engine</field><next><block type="motion_speed_distance" id="Jo;@|=7]x,MMK=CJzOXC"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="mA.@tZ]$tW~[)L:_MSer"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{DSWS!m;7r+rIzp5q3*K"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="]~hK6bHr/k_(#d*!#/rj"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0, type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM'] },
                { index: 1, type: 'motion_speed_distance', name: ['speedType'] },
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};