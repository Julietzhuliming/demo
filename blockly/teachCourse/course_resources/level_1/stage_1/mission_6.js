var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s1_m6_' + window.moveType + '_title'] || MSG['l1_s1_m6_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_004',
            },
            {
                'text': 'l1_help_003',
            }
        ],
    },    
    guideClick: ['#task_help'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="Z_j`(s[(bP-0DhlWm@f}"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="nH3h_Ob],2^+$2cIQ8fq"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="yT{EI[8.7rPpdm)CM+/6"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="?}/bzMHXsE;[:E[Ktj(}"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_continued_second" id="i,9Usg83I.%g$|N4_(Xq" x="112" y="317"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="eNmiR~|o]-EemqJ/:f[:"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="cjxK=E%2_s?(}L{d`H/%"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="+,;Ynus$t}m0;NrJUj#h"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="Z_j`(s[(bP-0DhlWm@f}"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="nH3h_Ob],2^+$2cIQ8fq"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="yT{EI[8.7rPpdm)CM+/6"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="?}/bzMHXsE;[:E[Ktj(}"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="cjxK=E%2_s?(}L{d`H/%"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="+,;Ynus$t}m0;NrJUj#h"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="e7Vg(OFwv,M)1-0U|~jR"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7" x="127" y="322"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="~J-#Ro$ImRN-hy?gpDGX"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="D~V+hhNohOuo%bLx?-e/"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="e7Vg(OFwv,M)1-0U|~jR"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="~J-#Ro$ImRN-hy?gpDGX"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="D~V+hhNohOuo%bLx?-e/"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="e7Vg(OFwv,M)1-0U|~jR"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value></block></next></block></next></block><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7" x="127" y="322"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="~J-#Ro$ImRN-hy?gpDGX"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="D~V+hhNohOuo%bLx?-e/"><field name="NUM">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="e7Vg(OFwv,M)1-0U|~jR"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="R9;:a.hoe4k5ljfCp)[X"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="100v)#L:|RS*ZL:.XF+W"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id=";{d%y+~~!DgAUoeIW?w%"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="=UeSxfWjhNU]=[VZ8,n7"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="c}K(vo%9%PCDvT{1C0]6"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};