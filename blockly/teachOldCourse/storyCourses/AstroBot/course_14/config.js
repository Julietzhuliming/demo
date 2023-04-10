var courseData = {
    courseId : 14,
    courseTitle: MSG.course14_title,
    toolConfig: {
        'events': ['program_goto_phone_condition'],
        'motion': ['motion_action_speed'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c14_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="77" y="149"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="z(6bHV[#5N0Eovl8QOr)"><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_emotions_color_times" id="n0XVZ[c!-y-O_T{p!Kj."><field name="mutiple_hiddenObj">{"curSelectArr":["1"],"isDelay":false,"emotions":[11],"colors":["#FF0000"],"times":[3]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="0jXi{/03uh**6Ws%8;F)"><field name="NUM">3</field></shadow></value></block></statement></block></next></block><block type="program_goto_phone_condition" id="muM6u7)jE_0a[WJ_|i!E" x="84" y="363"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">=</field><field name="SENSOR_ID">0</field><field name="VALUE">left</field><field name="TILT_TYPE">tilt_left</field></block><block type="motion_action_speed" id="v7e#K4AdBp@T.=`H[n*$" x="409" y="398"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_goto_phone_condition" id="`,zGSRqCi$0jma|M-^aa" x="25" y="115"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">=</field><field name="SENSOR_ID">0</field><field name="VALUE">up</field><field name="TILT_TYPE">tilt_up</field><next><block type="motion_action_speed" id="rE%|CL17m~Vz5WY,M1+("><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="program_goto_phone_condition" id="uM{ZA6gvi}cbkEk0l=Cc" x="345" y="117"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">=</field><field name="SENSOR_ID">0</field><field name="VALUE">right</field><field name="TILT_TYPE">tilt_right</field><next><block type="motion_action_speed" id=")X*lTMB9i]HucNU8[^Z="><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="77" y="149"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="z(6bHV[#5N0Eovl8QOr)"><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_emotions_color_times" id="n0XVZ[c!-y-O_T{p!Kj."><field name="mutiple_hiddenObj">{"curSelectArr":["1"],"isDelay":false,"emotions":[11],"colors":["#FF0000"],"times":[3]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="0jXi{/03uh**6Ws%8;F)"><field name="NUM">3</field></shadow></value></block></statement></block></next></block><block type="program_goto_phone_condition" id="C@D0r`JMbIs9e4A~)eyz" x="287" y="290"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">=</field><field name="SENSOR_ID">0</field><field name="VALUE">down</field><field name="TILT_TYPE">tilt_down</field><next><block type="motion_action_speed" id="EO`88w+h_Y3bUw:+^8mS"><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_normal</field></block></next></block><block type="program_goto_phone_condition" id="muM6u7)jE_0a[WJ_|i!E" x="54" y="346"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">=</field><field name="SENSOR_ID">0</field><field name="VALUE">left</field><field name="TILT_TYPE">tilt_left</field><next><block type="motion_action_speed" id="v7e#K4AdBp@T.=`H[n*$"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field></block></next></block></xml>',//xml字符串
        ignore: [
            {type: 'motion_action_speed', name: ['speedType']},
            {type: 'acoustooptic_emotions_color_times', name: ['mutiple_hiddenObj']},
        ],
        passRule: [
            {type: 'motion_action_speed', times: 2, index: 0},
            {type: 'motion_action_speed', times: 2, index: 1},
            {type: 'motion_action_speed', times: 2, index: 2},
            {type: 'motion_action_speed', times: 2, index: 3},
            {type: 'acoustooptic_emotions_color_times', times: 1},
        ]
    },
    startStory : [
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao1.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c14_startstory_1,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/r_lubao1.png',
                        directioin:'right',
                        x:0,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c14_startstory_2,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:null
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c14_startstory_3,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:1
                    },
                    {
                        index:5,
                        type:'text',
                        value:MSG.c14_startstory_4,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:3
                    }
                ],
    endStory:   [
                    {
                        index:0,
                        type:'img',
                        value:'/r_lubao1.png',
                        directioin:'right',
                        x:0,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c14_endstory_1,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c14_endstory_2,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:1
                    },
                    {
                        index:3,
                        type:'img',
                        value:'/l_xinbao1.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c14_endstory_3,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }
                ],
};