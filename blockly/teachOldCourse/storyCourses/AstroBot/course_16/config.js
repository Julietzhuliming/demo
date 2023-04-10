var courseData = {
    courseId : 16,
    courseTitle: MSG.course16_title,
    toolConfig: {
        'control': ['custom_control_wait_for'],
        'motion': ['motion_speed_continued_second'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c16_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="43" y="128"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_wait_for" id="fp#n:9AYmaWIn57wc}yE"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="sensor_ahead_obstacle" id="zX*Ea3;}QG)+}nAk1Sk3"></block></value><next><block type="motion_speed_continued_second" id=")/2`RXqE(~dE)gG2xuv3"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_faster</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=")!3f%(qL#U@u7+MdDS!B"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND'] }
        ],
    },
    startStory : [
                    {
                        index:0,
                        type:'img',
                        value:'/Enemy2.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c16_startstory_1,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/r_xinbao1.png',
                        directioin:'right',
                        x:0,
                        y:25,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c16_startstory_2,
                        directioin:'right',
                        x:12,
                        y:30,
                        hide_ele_index:null
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c16_startstory_3,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:1
                    },
                    {
                        index:5,
                        type:'img',
                        value:'/r_lubao1.png',
                        directioin:'right',
                        x:0,
                        y:25,
                        hide_ele_index:2
                    },
                    {
                        index:6,
                        type:'text',
                        value:MSG.c16_startstory_4,
                        directioin:'right',
                        x:12,
                        y:30,
                        hide_ele_index:3
                    }
                ],
endStory:   [
                {
                    index:0,
                    type:'img',
                    value:'/Enemy2.png',
                    directioin:'left',
                    x:0,
                    y:25,
                    hide_ele_index:null
                },
                {
                    index:1,
                    type:'text',
                    value:MSG.c16_endstory_1,
                    directioin:'left',
                    x:12,
                    y:30,
                    hide_ele_index:null
                },
                {
                    index:2,
                    type:'text',
                    value:MSG.c16_endstory_2,
                    directioin:'left',
                    x:12,
                    y:30,
                    hide_ele_index:1
                },
                {
                    index:3,
                    type:'text',
                    value:MSG.c16_endstory_3,
                    directioin:'left',
                    x:12,
                    y:30,
                    hide_ele_index:2
                }
            ],
};