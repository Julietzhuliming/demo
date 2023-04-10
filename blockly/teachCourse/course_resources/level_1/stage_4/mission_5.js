var courseData = {
    level: 1,
    stage: 4,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s4_m5_' + window.moveType + '_title'] || MSG['l1_s4_m5_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="150"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_color" id="hIS(6^*/^xoT#:q|YIgJ"><field name="lightsID">id_all</field><field name="eye_color">#FF0000</field><next><block type="custom_control_wait_seconds" id="kh~;-0`rQRm^!8$9W+Pd"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="ZX@_mG:p]x};V)B=Q`I_"><field name="NUM">2</field></shadow></value><next><block type="acoustooptic_lights_color" id="L)Cv?h7sE;=[RxK-!oR?"><field name="lightsID">id_all</field><field name="eye_color">#FF0000</field><next><block type="custom_control_wait_seconds" id="]HD8ad%8?Sce3azHu|VB"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="`Mbj-[rPAQr0iy(}rsbi"><field name="NUM">2</field></shadow></value><next><block type="acoustooptic_lights_color" id="TD@UelW=K7q.y3.r9jc@"><field name="lightsID">id_all</field><field name="eye_color">#FF0000</field></block></next></block></next></block></next></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_color" id="hIS(6^*/^xoT#:q|YIgJ"><field name="lightsID">id_all-3</field><field name="eye_color">#FF0000</field><next><block type="custom_control_wait_seconds" id="kh~;-0`rQRm^!8$9W+Pd"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="ZX@_mG:p]x};V)B=Q`I_"><field name="NUM">3</field></shadow></value><next><block type="acoustooptic_lights_color" id="L)Cv?h7sE;=[RxK-!oR?"><field name="lightsID">id_all</field><field name="eye_color">#000000</field><next><block type="custom_control_wait_seconds" id="]HD8ad%8?Sce3azHu|VB"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="`Mbj-[rPAQr0iy(}rsbi"><field name="NUM">3</field></shadow></value><next><block type="acoustooptic_lights_color" id="TD@UelW=K7q.y3.r9jc@"><field name="lightsID">id_all</field><field name="eye_color">#00FF00</field></block></next></block></next></block></next></block></next></block></next></block></xml>',
            ignore: [
                {type: 'acoustooptic_lights_color', name: ['lightsID']},
            ]
        },
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};