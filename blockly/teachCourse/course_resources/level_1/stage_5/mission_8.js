var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s5_m8_' + window.moveType + '_title'] || MSG['l1_s5_m8_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_037',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_speed','motion_action_stop'],
        'control': ['custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on', 'acoustooptic_lights_left_right'],
    },

    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="19" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="L]szZ%l7%yc]I!9)@)^w"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="?z+`yxC8G2hKs4_FmP!A"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_left_right" id="JwlC!_kSSa4j/8C5HZ8F"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="=z]}xR2*xow],a0hW-*B"><field name="toneName">A5</field><field name="beatType">beat_2_1</field><next><block type="acoustooptic_lights_left_right" id="-A:=9^]ldXb%n#C4!Uc="><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="kU|o;1c5u9kOWF77gR`f"><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></next></block></statement></block></next></block><block type="motion_action_speed" id="*inN/)(6yJo:LK]RR:i%" x="249" y="442"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="*inN/)(6yJo:LK]RR:i%"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_faster</field><next><block type="custom_control_repeat_times" id="L]szZ%l7%yc]I!9)@)^w"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="?z+`yxC8G2hKs4_FmP!A"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_left_right" id="JwlC!_kSSa4j/8C5HZ8F"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="=z]}xR2*xow],a0hW-*B"><field name="toneName">A5</field><field name="beatType">beat_2_1</field><next><block type="acoustooptic_lights_left_right" id="-A:=9^]ldXb%n#C4!Uc="><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="kU|o;1c5u9kOWF77gR`f"><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>',
        },
        'ignore':[],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};