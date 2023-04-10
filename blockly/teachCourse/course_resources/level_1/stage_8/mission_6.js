var courseData = {
    level: 1,
    stage: 8,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s8_m6_' + window.moveType + '_title'] || MSG['l1_s8_m6_commonType_title'],
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
        'control': ['custom_control_infinite_loop', 'custom_control_if'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="58" y="165"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if" id="m|J[}s[umyUtP|==w4Zp"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="F:{JHF!8x.*n#KZVif$w"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="*18G)aZI7mvpY(X!mp6:"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p/.`C]jw7l@6mhmgL1Bk"><field name="TIME">2.0</field></shadow></value><next><block type="acoustooptic_paly_tone" id="7dJV*F`UUpFNp9VU(%aL"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_continued_second" id="c)l{-eRlHXm!41s06wa#"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="fRM;aI{*IL;uf:i1#$6o"><field name="TIME">1</field></shadow></value></block></next></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
                {type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND']},
            ],
            passRule: [
                {type: 'motion_speed_continued_second', times: 2},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="170"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if" id=":tMb9M46z|Vl9L3X2nY5"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="_v-^$L`%BW3ME!b);OY;"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="cCy(WEH*D_3JtJeg$$jT"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id=";%,Vx.0nb`/V!:#7NqF%"><field name="TIME">2.0</field></shadow></value><next><block type="acoustooptic_paly_tone" id="k6T?c#+Q/Xz%B_#^!(@U"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_distance" id="d4kzsgAN(je*dZjW+]~B"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="DBN+SuHS{cO~L-$Ig}qB"><field name="NUM">1</field></shadow></value></block></next></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
                {type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="164"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+^@|6/t#a9`gid=Pjy1."><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if" id="u5$t*V:@65jL7Xc_;XYA"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="5dedT)SHDLRXY-R*/W09"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="r`wd3*`^*#-s60Mf`NFL"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="#snlrJtl+7jZ3rgHE(TQ"><field name="TIME">2.0</field></shadow></value><next><block type="acoustooptic_paly_tone" id="OQN[lU:4w`FhCUUn[EIl"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_speed_distance" id="Ys;lV2PZv3}o?q0R8sSj"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="^;SZW#YMk$O^0SdFjq1B"><field name="NUM">1</field></shadow></value></block></next></block></next></block></statement></block></statement></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                {type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType']},
                {type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
            ],
            passRule: [
                {type: 'motion_speed_distance', times: 2},
            ]
        },
    },
    missionStandardTime: 30 * 1000//通过任务的标准时间,单位毫秒
};