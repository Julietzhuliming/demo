var courseData = {
    courseId : 15,
    courseTitle: MSG.course15_title,
    toolConfig: {
        'control': ['custom_control_do_while'],
        'motion': ['motion_execution_action'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c15_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="135"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_do_while" id="t/Tq|D$H)C_M||sUqbxx"><statement name="DO"><block type="motion_execution_action" id="UB7Xi81;INsnJoJa^MJ="><field name="motionName">actions_ef8aaf68-dfe2-4009-b761-e9dcc25fe610</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="foAdZhXYk,%{ruSse)vk"></block></value><next><block type="motion_execution_action" id="X/jr_,c--g)[PTzO999Q"><field name="motionName">actions_5a43d07f-e930-4c2f-8499-d9ff07266ef8</field><next><block type="motion_execution_action" id="_-aP`oM~(/2fzYLDH`|C"><field name="motionName">actions_7e068cd5-d95e-4b1e-a72b-aed2157e325d</field></block></next></block></next></block></next></block></xml>',//xml字符串
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
                        value:MSG.c15_startstory_1,
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
                        value:MSG.c15_startstory_2,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:null
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
                        value:MSG.c15_endstory_1,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/l_xinbao1.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c15_endstory_2,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }
                ],
};