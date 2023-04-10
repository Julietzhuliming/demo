var courseData = {
    level: 1,
    stage: 5,
    knowledgePoint: 1,
    mission: 2,
    taskTitle: MSG['l1_s5_m2_' + window.moveType + '_title'] || MSG['l1_s5_m2_commonType_title'],
    helpList: {
        'commonType': [
            {
                'text': 'l1_help_021',
            }
        ],
    },    
    toolConfig: {
        'motion': ['motion_action_speed'],
        'control': ['custom_control_wait_seconds', 'custom_control_repeat_times'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="34" y="138"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7" x="219" y="210"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc" x="41" y="414"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="34" y="138"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id=":D$.$55d(IIIV(/f8@xl"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><next><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc"></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
        },
        'doubleFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="23" y="149"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7" x="180" y="221"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc" x="50" y="430"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="s|9m~)*c~p)FN(WXG)f("><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_normal</field><next><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc"></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="23" y="149"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7" x="180" y="221"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field></block></next></block></next></block></next></block><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc" x="50" y="430"></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="115"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_action_speed" id="s|9m~)*c~p)FN(WXG)f("><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><next><block type="acoustooptic_paly_tone" id="ex@M~L;aaf[=plXkPJ-7"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="Fqb`-Y~*n`,q_CAKo,4]"><field name="toneName">D5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="QJ-]jj;o+*B,jEoT%TK-"><field name="toneName">E5</field><field name="beatType">beat_4_1</field><next><block type="acoustooptic_paly_tone" id="n*M-d!:;Iuf!p%Qm?ZJ;"><field name="toneName">C5</field><field name="beatType">beat_4_1</field><next><block type="motion_action_stop" id="!n+`6?`7,Oy!J?mtflQc"></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
        },
        'ignore': [//1，一个块的时候，不用加index ； 2，多个块的时候，忽略内容相同也不用加index；3，index索引的递进是以相同的块type 来计算的；
            { type: 'motion_action_speed', name: ['speedType'] },
            { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
        ],
    },
    missionStandardTime:25*1000//通过任务的标准时间,单位毫秒
};