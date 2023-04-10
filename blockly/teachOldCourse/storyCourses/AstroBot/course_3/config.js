var courseData = {
    courseId : 3,
    courseTitle: MSG.course3_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c3_help_1'],
                'content': '',
            }
        ],
    },
    toolConfig: {
    },
    program: {
        init:'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="53" y="146"><field name="PROGRAM_BRANCH">1</field></block><block type="motion_execution_action" id="WBeYifB!A4$$@v$.CyXc" x="315" y="199"><field name="motionName">actions_636253592061755220</field></block><block type="motion_execution_action" id="x~jwCWQ#aPqf]UF@NT=(" x="81" y="262"><field name="motionName">actions_636253592061755220</field></block><block type="motion_execution_action" id="lQ{}0,1boH*ztIN1!t,!" x="343" y="312"><field name="motionName">actions_636253592061755220</field></block><block type="motion_execution_action" id="Kv}^^A(yA0^W9(z]6z5R" x="60" y="384"><field name="motionName">actions_636253592061755220</field></block><block type="custom_control_wait_seconds" id="|L[Ahwdd?-~X+g66Cc]?" x="344" y="424"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="vmqIEAnr!:K|Z~8,E5F%"><field name="NUM">5</field></shadow></value></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="77" y="98"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="WBeYifB!A4$$@v$.CyXc"><field name="motionName">actions_f70e0fd9-1ed8-4fd2-b00c-821ac1e8046c</field><next><block type="motion_execution_action" id="x~jwCWQ#aPqf]UF@NT=("><field name="motionName">actions_8e07f32d-ba72-4e43-a603-710264bc4308</field><next><block type="custom_control_wait_seconds" id="Eu}cFs+IQ)t1@[w.Wu#4"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="9E|X*vL(*b#|}Wum{]QA"><field name="NUM">2</field></shadow></value><next><block type="motion_execution_action" id="lQ{}0,1boH*ztIN1!t,!"><field name="motionName">actions_9b30bcec-548d-4562-be9c-57676cb36fde</field><next><block type="motion_execution_action" id="Kv}^^A(yA0^W9(z]6z5R"><field name="motionName">actions_6227af3e-fcc0-4141-87a9-948574190e20</field></block></next></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
    },
    startStory: [
                    {
                        index:0,
                        type:'img',
                        value:'/l_p1.png',
                        directioin:'left',
                        x:0,
                        y:45,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c3_startstory_1,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:null
                    }
                ],
    
    endStory:   [
                    {
                        index:0,
                        type:'img',
                        value:'/l_p1.png',
                        directioin:'left',
                        x:0,
                        y:45,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c3_endstory_1,
                        directioin:'left',
                        x:12,
                        y:55,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/r_xinbao1.png',
                        directioin:'right',
                        x:0,
                        y:20,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c3_endstory_2,
                        directioin:'right',
                        x:12,
                        y:25,
                        hide_ele_index:1
                    }
                ],
};