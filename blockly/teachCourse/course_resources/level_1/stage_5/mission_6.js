var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s5_m6_' + window.moveType + '_title'] || MSG['l1_s5_m6_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="159"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="I_+U_=B}X(Nc-UUwh[_V"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="^cW6yDnX;Aoc^x(tyvg$"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_lights_left_right" id="nlK$m))G8(l)_v4Z@Eu7"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="%$GwHspQGxk;=!k,iW[@"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_lights_left_right" id="I_+U_=B}X(Nc-UUwh[_V"><field name="acoustoLeft">#0000FF</field><field name="acoustoRight">#000000</field><next><block type="acoustooptic_paly_tone" id="^cW6yDnX;Aoc^x(tyvg$"><field name="toneName">A5</field><field name="beatType">beat_2_1</field><next><block type="acoustooptic_lights_left_right" id="nlK$m))G8(l)_v4Z@Eu7"><field name="acoustoLeft">#000000</field><field name="acoustoRight">#0000FF</field><next><block type="acoustooptic_paly_tone" id="%$GwHspQGxk;=!k,iW[@"><field name="toneName">E5</field><field name="beatType">beat_2_1</field></block></next></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [
            { type: 'acoustooptic_lights_left_right', name: ['acoustoLeft','acoustoRight'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};