var courseData = {
    courseId: 18,
    courseTitle: MSG.course18_title,
    toolConfig: {
        'control': ['custom_control_wait_seconds'],
        'motion': ['multiple_servo_turn_speed'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c18_help_1'],
                'content': '',
            },
            {
                'text': MSG['c18_help_2'],
                'content': '<h3>' + MSG['c18_help_2_1'] + '</h3><img style="width:40%;margin:3rem auto;" src="course_all/18_2.png" /><ul class="oneline" style="margin:0;"><li>1.' + MSG['c18_help_2_1_1'] + '</li><li>2.' + MSG['c18_help_2_1_2'] + '</li><li>3.' + MSG['c18_help_2_1_3'] + '</li><li>4.' + MSG['c18_help_2_1_4'] + '</li></ul>',
            },
            {
                'text': MSG['c18_help_3'],
                'content': '<h3>1.' + MSG['c18_help_3_1'] + '</h3><img style="width:65%;" src="course_all/18_3.gif" />',
            },
            {
                'text': MSG['c18_help_4'],
                'content': '<h3>1.' + MSG['c18_help_4_1'] + '</h3><img style="width:65%;" src="course_all/18_4.gif" />',
            },
            {
                'text': MSG['c18_help_5'],
                'content': '<h3>1.' + MSG['c18_help_5_1'] + '</h3><img style="width:65%;margin:2rem auto;" src="course_all/18_5.gif" />',
            },
            {
                'text': MSG['c18_help_6'],
                'content': '<h3>1.' + MSG['c18_help_6_1'] + '</h3><img style="width:65%;margin:2rem auto;" src="course_all/18_6.gif" />',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block><block type="multiple_servo_turn_speed" id="aYRjxu,0|1J|GiHPH5+T" x="53" y="217"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["1","1"],"speeds":["M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field></block><block type="custom_control_wait_seconds" id="jGnYuEYhHq[p%)L{,$$k" x="49" y="347"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="I):!7inuT]r1.rcQ.ggk"><field name="NUM">2</field></shadow></value></block><block type="multiple_servo_turn_speed" id="z}Q+SxQ=uDTA@:)/0;lP" x="49" y="446"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["1","1"],"speeds":["M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field></block><block type="custom_control_wait_seconds" id="o+dp*grI*5vc/derv6,u" x="53" y="575"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id=":v$6kcUy:bp4szZl)fW."><field name="NUM">2</field></shadow></value></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="33" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="multiple_servo_turn_speed" id="aYRjxu,0|1J|GiHPH5+T"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["2","1"],"speeds":["M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field><next><block type="custom_control_wait_seconds" id="jGnYuEYhHq[p%)L{,$$k"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="I):!7inuT]r1.rcQ.ggk"><field name="NUM">1</field></shadow></value><next><block type="multiple_servo_turn_speed" id="z}Q+SxQ=uDTA@:)/0;lP"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["1","2"],"speeds":["M","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field><next><block type="custom_control_wait_seconds" id="o+dp*grI*5vc/derv6,u"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id=":v$6kcUy:bp4szZl)fW."><field name="NUM">1</field></shadow></value><next><block type="multiple_servo_turn_speed" id="w45s/I0R1`UqMthg2-aS"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["2","1"],"speeds":["M","F"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field><next><block type="custom_control_wait_seconds" id="bPzgvqtCVst^MQeBB$eH"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="kTKUk9nNHph6AM]DgCkH"><field name="NUM">1</field></shadow></value><next><block type="multiple_servo_turn_speed" id="q~ImuTtCh;=1NbYdgeez"><field name="mutiple_hiddenObj">{"curSelectArr":["1","2"],"directions":["2","1"],"speeds":["F","M"]}</field><field name="LIST_SERVOS"></field><field name="list_servos_for_run">["1","2"]</field><next><block type="custom_control_wait_seconds" id="Zx@7GXWa%7JFw#lOi}Av"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="y;x.5/}ilIG|}r*Xn@RX"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '=')
                },
                index: 0
            },
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '=')
                },
                index: 1
            },
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '<')
                },
                index: 2
            },
            {
                type: 'multiple_servo_turn_speed',
                name: ['mutiple_hiddenObj'],
                content: function (c_textContent, s_textContent) {
                    return exCompare_czh(c_textContent, s_textContent, '>')
                },
                index: 3
            },
        ],
    },
    startStory: [
        {
            index: 0,
            type: 'img',
            value: '/calmtanxingyihao@1x.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c18_startstory_1,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: null
        },
        {
            index: 2,
            type: 'text',
            value: MSG.c18_startstory_2,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: 1
        }
    ],
    endStory: [
        {
            index: 0,
            type: 'img',
            value: '/calmtanxingyihao@1x.png',
            directioin: 'left',
            x: 0,
            y: 60,
            hide_ele_index: null
        },
        {
            index: 1,
            type: 'text',
            value: MSG.c18_endstory_1,
            directioin: 'left',
            x: 12,
            y: 65,
            hide_ele_index: null
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
            if (way === '=' && !(c_arr[0] === c_arr[1]))
                return false
            else if (way === '<' && !(obj_speed[c_arr[0]] < obj_speed[c_arr[1]]))
                return false
            else if (way === '>' && !(obj_speed[c_arr[0]] > obj_speed[c_arr[1]]))
                return false
        }
    }

    return true
}
