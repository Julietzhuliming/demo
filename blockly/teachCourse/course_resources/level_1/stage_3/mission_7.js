var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint: 1,
    mission: 7,
    taskTitle: MSG['l1_s3_m7_' + window.moveType + '_title'] || MSG['l1_s3_m7_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_019',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="IA7,oLi02`$Vl|JK}c?-"><field name="acoustoLeft">#FF0000</field><field name="acoustoRight">#FF0000</field></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="IA7,oLi02`$Vl|JK}c?-"><field name="acoustoLeft">#FFF000</field><field name="acoustoRight">#000000</field></block></next></block></xml>',
        },
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};