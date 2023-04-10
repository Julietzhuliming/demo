var courseData = {
    courseId : 2,
    courseTitle: MSG.course2_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c2_help_1'],
                'content':'',
            }
        ],
    },
    program:{
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_emotions_color_times" id="a-qD?O`HEQRCZlk@uXqY" x="195" y="204"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"isDelay":true,"emotions":[0,0],"colors":["#FF0000","#FF0000"]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="A;_*[+8RG#]PnoK#w11W"><field name="NUM">3</field></shadow></value></block><block type="acoustooptic_paly_sound" id="9`ux|7q#!MD?-sb.tb_#" x="147" y="338"><field name="isDelay">true</field><field name="chooseSound">emotion:doubt</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="acoustooptic_emotions_color_times" id="a-qD?O`HEQRCZlk@uXqY"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"isDelay":true,"emotions":[0,0],"colors":["#FF0000","#FF0000"]}</field><field name="LIST_SERVOS"></field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="A;_*[+8RG#]PnoK#w11W"><field name="NUM">3</field></shadow></value><next><block type="acoustooptic_paly_sound" id="9`ux|7q#!MD?-sb.tb_#"><field name="isDelay">true</field><field name="chooseSound">emotion:doubt</field></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'acoustooptic_emotions_color_times', name: ['mutiple_hiddenObj','CUSTOM_MATH_NUM'] },
            { type: 'acoustooptic_paly_sound', name: ['chooseSound'] }
        ],
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
                        value: MSG.c2_startstory_1,
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
                        value:'/r_xinbao1.png',
                        directioin:'right',
                        x:0,
                        y:20,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value: MSG.c2_endstory_1,
                        directioin:'right',
                        x:12,
                        y:25,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:'/l_p1.png',
                        directioin:'left',
                        x:0,
                        y:40,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value: MSG.c2_endstory_2,
                        directioin:'left',
                        x:12,
                        y:45,
                        hide_ele_index:1
                    }
                ],
};