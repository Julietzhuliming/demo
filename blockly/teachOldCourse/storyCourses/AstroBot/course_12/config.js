var courseData = {
    courseId: 12,
    courseTitle: MSG.course12_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c12_help_1'],
                'content': '',
            },
            {
                'text': MSG['c12_help_2'],
                'content': '<div><h3><span>1.</span>' + MSG['c12_help_2_1'] + '</h3><img style="width:50%;margin:3rem auto;" src="course_all/12_2_1.gif" /></div><div><h3><span>2.</span>' + MSG['c12_help_2_2'] + '</h3><img style="width:50%;margin:3rem auto;" src="course_all/12_2_2.gif" /></div>',
            },
            {
                'text': MSG['c12_help_3'],
                'content': '<h3><span>1.</span>' + MSG['c12_help_3_1'] + '</h3><img style="width:50%;margin:3rem auto 0;" src="course_all/12_3.gif" />',
            },
        ],
    },
    toolConfig: {
        'motion': ['multiple_servo_turn_speed'],
        'control': ['custom_control_wait_seconds'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="61" y="106"><field name="PROGRAM_BRANCH">1</field></block><block type="multiple_servo_turn_speed" id="K46MQ@)Ng2,$L}+D[}|a" x="280" y="128"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","1","1","1"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field></block><block type="custom_control_wait_seconds" id="@nrSjeqO@M-=7GU0DE|e" x="65" y="208"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4dqFoqBmwGGW!5:cR[8s"><field name="NUM">2</field></shadow></value></block><block type="multiple_servo_turn_speed" id="~5F!7N-bohc}6C6N,^Td" x="48" y="316"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","1","1","1"],"speeds":["M","M","M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field></block><block type="custom_control_wait_seconds" id="J?z%u5;zy!/,R;9AS=j:" x="533" y="341"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4.-dmj}qdfm#ZrNA+)J_"><field name="NUM">2</field></shadow></value></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="46" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="multiple_servo_turn_speed" id="K46MQ@)Ng2,$L}+D[}|a"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["1","2","1","2"],"speeds":["F","M","F","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><next><block type="custom_control_wait_seconds" id="@nrSjeqO@M-=7GU0DE|e"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4dqFoqBmwGGW!5:cR[8s"><field name="NUM">3</field></shadow></value><next><block type="multiple_servo_turn_speed" id="~5F!7N-bohc}6C6N,^Td"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2","3","4"],"directions":["2","1","2","1"],"speeds":["M","F","M","F"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2","3","4"]</field><next><block type="custom_control_wait_seconds" id="J?z%u5;zy!/,R;9AS=j:"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="4.-dmj}qdfm#ZrNA+)J_"><field name="NUM">3</field></shadow></value></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '>')
                },
                index: 0
            },
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '<')
                },
                index: 1
            }
        ],
    },
    startStory: [
        {
            index: 0,
            type: 'img',
            value: '/l_xinbao3.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c12_startstory_1,
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
            value: MSG.c12_startstory_2,
            directioin: 'right',
            x: 12,
            y: 40,
            hide_ele_index: 1
        }
    ],
    endStory: [
        {
            index: 0,
            type: 'img',
            value: '/r_lubao1.png',
            directioin: 'right',
            x: 0,
            y: 35,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c12_endstory_1,
            directioin: 'right',
            x: 12,
            y: 40,
            hide_ele_index: null
        },
        {
            index: 2,
            type: 'img',
            value: '/l_xinbao1.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 3,
            type: 'text',
            value: MSG.c12_endstory_2,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: 1
        }
    ],
};

function exCompare_czh(c_textContent, s_textContent, way) {
    var obj_speed = {
        VS: 1,
        S: 2,
        M: 3,
        F: 4,
        VF: 5,
    }

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
            if (way === '<') {
                if (!(obj_speed[c_arr[0]] < obj_speed[c_arr[1]] && obj_speed[c_arr[2]] < obj_speed[c_arr[3]]))
                    return false
            }
            else if (way === '>') {
                if (!(obj_speed[c_arr[0]] > obj_speed[c_arr[1]] && obj_speed[c_arr[2]] > obj_speed[c_arr[3]]))
                    return false
            }
        }
    }

    return true
}
