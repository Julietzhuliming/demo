var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s1_m7_' + window.moveType + '_title'] || MSG['l1_s1_m7_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_003',
            }
        ],
    },    
    guideClick: [{id:'NEq$+$xuOX=iZdi}BZ{b',index:3}],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="1(ORjMgvf4~lgQ`o::E2"><field name="TIME">1</field></shadow></value></block></next></block><block type="motion_speed_continued_second" id="k[LwObGG;3%EaXXTIM-[" x="86" y="276"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="}GE)G{%2dn={_fhUt_4T"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="_#{m;sm@+Un-~Qxf79km"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="*-q4xW]bGvgu2oo({$Be"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="1(ORjMgvf4~lgQ`o::E2"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="k[LwObGG;3%EaXXTIM-["><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="}GE)G{%2dn={_fhUt_4T"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="_#{m;sm@+Un-~Qxf79km"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="*-q4xW]bGvgu2oo({$Be"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value></block></next></block><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W" x="121" y="269"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value></block></next></block><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W" x="121" y="269"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="NEq$+$xuOX=iZdi}BZ{b"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000,//通过任务的标准时间,单位毫秒
};