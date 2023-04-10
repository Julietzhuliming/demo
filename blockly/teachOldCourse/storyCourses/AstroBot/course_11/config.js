var courseData = {
    courseId: 11,
    courseTitle: MSG.course11_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c11_help_1'],
                'content': '',
            },
            {
                'text': MSG['c11_help_2'],
                'content': '<img style="width:40%;margin:3rem auto;" src="course_all/11_2.png" /><ul class="oneline" style="margin:0;"><li>1.' + MSG['c11_help_2_1'] + '</li><li>2.' + MSG['c11_help_2_2'] + '</li><li>3.' + MSG['c11_help_2_3'] + '</li><li>4.' + MSG['c11_help_2_4'] + '</li></ul>',
            },
            {
                'text': MSG['c11_help_3'],
                'content': '<div><h3><span>1.</span>' + MSG['c11_help_3_1'] + '</h3><img style="width:45%;margin:4rem auto;" src="course_all/11_3_1.png" /></div><div><h3><span>2.</span>' + MSG['c11_help_3_2'] + '</h3><img style="width:45%;margin:4rem auto;" src="course_all/11_3_2.png" /></div>',
            },
            {
                'text': MSG['c11_help_4'],
                'content': '<h3><span>1.</span>' + MSG['c11_help_4_1'] + '</h3><img style="width:50%;margin:3rem auto 0;" src="course_all/11_4.gif" />',
            },
            {
                'text': MSG['c11_help_5'],
                'content': '<h3><span>1.</span>' + MSG['c11_help_5_1'] + '</h3><img style="width:50%;margin:3rem auto 0;" src="course_all/11_5.gif" />',
            },
        ],
    },
    toolConfig: {
        'motion': ['multiple_servo_turn_speed'],
        'control': ['custom_control_wait_seconds'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="61" y="106"><field name="PROGRAM_BRANCH">1</field></block><block type="multiple_servo_turn_speed" id="K46MQ@)Ng2,$L}+D[}|a" x="280" y="128"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","2","1","2"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field></block><block type="custom_control_wait_seconds" id="@nrSjeqO@M-=7GU0DE|e" x="65" y="208"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4dqFoqBmwGGW!5:cR[8s"><field name="NUM">2</field></shadow></value></block><block type="multiple_servo_turn_speed" id="~5F!7N-bohc}6C6N,^Td" x="48" y="316"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","1","1","1"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field></block><block type="custom_control_wait_seconds" id="J?z%u5;zy!/,R;9AS=j:" x="533" y="341"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4.-dmj}qdfm#ZrNA+)J_"><field name="NUM">2</field></shadow></value></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="61" y="106"><field name="PROGRAM_BRANCH">1</field><next><block type="multiple_servo_turn_speed" id="K46MQ@)Ng2,$L}+D[}|a"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","2","1","2"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><next><block type="custom_control_wait_seconds" id="@nrSjeqO@M-=7GU0DE|e"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4dqFoqBmwGGW!5:cR[8s"><field name="NUM">2</field></shadow></value><next><block type="multiple_servo_turn_speed" id="~5F!7N-bohc}6C6N,^Td"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["2","1","2","1"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><next><block type="custom_control_wait_seconds" id="J?z%u5;zy!/,R;9AS=j:"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4.-dmj}qdfm#ZrNA+)J_"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent)
                },
            }
        ],
    },
    startStory: [
        {
            index: 0,
            type: 'img',
            value: '/l_xinbao2.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c11_startstory_1,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: null
        },
        {
            index: 2,
            type: 'img',
            value: '/r_lubao1.png',
            directioin: 'right',
            x: 0,
            y: 35,
            hide_ele_index: null
        },
        {
            index: 3,
            type: 'text',
            value: MSG.c11_startstory_2,
            directioin: 'right',
            x: 12,
            y: 40,
            hide_ele_index: 1
        },
        {
            index: 4,
            type: 'text',
            value: '….',
            directioin: 'right',
            x: 12,
            y: 40,
            hide_ele_index: 3
        },
        {
            index: 5,
            type: 'text',
            value: MSG.c11_startstory_3,
            directioin: 'right',
            x: 12,
            y: 40,
            hide_ele_index: 4
        },
        {
            index: 6,
            type: 'text',
            value: MSG.c11_startstory_4,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: 5
        }
    ],
    endStory: [
        {
            index: 0,
            type: 'img',
            value: '/r_lubao1.png',
            directioin: 'right',
            x: 0,
            y: 30,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c11_endstory_1,
            directioin: 'right',
            x: 12,
            y: 35,
            hide_ele_index: null
        },
        {
            index: 2,
            type: 'text',
            value: MSG.c11_endstory_2,
            directioin: 'right',
            x: 12,
            y: 35,
            hide_ele_index: 1
        },
        {
            index: 3,
            type: 'img',
            value: '/l_xinbao1.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 4,
            type: 'text',
            value: MSG.c11_endstory_3,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: 2
        }
    ],
};

function exCompare_czh(c_textContent, s_textContent) {
    var c_obj = JSON.parse(c_textContent)
    var s_obj = JSON.parse(s_textContent)

    for (var key in s_obj) {
        var c_arr = c_obj[key]
        var s_arr = s_obj[key]
        if (key != 'speeds') {
            for (var i = 0; i < s_arr.length; i++) {
                if (s_arr[i] != c_arr[i])
                    return false
            }
        }
        else {
            for (var i = 0; i < c_arr.length - 1; i++) {
                if (c_arr[0] != c_arr[i + 1])
                    return false
            }
        }
    }

    return true
}
