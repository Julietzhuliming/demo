var courseData =  {
    courseId : 8,
    courseTitle:MSG.course8_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c8_help_1'],
                'content': '',
            },
            {
                'text': '',
                'content': '<h3><span>1.</span>'+MSG['c8_help_2']+'</h3><img src="course_all/8_2.png" /><h3><span>2.</span>'+MSG['c8_help_3']+'</h3><img src="course_all/8_3.png" /><ul><li>a.'+MSG['c8_help_3_a']+'</li><li>b.'+MSG['c8_help_3_b']+'</li><li>c.'+MSG['c8_help_3_c']+'</li><li>d.'+MSG['c8_help_3_d']+'</li></ul><h3><span>3.</span>'+MSG['c8_help_4']+'</h3><img src="course_all/8_4.png" /><ul><li>a.'+MSG['c8_help_4_a']+'</li><li>b.'+MSG['c8_help_4_b']+'</li></ul>'  ,
            },
            /*{
                'text': MSG['c8_help_3'],
                'content': '<img src="course_all/8_3.png" /><h3>a.</h3><h3>b.'+MSG['c8_help_3_b']+'</h3><h3>c.'+MSG['c8_help_3_c']+'</h3><h3>d.'+MSG['c8_help_3_d']+'</h3>',
            },
            {
                'text': MSG['c8_help_4'],
                'content': '<img src="course_all/8_4.png" /><h3>a.'+MSG['c8_help_4_a']+'</h3><h3>b.'+MSG['c8_help_4_b']+'</h3>',
            }*/
        ],
    },
    toolConfig: {
        'control': ['custom_control_do_while', 'custom_control_infinite_loop'],
        'sensors': ['sensor_ahead_obstacle'],
        'motion': ['motion_execution_action'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="49" y="165"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_paly_sound" id="NLT2+j8i3xd]NmvGX*9W" x="287" y="196"><field name="isDelay">false</field><field name="chooseSound">emotion:happy</field></block><block type="acoustooptic_emotions_color_times" id="LJge)FgdkCg$W6FZkDXH" x="34" y="279"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"isDelay":false,"emotions":[6,6],"colors":["#FF0000","#FF0000"]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="!|.D+z-Gb4sUwZmRTY;a"><field name="NUM">3</field></shadow></value></block><block type="motion_execution_action" id="T+B2ztE8mU:9|[ue4FHJ" x="121" y="395"><field name="motionName">actions_a182b7de-e32f-4445-8c0f-80b4491082f6</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="42" y="156"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_do_while" id="q2n!lA}@5:VPx#`1$Yox"><statement name="DO"><block type="motion_execution_action" id=";7#N%cbWt{wPFU9zRhKW"><field name="motionName">actions_f70e0fd9-1ed8-4fd2-b00c-821ac1e8046c</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="@/t~NBwI`ARGM)?)#CMi"></block></value><next><block type="acoustooptic_paly_sound" id="NLT2+j8i3xd]NmvGX*9W"><field name="isDelay">false</field><field name="chooseSound">emotion:happy</field><next><block type="acoustooptic_emotions_color_times" id="LJge)FgdkCg$W6FZkDXH"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"isDelay":false,"emotions":[6,6],"colors":["#FF0000","#FF0000"]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="!|.D+z-Gb4sUwZmRTY;a"><field name="NUM">3</field></shadow></value><next><block type="motion_execution_action" id="T+B2ztE8mU:9|[ue4FHJ"><field name="motionName">actions_a182b7de-e32f-4445-8c0f-80b4491082f6</field></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'acoustooptic_paly_sound', name: ['chooseSound'] },
            { type: 'acoustooptic_emotions_color_times', name: ['mutiple_hiddenObj','CUSTOM_MATH_NUM'] },
            { index:1,type: 'motion_execution_action', name: ['motionName'] },
        ],
    },
    startStory :[
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao2.png',
                        directioin:'left',
                        x:0,
                        y:50,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c8_startstory_1,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c8_startstory_2,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:1
                    }
                ],
    endStory:   [
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
                        value:MSG.c8_endstory_1,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }
                ],
};