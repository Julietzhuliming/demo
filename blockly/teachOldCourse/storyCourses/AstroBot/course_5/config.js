var courseData = {
    courseId : 5,
    courseTitle:MSG.course5_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c5_help_1'],
                'content': '',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_execution_action'],
        'control': ['custom_control_repeat_times'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="KObYb:5~|#`0zqXZ7?ls"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="y]i0nJBL,wk]GHav(TiO"><field name="NUM">5</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_execution_action" id="/@.`Knw;a@W1!Ap?w5f0"><field name="motionName">actions_f70e0fd9-1ed8-4fd2-b00c-821ac1e8046c</field></block></statement></block></next></block></xml>',//xml字符串
    },
    startStory: [
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao1.png',
                        directioin:'left',
                        x:0,
                        y:50,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c5_startstory_1,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c5_startstory_2,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:1
                    }
                ],
    endStory:[
                {
                    index:0,
                    type:'img',
                    value:'/l_xinbao1.png',
                    directioin:'left',
                    x:0,
                    y:55,
                    hide_ele_index:null
                },
                {
                    index:1,
                    type:'text',
                    value:MSG.c5_endstory_1,
                    directioin:'left',
                    x:12,
                    y:60,
                    hide_ele_index:null
                }
            ],
};