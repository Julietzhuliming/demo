var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s5_m5_' + window.moveType + '_title'] || MSG['l1_s5_m5_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_019',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_speed_continued_second','motion_speed_distance','motion_action_speed'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on', 'acoustooptic_lights_left_right'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="144"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="c6j5DVqxAWi0e#===o/F"><field name="acoustoLeft">#FF0000</field><field name="acoustoRight">#FF0000</field><next><block type="acoustooptic_paly_tone" id="=z]#.gjXL8C!ErUg5e]C"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="144"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="c6j5DVqxAWi0e#===o/F"><field name="acoustoLeft">#FF8000</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="=z]#.gjXL8C!ErUg5e]C"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_lights_left_right" id="f/V~`s!dE5m?KF@#_^L7"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#FF8000</field><next><block type="acoustooptic_paly_tone" id="{e$%c_I(0e2[-X?pQ[?p"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [
            { index: 0, type: 'acoustooptic_lights_left_right', name: ['acoustoRight'] },
            { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
            { index: 1, type: 'acoustooptic_lights_left_right', name: ['acoustoLeft'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};