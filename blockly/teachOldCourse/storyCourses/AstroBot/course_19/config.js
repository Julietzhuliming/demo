var courseData = {
    courseId : 19,
    courseTitle:MSG.course19_title,
    toolConfig: {
        'control': ['custom_control_do_while'],
        'sensors': ['sensor_ahead_obstacle'],
        'motion': ['motion_execution_action','motion_action_stop'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c19_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="67" y="94"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_do_while" id="|iUr]4Za76`!c+waF7J_"><statement name="DO"><block type="motion_execution_action" id="t7mx[3+jm8|1LJ2A%I+#"><field name="motionName">actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="C6yRNBp~_nzT=n)y+p*l"></block></value><next><block type="motion_action_stop" id="7Dt=e.L0:w`]u/.f)CW;"><next><block type="motion_execution_action" id="OJZaa~.]+V6+rZa]):k*"><field name="motionName">actions_636233527487833810</field></block></next></block></next></block></next></block></xml>',//xml字符串
    },
    startStory : [
                    {
                        index:0,
                        type:'img',
                        value:'/calmtanxingyihao@1x.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c19_startstory_1,
                        directioin:'left',
                        x:14,
                        y:65,
                        hide_ele_index:null
                    }
                ],
    endStory:  [
                    {
                        index:0,
                        type:'img',
                        value:'/calmtanxingyihao@1x.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c19_endstory_1,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }

                ],
};