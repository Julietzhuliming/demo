var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s7_m7_' + window.moveType + '_title'] || MSG['l1_s7_m7_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance','motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop','custom_control_if_else'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="41" y="161"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="_PDQLbn~,/B$IP!S#;e+"></block></next></block><block type="acoustooptic_lights_on" id=".+(yRcZsC{P8+lHLD3du" x="152" y="337"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="tMPH;dZkl8Gw}`+GAn|F"><field name="TIME">0.2</field></shadow></value></block><block type="acoustooptic_lights_on" id="=tBs#e4;B.Nl1}zw.;q[" x="60" y="420"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="Sv^ZJ.Z:{l4Q4C:y6m7X"><field name="TIME">0.2</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="_PDQLbn~,/B$IP!S#;e+"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="y[OQF_NfPgLmbR]iY;1S"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="8y~P[;|Wc?(YFcgvn8,U"><field name="TILT_TYPE">tilt_up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id=".+(yRcZsC{P8+lHLD3du"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="tMPH;dZkl8Gw}`+GAn|F"><field name="TIME">0.2</field></shadow></value><next><block type="motion_speed_continued_second" id="[Vpwbg*ObxIIOo-2JzAp"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="dtem|}y1CLfSr`2F3qxO"><field name="TIME">1</field></shadow></value></block></next></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="acoustooptic_lights_on" id="=tBs#e4;B.Nl1}zw.;q["><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="Sv^ZJ.Z:{l4Q4C:y6m7X"><field name="TIME">0.2</field></shadow></value><next><block type="motion_action_stop" id="sf80^M{=3eUA+wehtcY!"></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore:[
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                { type: 'motion_speed_continued_second', name: ['speedType', 'MOTION_SPEED_CONTINUED_SECOND'] }
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2},
                {type: 'motion_action_stop', times: 2},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="37" y="157"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="_PDQLbn~,/B$IP!S#;e+"></block></next></block><block type="acoustooptic_lights_on" id=".+(yRcZsC{P8+lHLD3du" x="149" y="330"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="tMPH;dZkl8Gw}`+GAn|F"><field name="TIME">0.2</field></shadow></value></block><block type="acoustooptic_lights_on" id="=tBs#e4;B.Nl1}zw.;q[" x="60" y="420"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="Sv^ZJ.Z:{l4Q4C:y6m7X"><field name="TIME">0.2</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="_PDQLbn~,/B$IP!S#;e+"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="y[OQF_NfPgLmbR]iY;1S"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="8y~P[;|Wc?(YFcgvn8,U"><field name="TILT_TYPE">tilt_up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id=".+(yRcZsC{P8+lHLD3du"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="tMPH;dZkl8Gw}`+GAn|F"><field name="TIME">0.2</field></shadow></value><next><block type="motion_speed_distance" id="w%8GVIa!xnHq-azhp#ck"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="=*LvuzFV7izmF#sIK`0e"><field name="NUM">1</field></shadow></value></block></next></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="acoustooptic_lights_on" id="=tBs#e4;B.Nl1}zw.;q["><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="Sv^ZJ.Z:{l4Q4C:y6m7X"><field name="TIME">0.2</field></shadow></value><next><block type="motion_action_stop" id="sf80^M{=3eUA+wehtcY!"></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] },
                { type: 'motion_speed_distance', name: ['speedType', 'CUSTOM_MATH_NUM'] }
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
                {type: 'motion_action_stop', times: 2},
            ]
        },
    },
    missionStandardTime:30*1000//通过任务的标准时间,单位毫秒
};