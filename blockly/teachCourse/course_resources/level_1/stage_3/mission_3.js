var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s3_m3_' + window.moveType + '_title'] || MSG['l1_s3_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_017',
            },{
                'text': 'l1_help_018',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="57" y="146"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="SQS64lJm]Tvnw{JI.O2$"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="@oxXxmTS~U`,e[x92/R?"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="qvjD^H~oEk-NN4@r]FGq"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="w)^[FSZlgMGtA_!ivi$S"><field name="TIME">1</field></shadow></value></block></next></block></next></block><block type="acoustooptic_lights_on" id="-p:/ih_Z18QXTZVvlIP~" x="131" y="344"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="X}umsxEEufgr/IZCmF#6"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="a5j[6{ZNgo?rfXa84^l_"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="phF=D7wE~t%!;Q3NWql8"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="SQS64lJm]Tvnw{JI.O2$"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="@oxXxmTS~U`,e[x92/R?"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="qvjD^H~oEk-NN4@r]FGq"><field name="acoustoColor">#000000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="w)^[FSZlgMGtA_!ivi$S"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="-p:/ih_Z18QXTZVvlIP~"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="X}umsxEEufgr/IZCmF#6"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="a5j[6{ZNgo?rfXa84^l_"><field name="acoustoColor">#000000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="phF=D7wE~t%!;Q3NWql8"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [
          {type: 'acoustooptic_custom_math_num', name: ['TIME']}
        ]
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};