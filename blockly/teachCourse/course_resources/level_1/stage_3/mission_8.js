var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s3_m8_' + window.moveType + '_title'] || MSG['l1_s3_m8_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on','acoustooptic_lights_left_right'],
    },
    guideClick: ['#\\:4'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="58" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_continued_second" id="Gw$y*aZPs]D7SpGg,hNV" x="176" y="244"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=",|SF1z@S3`9[`dE#:%vY"><field name="TIME">1</field></shadow></value></block><block type="motion_speed_continued_second" id="Q[#9p:kMc2O9nD_O*P{-" x="41" y="355"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="rtTrzm9$YsO8]RAn_~tU"><field name="TIME">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="{lQ.%I{B.7;O()Y/W]?C"><field name="acoustoLeft">#FFF000</field><field name="acoustoRight">#000000</field><next><block type="motion_speed_continued_second" id="Gw$y*aZPs]D7SpGg,hNV"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=",|SF1z@S3`9[`dE#:%vY"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_left_right" id=",s:gskJGWqE!v]joWLF7"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#FFF000</field><next><block type="motion_speed_continued_second" id="oHB}[=I+{3jkf$exT7Um"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="cV)w?1*s4x@hInqeI.HJ"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0,type: 'acoustooptic_lights_left_right', name: ['acoustoRight']},
                { index: 0,type: 'motion_speed_continued_second', name: ['speedType','MOTION_SPEED_CONTINUED_SECOND'] },
                { index: 1, type: 'acoustooptic_lights_left_right', name: ['acoustoLeft'] },
                { index: 1,type: 'motion_speed_continued_second', name: ['speedType','MOTION_SPEED_CONTINUED_SECOND'] },
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="l?aQ*]y=PBU27kxbm,s~" x="214" y="253"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="ZHMXALNtdL]2G.qzcBHD"><field name="NUM">1</field></shadow></value></block><block type="motion_speed_distance" id="5ITXo707vb{w,TsQYF|T" x="36" y="383"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="HF8C7-dd)BeI7|-jqk%v"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="NPr6Nk!/!)S!(HnEn!B|"><field name="acoustoLeft">#FFF000</field><field name="acoustoRight">#000000</field><next><block type="motion_speed_distance" id="l?aQ*]y=PBU27kxbm,s~"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="ZHMXALNtdL]2G.qzcBHD"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_left_right" id="JM8q-Lls5/Ktnab{vhvO"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#FFF000</field><next><block type="motion_speed_distance" id="AJ(J.78S8x4haJmV$dt6"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="nO3LvTw#-5$pSLqFbu)G"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0, type: 'acoustooptic_lights_left_right', name: ['acoustoRight'] },
                { index: 0,type: 'motion_speed_distance', name: ['speedType', 'DISTANCE'] },
                { index: 1, type: 'acoustooptic_lights_left_right', name: ['acoustoLeft'] },
                { index: 1,type: 'motion_speed_distance', name: ['speedType', 'DISTANCE'] }
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="45" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_speed_distance" id="l?aQ*]y=PBU27kxbm,s~" x="198" y="257"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="ZHMXALNtdL]2G.qzcBHD"><field name="NUM">1</field></shadow></value></block><block type="motion_speed_distance" id="5ITXo707vb{w,TsQYF|T" x="40" y="376"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="HF8C7-dd)BeI7|-jqk%v"><field name="NUM">1</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="8+{@JS$ttW^WmV)O#^MH"><field name="acoustoLeft">#FFF000</field><field name="acoustoRight">#000000</field><next><block type="motion_speed_distance" id="l?aQ*]y=PBU27kxbm,s~"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="ZHMXALNtdL]2G.qzcBHD"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_left_right" id="N2(iv:PGW)6R%MY0jhh/"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#FFF000</field><next><block type="motion_speed_distance" id="5ITXo707vb{w,TsQYF|T"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="HF8C7-dd)BeI7|-jqk%v"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                { index: 0, type: 'acoustooptic_lights_left_right', name: ['acoustoRight'] },
                { index: 0,type: 'motion_speed_distance', name: ['speedType', 'DISTANCE'] },
                { index: 1, type: 'acoustooptic_lights_left_right', name: ['acoustoLeft'] },               
                { index: 1,type: 'motion_speed_distance', name: ['speedType', 'DISTANCE'] }
            ]
        },
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};