var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint:1,
    mission:1,
    taskTitle: MSG['l1_s3_m1_' + window.moveType + '_title'] || MSG['l1_s3_m1_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_017',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    program:{
        'commonType': {// 普通类别
            init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="OMOB8|og,f@9o-wjj1:U"><field name="acoustoColor">#0000FF</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="5yRlSRt1nacnxM(v0dQi"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_on" id="OMOB8|og,f@9o-wjj1:U"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="5yRlSRt1nacnxM(v0dQi"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
        },
        'ignore': [
          {type: 'acoustooptic_custom_math_num', name: ['TIME']}
        ]
    },
    missionStandardTime:20*1000,//通过任务的标准时间,单位毫秒
};