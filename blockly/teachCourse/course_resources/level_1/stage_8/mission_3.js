var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s8_m3_' + window.moveType + '_title'] || MSG['l1_s8_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_033',
            },
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance', 'motion_action_stop'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_wait_for', 'custom_control_infinite_loop', 'custom_control_if_else'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="58" y="156"><field name="PROGRAM_BRANCH">1</field></block><block type="custom_control_if_else" id="E5#_[{njXiAB(S}xbw|O" x="60" y="229"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="$uJNz~z7^cl5doEXzexD"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="E5#_[{njXiAB(S}xbw|O"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id=".w0Lf)6CLWTlar^1;Eei"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="[ZKJB=p^!*qq5.Bu=YPC"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="Cpi8c=6qG..8(I+Zl4+M"><field name="TIME">2.0</field></shadow></value></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="acoustooptic_lights_on" id="+iQ6zSP-p$f0DAAx8W6J"><field name="acoustoColor">#0000FF</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="#qZ-ChZJ3Z#:=4WVB+_J"><field name="TIME">2.0</field></shadow></value></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
            ],
            passRule: [
                {type: 'acoustooptic_lights_on', times: 2, index: 0},
                {type: 'acoustooptic_lights_on', times: 2, index: 1}
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};