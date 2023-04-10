var courseData = {
    level: 1,
    stage: 2,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s2_m6_' + window.moveType + '_title'] || MSG['l1_s2_m6_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_007',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone'],
    },
    guideClick: [{ id: 'U[2EsPg]t8@%11za.6pG'}],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="U[2EsPg]t8@%11za.6pG"><field name="isDelay">true</field><field name="chooseSound">animal:bear</field></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_paly_sound" id="U[2EsPg]t8@%11za.6pG"><field name="isDelay">true</field><field name="chooseSound">animal:bear</field><next><block type="acoustooptic_paly_sound" id=";b^cmPKhp$MvRXVa`P!g"><field name="isDelay">true</field><field name="chooseSound">animal:bear</field><next><block type="acoustooptic_paly_sound" id="*E+FxyCBilpvX#o(v3W("><field name="isDelay">true</field><field name="chooseSound">animal:bear</field></block></next></block></next></block></next></block></xml>',
            'ignore': [
                { type: 'acoustooptic_paly_sound', name: ['chooseSound'] }
            ]
        },
    },
    missionStandardTime:15*1000//通过任务的标准时间,单位毫秒
};