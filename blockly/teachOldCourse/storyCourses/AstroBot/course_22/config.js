var courseData = {
    courseId : 22,
    courseTitle:MSG.course22_title,
    toolConfig: {
        'motion': ['motion_execution_action','motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop', 'custom_control_do_while'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c22_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="62" y="119"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="66" y="134"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id=":AE~~]-wDf.,^]XL^h!E"><field name="motionName">actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac</field><next><block type="motion_execution_action" id="Sv|Hm%5%F;J[yKbegGc`"><field name="motionName">actions_636233527487833810</field><next><block type="custom_control_do_while" id="P;*FA^x)/LXHwKk]5Ra~"><statement name="DO"><block type="motion_execution_action" id="g=TR}]S+3H@-8/DhJ|G!"><field name="motionName">actions_95d4b4b7-1ce5-44d9-b0df-fc5823aa7f1f</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="Xj~+tc@MNmmMT2Hw1t9z"></block></value><next><block type="motion_execution_action" id="zr8nDJ`u[i7NSYF)2A/I"><field name="motionName">actions_636250847172220020</field></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
    },
    startStory : [
                    {
                        index:0,
                        type:'img',
                        value:'/r_Enemy2.png',
                        directioin:'right',
                        x:0,
                        y:30,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c22_startstory_1,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c22_startstory_2,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:1
                    },
                    {
                        index:3,
                        type:'img',
                        value:'/l_angury.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c22_startstory_3,
                        directioin:'left',
                        x:14,
                        y:65,
                        hide_ele_index:2
                    },
                    {
                        index:5,
                        type:'text',
                        value:MSG.c22_startstory_4,
                        directioin:'left',
                        x:14,
                        y:65,
                        hide_ele_index:4
                    },
                    {
                        index:5,
                        type:'text',
                        value:MSG.c22_startstory_5,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:null
                    }
                ],
    endStory:   [ 
                    {
                        index:0,
                        type:'img',
                        value:'/r_Enemy2.png',
                        directioin:'right',
                        x:0,
                        y:30,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c22_endstory_1,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/l_angury.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c22_endstory_2,
                        directioin:'left',
                        x:14,
                        y:65,
                        hide_ele_index:null
                    }
                ],
};