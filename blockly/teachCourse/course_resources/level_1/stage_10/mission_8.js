var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 8,
    taskTitle: MSG['l1_s10_m8_' + window.moveType + '_title'] || MSG['l1_s10_m8_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="173"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="MbFMaNYPkB}wMjuUQ%:1"><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_brightness" id="HoM`7OsZ0qdwK2)cSbOW"><field name="lightsID">id_all</field><field name="eye_color">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="dh6,ifZxO3-hCXzlSyxL"><field name="NUM">255</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="z/pxTp-6Olk^L$HH[O8u"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="Kt7,oMeb1@m|gUr{!9jP"><field name="NUM">0</field></shadow></value></block></statement></block></next></block><block type="custom_math_add_minus" id="Wra55lit6r25L!?v~VF]" x="90" y="407"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="-frv5,+}Ium|5M@a@#Ph"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="UZdeCU:C%1R52L.,W,zY"><field name="NUM">10</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="173"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="MbFMaNYPkB}wMjuUQ%:1"><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_brightness" id="HoM`7OsZ0qdwK2)cSbOW"><field name="lightsID">id_all</field><field name="eye_color">#000000</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="dh6,ifZxO3-hCXzlSyxL"><field name="NUM">255</field></shadow><block type="custom_math_add_minus" id="Wra55lit6r25L!?v~VF]"><field name="OPERATOR">×</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="-frv5,+}Ium|5M@a@#Ph"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="Ieq*js].rN1URCp*1c0a"></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="UZdeCU:C%1R52L.,W,zY"><field name="NUM">10</field></shadow></value></block></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="z/pxTp-6Olk^L$HH[O8u"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="Kt7,oMeb1@m|gUr{!9jP"><field name="NUM">0</field></shadow></value></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_brightness', name: ['lightsID']},
            ],
            passRule: [
                {type: 'acoustooptic_lights_brightness', times: 2}
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};