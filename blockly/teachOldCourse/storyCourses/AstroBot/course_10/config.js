var courseData = {
    courseId : 10,
    courseTitle: MSG.course10_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c10_help_1'],
                'content': '',
            },
            {
                'text': MSG['c10_help_2'],
                'content': '<img src="course_all/10_2.png" />'  ,
            },
        ],
    },
    toolConfig: {
        'motion': ['multiple_servo_turn_millisecond'],
        'control': ['custom_control_repeat_times'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="159"><field name="PROGRAM_BRANCH">1</field></block></xml>',//xml字符串
        standard:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="40" y="134"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="%;~-uAY^9ZI!cu)4b44["><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="z0g30V$pE6zhB4emVgrj"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="multiple_servo_turn_millisecond" id="p,X,`GY8OOG~.@-tb^P]"><field name="mutiple_hiddenObj">{"curSelectArr":["5"],"angles":["40"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["5"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="Nq]Z/NH6ecY@#?sCLIMM"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id="Ybd$XycL?vrRXq*H::!g"><field name="mutiple_hiddenObj">{"curSelectArr":["5"],"angles":["-50"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["5"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="ct9jV*]e!~Qs+(orM7#@"><field name="NUM">400</field></shadow></value></block></next></block></statement></block></next></block></xml>',
        ignore: [
            {
                type: 'multiple_servo_turn_millisecond',
                name: ['CUSTOM_MATH_NUM'],
            },
        ],
    },
    startStory : [
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao3.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c10_startstory_1,
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
                        y:30,
                        hide_ele_index:null
                    },
                    /*{
                        index:3,
                        type:'text',
                        value:MSG.c10_startstory_2,
                        directioin:'right',
                        x:12,
                        y:45,
                        hide_ele_index:1
                    },*/
                    {
                        index:3,
                        type:'text',
                        value:MSG.c10_startstory_3,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:-1
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c10_startstory_4,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:1
                    },
                    {
                        index:5,
                        type:'text',
                        value:MSG.c10_startstory_5,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:3
                    }
                ],
    endStory:[
                {
                    index:0,
                    type:'img',
                    value:'/r_lubao1.png',
                    directioin:'right',
                    x:0,
                    y:40,
                    hide_ele_index:null
                },
                {
                    index:1,
                    type:'text',
                    value:MSG.c10_endstory_1,
                    directioin:'right',
                    x:12,
                    y:45,
                    hide_ele_index:null
                },
                {
                    index:2,
                    type:'img',
                    value:'/l_xinbao1.png',
                    directioin:'left',
                    x:0,
                    y:55,
                    hide_ele_index:null
                },
                {
                    index:3,
                    type:'text',
                    value:MSG.c10_endstory_2,
                    directioin:'left',
                    x:12,
                    y:60,
                    hide_ele_index:1
                }
    ],
};