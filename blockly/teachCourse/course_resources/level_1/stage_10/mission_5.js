var courseData = {
    level: 1,
    stage: 10,
    knowledgePoint: 1,
    mission: 5,
    taskTitle: MSG['l1_s10_m5_' + window.moveType + '_title'] || MSG['l1_s10_m5_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_if_else', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_add_minus', 'custom_math_num']
    },
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="@tkK04}ajnh4s{8zH^cm"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="5TYa^tIIUqM]NV/7P+eM"><field name="TIME">1</field></shadow></value></block></next></block><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H" x="101" y="286"><field name="NUM">9</field></block><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1" x="99" y="392"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="@tkK04}ajnh4s{8zH^cm"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="5TYa^tIIUqM]NV/7P+eM"><field name="TIME">1</field></shadow><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H"><field name="NUM">9</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_continued_second', name: ['speedType']},
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="XiJXnutt)g=sb)+to2C3"><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="C18q9|61WOyuE??:_})P"><field name="NUM">1</field></shadow></value></block></next></block><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H" x="134" y="299"><field name="NUM">9</field></block><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1" x="54" y="371"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="XiJXnutt)g=sb)+to2C3"><field name="directionType">MoveLeft</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="C18q9|61WOyuE??:_})P"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H"><field name="NUM">9</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="XiJXnutt)g=sb)+to2C3"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="C18q9|61WOyuE??:_})P"><field name="NUM">1</field></shadow></value></block></next></block><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H" x="101" y="286"><field name="NUM">9</field></block><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1" x="99" y="392"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="50" y="105"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="XiJXnutt)g=sb)+to2C3"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="C18q9|61WOyuE??:_})P"><field name="NUM">1</field></shadow><block type="custom_math_add_minus" id="gu-3K.=|6$IFO_}R#%_1"><field name="OPERATOR">÷</field><value name="FIRST_EXPRESSION"><shadow type="custom_math_num" id="rK`sZY4}wX?q`k#poklx"><field name="NUM">1</field></shadow><block type="custom_math_num" id="yR[/YC2)5RJU}]!}d+.H"><field name="NUM">9</field></block></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num" id="iWXoi-0d/2}]%1v+_^_?"><field name="NUM">3</field></shadow></value></block></value></block></next></block></xml>',
            ignore: [
                {type: 'motion_speed_distance', name: ['speedType']},
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};