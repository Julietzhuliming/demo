var courseData = {
    courseId: 4,
    courseTitle: MSG.course4_title,
    toolConfig: {
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c4_help_1'],
                'content': '',
            }
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="39" y="133"><field name="PROGRAM_BRANCH">1</field><next><block type="multiple_servo_turn_millisecond" id="gfATq|hz$}*0(Q]t,V;t"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["-60","0","0","-25"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="N@D{$R7)1Mw992BoinA8"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id=":N.+z(b|z@#=hvvQ24@|"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["0","-40","-40","0"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="HA]FRd+e;XFkLnu/7^J#"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id="Wrp8e7bSx-023g:4(26*"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["25","0","0","60"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="s=Lq%m-waMooq#5w0L2s"><field name="NUM">400</field></shadow></value></block></next></block></next></block></next></block><block type="multiple_servo_turn_millisecond" id="[c;Rtl#BHk9-B`1MY}E!" x="40" y="731"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["0","0","0","0"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="}$h_$|+PT]1gy8ERU@_5"><field name="NUM">400</field></shadow></value></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="39" y="133"><field name="PROGRAM_BRANCH">1</field><next><block type="multiple_servo_turn_millisecond" id="gfATq|hz$}*0(Q]t,V;t"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["-60","0","0","-25"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="N@D{$R7)1Mw992BoinA8"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id=":N.+z(b|z@#=hvvQ24@|"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["0","-40","-40","0"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="HA]FRd+e;XFkLnu/7^J#"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id="Wrp8e7bSx-023g:4(26*"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["25","0","0","60"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="s=Lq%m-waMooq#5w0L2s"><field name="NUM">400</field></shadow></value><next><block type="multiple_servo_turn_millisecond" id="[c;Rtl#BHk9-B`1MY}E!"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"angles":["0","40","40","0"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="}$h_$|+PT]1gy8ERU@_5"><field name="NUM">400</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            {
                type: 'multiple_servo_turn_millisecond',
                name: ['CUSTOM_MATH_NUM'],
            },
        ],
    },
    startStory:
        [

            {
                index: 0,
                type: 'img',
                value: '/l_xinbao1.png',
                directioin: 'left',
                x: 0,
                y: 20,
                hide_ele_index: null
            },
            {
                index: 1,
                type: 'text',
                value: MSG.c4_startstory_1,
                directioin: 'left',
                x: 12,
                y: 25,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c4_startstory_2,
                directioin: 'left',
                x: 12,
                y: 25,
                hide_ele_index: 1
            }
        ],
    endStory:
        [
            {
                index: 0,
                type: 'img',
                value: '/l_xinbao1.png',
                directioin: 'left',
                x: 0,
                y: 50,
                hide_ele_index: null
            },
            {
                index: 1,
                type: 'text',
                value: MSG.c4_endstory_1,
                directioin: 'left',
                x: 12,
                y: 55,
                hide_ele_index: null
            }
        ],
};