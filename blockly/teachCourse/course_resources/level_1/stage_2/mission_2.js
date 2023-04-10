var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s2_m2_' + window.moveType + '_title'] || MSG['l1_s2_m2_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    guideClick: ['#\\:4'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="162"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="}LHA7~h7wZr@v2[(6/$%"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="#BRiTIuq~93f/Afp0i^f"><field name="TIME">1</field></shadow></value></block></next></block><block type="motion_speed_continued_second" id="$08l;6Hnfb{uD]@lpmt3" x="148" y="302"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="kL0ejbTBJ#`]FBTvYps0"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="}LHA7~h7wZr@v2[(6/$%"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="#BRiTIuq~93f/Afp0i^f"><field name="TIME">1</field></shadow></value><next><block type="motion_speed_continued_second" id="$08l;6Hnfb{uD]@lpmt3"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="kL0ejbTBJ#`]FBTvYps0"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="LVp+-liO4+Dgg@7/e0~]"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="iX!vU^pB}(!LP5ZD9`rA"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="p))u}.!=?TTu{?Q.^*Jj"><field name="NUM">1</field></shadow></value></block></next></block><block type="motion_speed_distance" id=":}XSh|(?-wruZo,QBSv(" x="226" y="293"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i*0gp,|{}T0ZQ@?a9CZe"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="iX!vU^pB}(!LP5ZD9`rA"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="p))u}.!=?TTu{?Q.^*Jj"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id=":}XSh|(?-wruZo,QBSv("><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i*0gp,|{}T0ZQ@?a9CZe"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="o6WVN5BOwthbf*93jx9Y"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="iX!vU^pB}(!LP5ZD9`rA"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="p))u}.!=?TTu{?Q.^*Jj"><field name="NUM">1</field></shadow></value></block></next></block><block type="motion_speed_distance" id=":}XSh|(?-wruZo,QBSv(" x="226" y="293"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i*0gp,|{}T0ZQ@?a9CZe"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="iX!vU^pB}(!LP5ZD9`rA"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="p))u}.!=?TTu{?Q.^*Jj"><field name="NUM">1</field></shadow></value><next><block type="motion_speed_distance" id=":}XSh|(?-wruZo,QBSv("><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="i*0gp,|{}T0ZQ@?a9CZe"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_paly_tone" id="%-BA%sCh2S*KTK~qQ[mm"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] },
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};