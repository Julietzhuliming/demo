var courseData = {
    level: 1,
    stage: 1,
    knowledgePoint: 1,
    mission: 9,
    taskTitle: MSG['l1_s1_m9_' + window.moveType + '_title'] || MSG['l1_s1_m9_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_005',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
    },
    guideClick: ['#\\:2'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="93"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="Y=_s1~:Lk,ThMgh3_S1J"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="V|P7m6[QBQ3(dr~Y8g,#"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="7D4ckk{:M[%F%t$h4vF["><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="]}#YueyXgF6(!g4DN45:"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="R[%x5F@=d/sQ.$0tEBVo"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="d7mINmz-?_XVSk0jY9`W"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="mfeOv74bFIDHMl-N;Sd@"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=";@/YK3},_JR_u2uRf6s8"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="93"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="60" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="M~VW;@rT,Jjd2$b1+JZ{"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="d6*]~qgrULeHQ0c;gR%!"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="L9A9Lav-18A_3:uT5WS("><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="%Sj%CapxtQ;h=(UUdlWN"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="fn+*egiv3(7zq^f)o:p1"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="h-w0[g}D-^yul[*g.`$M"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="B_9TKKn-w8E/0G:=k.Fy"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="1fnu[hrvy2D6wiZq_{Qv"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            'ignore': [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="93"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="d5E#m_HB}a#as{?[6kX:"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_Ojot+p0{b6N03J^R(wQ"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="L+D:__19@BvT0Ig//,o^"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="vhIQ2q3FdvxqUZH=V)g$"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="{/gxQaZs?_wG5A21;GVQ"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="x,yi.NR(fzu6u4!{-bZ?"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id="sSf`-jS_qbU1v:l`0`qW"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="1:Cq]^WrZ?@0%o5^L0yr"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            'ignore': [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};