var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s10_m2_' + window.moveType + '_title'] || MSG['l1_s10_m2_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
        'math': ['custom_math_add_minus']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id=";`-im)n1Tt@3Sa.v)!qZ"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="{Zbc=0@]!~tJBY4C:s+b"><field name="TIME">1</field></shadow><block type="custom_math_add_minus" id="dOV);]JlG9)@(1X~BDhV"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="ySGGiLF}?yq,#d8]cP^x"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="CfUMz[be:al]y2HkW`c|"><field name="NUM">4</field></shadow></value></block></value></block></next></block><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG" x="193" y="276"><field name="NUM">2</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id=";`-im)n1Tt@3Sa.v)!qZ"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="{Zbc=0@]!~tJBY4C:s+b"><field name="TIME">1</field></shadow><block type="custom_math_add_minus" id="dOV);]JlG9)@(1X~BDhV"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="ySGGiLF}?yq,#d8]cP^x"><field name="NUM">1</field></shadow><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG"><field name="NUM">2</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="CfUMz[be:al]y2HkW`c|"><field name="NUM">4</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="*CX9!la%nUS0j_G[Y^)3"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_eK^C^}s/0]m/PsH9#A~"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="uxO9!xE,Y]}d6vbL;x_L"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="vhkZh2Arb2;9[ymb26@d"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="Ahr?w82G_;)CGma;Ahi3"><field name="NUM">4</field></shadow></value></block></value></block></next></block><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG" x="204" y="265"><field name="NUM">2</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="*CX9!la%nUS0j_G[Y^)3"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_eK^C^}s/0]m/PsH9#A~"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="uxO9!xE,Y]}d6vbL;x_L"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="vhkZh2Arb2;9[ymb26@d"><field name="NUM">1</field></shadow><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG"><field name="NUM">2</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="Ahr?w82G_;)CGma;Ahi3"><field name="NUM">4</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="*CX9!la%nUS0j_G[Y^)3"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_eK^C^}s/0]m/PsH9#A~"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="uxO9!xE,Y]}d6vbL;x_L"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="vhkZh2Arb2;9[ymb26@d"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="Ahr?w82G_;)CGma;Ahi3"><field name="NUM">4</field></shadow></value></block></value></block></next></block><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG" x="211" y="258"><field name="NUM">2</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="85" y="126"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="*CX9!la%nUS0j_G[Y^)3"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="_eK^C^}s/0]m/PsH9#A~"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="uxO9!xE,Y]}d6vbL;x_L"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="vhkZh2Arb2;9[ymb26@d"><field name="NUM">1</field></shadow><block type="custom_math_num" id="WVQz.m4jK.|}={M8_~BG"><field name="NUM">2</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="Ahr?w82G_;)CGma;Ahi3"><field name="NUM">4</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};