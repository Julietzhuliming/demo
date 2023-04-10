var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint: 1,
    mission: 4,
    taskTitle: MSG['l1_s3_m4_' + window.moveType + '_title'] || MSG['l1_s3_m4_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone','acoustooptic_paly_sound', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="57" y="158"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="UxUo^lYu]A6$]9+qT+mn"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="$bd[mWPKYt#s4aK?zj/+"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="V8%OxFOv^wZ8]5WL(TEZ"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="(1i$M*!9O,UdrM29pBwi"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="UxUo^lYu]A6$]9+qT+mn"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="$bd[mWPKYt#s4aK?zj/+"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="V8%OxFOv^wZ8]5WL(TEZ"><field name="acoustoColor">#000000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="(1i$M*!9O,UdrM29pBwi"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_sound" id="paM?AF62l;}#w7Zwr9Jc"><field name="isDelay">true</field><field name="chooseSound">animal:bear</field></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [
            { type: 'acoustooptic_custom_math_num', name: ['TIME']},
            { type: 'acoustooptic_paly_sound', name: ['chooseSound'], content:"animal" }//忽略animal 里面的具体某一个item
        ]
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};