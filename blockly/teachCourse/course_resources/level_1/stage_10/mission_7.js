var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s10_m7_' + window.moveType + '_title'] || MSG['l1_s10_m7_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_add_minus']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="158"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="2R^$vh[62;*nZ1k!d-V0"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="#S:^fZimNur{Zk#I[_vU"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="@l,@7_Ted92;FnL/|DPG"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="/@Jmu8Rn.wNr#f}5:cP2"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QYyMaCCR8?r{9]_MVR}m"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></statement></block></next></block><block type="custom_math_add_minus" id="-j,2VHp1stVci[.kDE3I" x="162" y="452"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="izq9#G7a1lv9a+w,S?$T"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="A6nC)Z3@OR)~(tHJ._J."><field name="NUM">4</field></shadow></value></block><block type="custom_math_num" id="+:YX.D*iiN.IvE)6dDYf" x="182" y="504"><field name="NUM">2</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="2R^$vh[62;*nZ1k!d-V0"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="#S:^fZimNur{Zk#I[_vU"><field name="NUM">3</field></shadow><block type="custom_math_add_minus" id="-j,2VHp1stVci[.kDE3I"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="izq9#G7a1lv9a+w,S?$T"><field name="NUM">1</field></shadow><block type="custom_math_num" id="+:YX.D*iiN.IvE)6dDYf"><field name="NUM">2</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="A6nC)Z3@OR)~(tHJ._J."><field name="NUM">4</field></shadow></value></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="@l,@7_Ted92;FnL/|DPG"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="/@Jmu8Rn.wNr#f}5:cP2"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QYyMaCCR8?r{9]_MVR}m"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></statement></block></next></block></xml>',
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};