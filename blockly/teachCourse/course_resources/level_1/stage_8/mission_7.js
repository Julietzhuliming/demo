var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s8_m7_' + window.moveType + '_title'] || MSG['l1_s8_m7_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="13" y="104"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="%U[~/*c(]:5sdG}NXA7`"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_wait_for" id="-~iXzq-|p1J2D]EHlb~)"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_ahead_obstacle" id="i9T6b`2DrraTf=B9kn.?"></block></value><next><block type="acoustooptic_lights_on" id="7I-JkF1YOL2UD=P]:mN%"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="J$1K2MW92pCDsJcXp6fc"><field name="TIME">2.0</field></shadow></value><next><block type="motion_action_stop" id="*$z.;e:=V`/Khb,us.:["></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'motion_action_speed', name: ['speedType']},
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']}
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};