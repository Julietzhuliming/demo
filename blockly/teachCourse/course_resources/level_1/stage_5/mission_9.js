var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 9,
    taskTitle: MSG['l1_s5_m9_' + window.moveType + '_title'] || MSG['l1_s5_m9_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_022',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_stop'],
        'control': ['custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on', 'acoustooptic_lights_left_right'],
    },
    guideClick: ['#\\:2'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="37" y="133"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="ue,gAc@y(C@q$PC`+b^Q"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_repeat_times" id="Y_^G@Z+Nh=Vb8F1fu-TG"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="Gy:.M=l8GlL*wksb@[M*"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_left_right" id="1~2X%=!j5-!NJ)v=S.2E"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="dPvM^n@`3#nIM/Uj/=Q4"><field name="toneName">A5</field><field name="beatType">beat_2_1</field><next><block type="acoustooptic_lights_left_right" id="JK0rpMd3ov;avDh,HH|e"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="%Aq6-ez#;Wxs|:O#-LY!"><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="45" y="89"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="ue,gAc@y(C@q$PC`+b^Q"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_repeat_times" id="Y_^G@Z+Nh=Vb8F1fu-TG"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="Gy:.M=l8GlL*wksb@[M*"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_left_right" id="1~2X%=!j5-!NJ)v=S.2E"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="dPvM^n@`3#nIM/Uj/=Q4"><field name="toneName">A5</field><field name="beatType">beat_2_1</field><next><block type="acoustooptic_lights_left_right" id="JK0rpMd3ov;avDh,HH|e"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="%Aq6-ez#;Wxs|:O#-LY!"><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></next></block></statement><next><block type="motion_action_stop" id="cs8LRfOpV)Y,N^5m/p{3"></block></next></block></next></block></next></block></xml>',
        },
        'ignore':[
            { type: 'motion_action_speed', name: ['speedType']},
            { type: 'acoustooptic_lights_left_right', name: ['acoustoLeft','acoustoRight'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};