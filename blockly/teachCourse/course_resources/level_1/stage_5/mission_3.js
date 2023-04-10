var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 3,
    taskTitle: MSG['l1_s5_m3_' + window.moveType + '_title'] || MSG['l1_s5_m3_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_021',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_action_speed','motion_action_stop'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    guideClick: ['#\\:3'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="165"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5" x="176" y="277"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="67" y="93"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="5A)xp0VS8iGy#bZkwjYV"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_repeat_times" id="]m];Lssu:]?R/+ownL!J"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="Bl00#YbLveTVVhO^Fkil"><field name="NUM">2</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></statement><next><block type="motion_action_stop" id="[I#Pkx5Z*dW7F/f~!CE!"></block></next></block></next></block></next></block></xml>',
        },
        'doubleFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="39" y="164"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5" x="176" y="277"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="g+fyAW%3.UxvD6;n,qeT"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_repeat_times" id="fm]j0|2o1^8gJ[+utxT_"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="s8L((;0h}(F2`5WvdN^s"><field name="NUM">2</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></statement><next><block type="motion_action_stop" id="gosZO:!l4dWji{8XlN;)"></block></next></block></next></block></next></block></xml>',
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="39" y="164"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5" x="176" y="277"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="g+fyAW%3.UxvD6;n,qeT"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field><next><block type="custom_control_repeat_times" id="fm]j0|2o1^8gJ[+utxT_"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="s8L((;0h}(F2`5WvdN^s"><field name="NUM">2</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_paly_tone" id="=Y2vCOvz6`g,}SR{z!T5"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="NU~D7y*pTuYE9E2~ky/6"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="6A5FwT[R,c,Tmq]!Kc-5"><field name="toneName">E5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></statement><next><block type="motion_action_stop" id="gosZO:!l4dWji{8XlN;)"></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [//1，一个块的时候，不用加index ； 2，多个块的时候，忽略内容相同也不用加index；3，index索引的递进是以相同的块type 来计算的；
            { type: 'motion_action_speed', name: ['speedType'] },
            { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};