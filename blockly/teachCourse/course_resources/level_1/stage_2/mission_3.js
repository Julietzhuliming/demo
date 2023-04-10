var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s2_m3_' + window.moveType + '_title'] || MSG['l1_s2_m3_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="36" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="^[GjLE9hpIP`H)@pl/:)"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="8dkOZ%{gKYvA,X5S{Q:]"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="p+:tTQ^v@U9mFojuQ-g_"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="36" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="^[GjLE9hpIP`H)@pl/:)"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="8dkOZ%{gKYvA,X5S{Q:]"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="p+:tTQ^v@U9mFojuQ-g_"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_continued_second" id="zNHTOY0|KM(678/=V1yT"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="Yj/Sm3hV0}piX:ag;i{M"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="qo%qlnMX,QcOa,BxyKME"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="G/y!$,dN2vvjI_,0TVHl"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="dZEpSUt0T`9`T43-Hl.Y"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="ifyC[4Wh.AFRX0u1xY2("><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="G/y!$,dN2vvjI_,0TVHl"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="dZEpSUt0T`9`T43-Hl.Y"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="ifyC[4Wh.AFRX0u1xY2("><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_distance" id="tcxh29f/_b!F~M3Yh5(L"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="M5jAaq90o[N$Xo^ZgF[L"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="(vf^;hBlrbC8DV8CJ02Q"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="G/y!$,dN2vvjI_,0TVHl"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="dZEpSUt0T`9`T43-Hl.Y"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="ifyC[4Wh.AFRX0u1xY2("><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="G/y!$,dN2vvjI_,0TVHl"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="dZEpSUt0T`9`T43-Hl.Y"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="ifyC[4Wh.AFRX0u1xY2("><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_distance" id="itZHo7=.zp%:M5-/bYJV"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="lh+io#%U(N6I+~C4TNWB"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="spA[B/_XV2v{0t/nZ8s}"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};