var courseData = {
    level: 1,
    stage: 7,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s7_m3_' + window.moveType + '_title'] || MSG['l1_s7_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_040',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'sensors': ['sensor_phone_pad_tilt'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="132"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xKiCCqJ`2Y#5ER:/3[H="><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="n][+Q|!mV}aqj]fzhri*"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="{6qj@W7O`s/*2PX}+-J:"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="wC#1]%XgGUxkWAe6Akq}"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="xue4|BL^)(AJ#O]Io8Sa"><field name="TIME">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_continued_second" id="A[VKT:[$J,;%s/_p^WVj"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="|[-)R=kGw2FV_cUC-(=X"><field name="TIME">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xKiCCqJ`2Y#5ER:/3[H="><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="n][+Q|!mV}aqj]fzhri*"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="{6qj@W7O`s/*2PX}+-J:"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_continued_second" id="wC#1]%XgGUxkWAe6Akq}"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="xue4|BL^)(AJ#O]Io8Sa"><field name="TIME">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_continued_second" id="A[VKT:[$J,;%s/_p^WVj"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="|[-)R=kGw2FV_cUC-(=X"><field name="TIME">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            'ignore': [
                {
                    type: 'motion_speed_continued_second',
                    name: ['directionType', 'speedType', 'MOTION_SPEED_CONTINUED_SECOND']
                }
            ],
            'passRule': [
                {type: 'motion_speed_continued_second', times: 3, index: 0}
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="41" y="138"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xKiCCqJ`2Y#5ER:/3[H="><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="n][+Q|!mV}aqj]fzhri*"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="{6qj@W7O`s/*2PX}+-J:"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="CYc{mR6([vGX,~QhdF@,"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="LBe,q^t^x+Gsq)e!Mv4i"><field name="NUM">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_distance" id="yj(`pR$x(7pIbrWbVJe@"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="V,ry5DYGyy6v:EVtxCUL"><field name="NUM">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="xKiCCqJ`2Y#5ER:/3[H="><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="n][+Q|!mV}aqj]fzhri*"><value name="CUSTOM_CONTROL_IF"><block type="sensor_phone_pad_tilt" id="{6qj@W7O`s/*2PX}+-J:"><field name="TILT_TYPE">tilt_down</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_speed_distance" id="CYc{mR6([vGX,~QhdF@,"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="LBe,q^t^x+Gsq)e!Mv4i"><field name="NUM">1</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_speed_distance" id="yj(`pR$x(7pIbrWbVJe@"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="V,ry5DYGyy6v:EVtxCUL"><field name="NUM">1</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            'ignore': [
                {type: 'motion_speed_distance', name: ['directionType', 'speedType', 'CUSTOM_MATH_NUM']}
            ],
            'passRule': [
                {type: 'motion_speed_distance', times: 3, index: 0}
            ]
        }
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};