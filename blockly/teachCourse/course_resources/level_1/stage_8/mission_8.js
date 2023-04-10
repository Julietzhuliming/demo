var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s8_m8_' + window.moveType + '_title'] || MSG['l1_s8_m8_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if'],
        'sensors': ['sensor_ahead_obstacle', 'sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="47" y="157"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="c.JQ[0~qY[Jo,1W2MrCK"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if" id="kU)[VOvR]9Hf);+WrAj)"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="A3_GHsg-zXm86F)VF5fx"><field name="TILT_TYPE">tilt_left</field></block></value><next><block type="custom_control_if" id="-MB;GkL4=SH_$cg/Ze7`"></block></next></block></statement></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="c.JQ[0~qY[Jo,1W2MrCK"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if" id="kU)[VOvR]9Hf);+WrAj)"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="A3_GHsg-zXm86F)VF5fx"><field name="TILT_TYPE">tilt_swing</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="us,q~C/ejZU3LwtSv/@;"><field name="acoustoColor">#FF8000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="`A(i87(M5Eao4jC;f,Md"><field name="TIME">2.0</field></shadow></value><next><block type="motion_action_speed" id=")@.9tBuK[g`M,oMvt9SI"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block></statement><next><block type="custom_control_if" id="-MB;GkL4=SH_$cg/Ze7`"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="cp/Km1kG2wm(@Z6$VKto"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id=":Za^4dbZUiSdoxS7[urN"><field name="acoustoColor">#000000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id=";kr^4JL5f`HWjZ+#laYj"><field name="TIME">2.0</field></shadow></value><next><block type="motion_action_stop" id="9-oT%,L}I)^~f[`SNzG["></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']}
            ],
            passRule: [
                {type: 'motion_action_speed', times: 2},
                {type: 'motion_action_stop', times: 2},
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};