var courseData = {
    courseId : 23,
    courseTitle:MSG.course23_title,
    toolConfig: {
        'motion': ['motion_execution_action','motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop', 'custom_control_do_while'],
        'sensors': ['sensor_ahead_obstacle'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c23_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="62" y="119"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="45" y="114"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_do_while" id="!Qc]|~sDZMFO9k+aZ9Di"><statement name="DO"><block type="motion_execution_action" id="W6cBYL{9o)/k^sm8*jXc"><field name="motionName">actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="GOXDBfIWy8DN/y4Ex0vj"></block></value><next><block type="custom_control_repeat_times" id="3:lt/L2;?wu{VzhU.|AU"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="eI}a{xpsUR]EC;djioH}"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="motion_execution_action" id="~zYrIdrU^lVnt{cpj,,="><field name="motionName">actions_636250861685596490</field></block></statement></block></next></block></next></block></xml>',//xml字符串
    },
    startStory : [
            {
                index:0,
                type:'img',
                value:'/l_angury.png',
                directioin:'left',
                x:0,
                y:60,
                hide_ele_index:null
            },
            {
                index:1,
                type:'text',
                value:MSG.c23_startstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            },
            {
                index:2,
                type:'img',
                value:'/r_otherEnemy.png',
                directioin:'right',
                x:0,
                y:35,
                hide_ele_index:null
            },
            {
                index:3,
                type:'text',
                value:MSG.c23_startstory_2,
                directioin:'right',
                x:12,
                y:40,
                hide_ele_index:null
            },
            {
                index:4,
                type:'text',
                value:MSG.c23_startstory_3,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:1
            },
            {
                index:5,
                type:'text',
                value:MSG.c23_startstory_4,
                directioin:'right',
                x:12,
                y:40,
                hide_ele_index:3
            }

        ],
    endStory:[
            {
                index:0,
                type:'img',
                value:'/l_happytanxingyihao.png',
                directioin:'left',
                x:0,
                y:60,
                hide_ele_index:null
            },
            {
                index:1,
                type:'text',
                value:MSG.c23_endstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            }
        ],
};