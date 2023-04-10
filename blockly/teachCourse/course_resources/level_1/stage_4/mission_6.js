var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s4_m6_' + window.moveType + '_title'] || MSG['l1_s4_m6_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_007',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_repeat_times', 'custom_control_wait_seconds'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="59" y="177"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_brightness" id="R=F,mG}@mm$8._L;n/1h"><field name="lightsID">id_all</field><field name="eye_color">#00FA00</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="~Y?d]%lzL$G6:2iV}c0;"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="XHAtw9_ehh2gFYF?B$9`"><field name="NUM">250</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="3MUK6sqUV-|f4bcaCU=J"><field name="NUM">0</field></shadow></value><next><block type="acoustooptic_lights_brightness" id="h.B`,ctLOLUcctd}qSSF"><field name="lightsID">id_all</field><field name="eye_color">#00FA00</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="WO,B}m3s+#lgTi/(?oZQ"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="#]cH0VjDA91tuFluMm@t"><field name="NUM">250</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="`RcYb4L*x_1,:F8bUu|K"><field name="NUM">0</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_brightness" id="R=F,mG}@mm$8._L;n/1h"><field name="lightsID">id_all</field><field name="eye_color">#00FA00</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="~Y?d]%lzL$G6:2iV}c0;"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="XHAtw9_ehh2gFYF?B$9`"><field name="NUM">250</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="3MUK6sqUV-|f4bcaCU=J"><field name="NUM">0</field></shadow></value><next><block type="custom_control_wait_seconds" id="!6-;zX,+p+88d|_F%xXU"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="mlhwZ^w?9)S=roq5tu$M"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_brightness" id="h.B`,ctLOLUcctd}qSSF"><field name="lightsID">id_all</field><field name="eye_color">#00C800</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="WO,B}m3s+#lgTi/(?oZQ"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="#]cH0VjDA91tuFluMm@t"><field name="NUM">200</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="`RcYb4L*x_1,:F8bUu|K"><field name="NUM">0</field></shadow></value><next><block type="custom_control_wait_seconds" id="w?K);b%pPVB+[r{BpPxr"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="/|selxg%JK^Km(P%wUf*"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_brightness" id="`ub:-5Kcthno%^`!},(l"><field name="lightsID">id_all</field><field name="eye_color">#009600</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="z3,G_rhb7rL-|Y5XxrU@"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="C*s#y?%mfI=oq1Z0FT-k"><field name="NUM">150</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="[ok;MNxa)4SA+fwquPy`"><field name="NUM">0</field></shadow></value><next><block type="custom_control_wait_seconds" id="}x0e-:iZvFy@1X0;}S(="><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="OtaoCgGMQ9#ay?R;=@=C"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_brightness" id="1W_Y*uM6rSYwkLLLb4?["><field name="lightsID">id_all</field><field name="eye_color">#003200</field><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_R"><shadow type="acoustooptic_rgba_math_num" id="e#oI_1Kr2z.Agn`d`f3J"><field name="NUM">0</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_G"><shadow type="acoustooptic_rgba_math_num" id="wmgGWjz9d*3UaH-}EWL~"><field name="NUM">50</field></shadow></value><value name="ACOUSTOOPTIC_LIGHTS_LEFT_RIGHT_B"><shadow type="acoustooptic_rgba_math_num" id="`cTDKJIWYSgE)93q[36%"><field name="NUM">0</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_brightness', name: ['lightsID']},
            ]
        },
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};