var courseData = {
    courseId : 6,
    courseTitle:MSG.course6_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c6_help_1'],
                'content': '',
            }
        ],
    },
    toolConfig: {
        'motion': ['motion_execution_action'],
        'control': ['custom_control_repeat_times','custom_control_if_else'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="e:*#H4be,8?qgZuGvYjn"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="rr.jP5L@jmdi]9t8#YcN"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_if_else" id="E0eh]d,J~n{l=n}v(cM4"><value name="CUSTOM_CONTROL_IF"><block type="sensor_ahead_obstacle" id="FBEb:Zj;6jzk2hO4XOPQ"></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_execution_action" id="wJv3CxY;.k:JvW~WPe@o"><field name="motionName">actions_9b30bcec-548d-4562-be9c-57676cb36fde</field></block></statement><statement name="CUSTOM_CONTROL_DO1"><block type="motion_execution_action" id="xg^z]QCLO{83MD4NK[bC"><field name="motionName">actions_f70e0fd9-1ed8-4fd2-b00c-821ac1e8046c</field></block></statement></block></statement></block></next></block></xml>',//xml字符串
    },
    startStory :[
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao3.png',
                        directioin:'left',
                        x:0,
                        y:50,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c6_startstory_1,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c6_startstory_2,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:1
                    }
                ],
    endStory:  [
                    {
                        index:0,
                        type:'img',
                        value:'/r_xinbao1.png',
                        directioin:'right',
                        x:0,
                        y:25,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c6_endstory_1,
                        directioin:'right',
                        x:12,
                        y:30,
                        hide_ele_index:null
                    }
                ],
    
};