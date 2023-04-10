var courseData = {
    courseId: 21,
    courseTitle: MSG.course21_title,
    toolConfig: {
        'control': ['custom_control_do_while'],
        'sensors': ['sensor_ahead_obstacle'],
        'motion': ['motion_execution_action','motion_action_stop','motion_speed_continued_second'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c21_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="62" y="119"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="55" y="133"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_do_while" id="NB}Gt;:}M16Nl#LSbzd`"><statement name="DO"><block type="motion_execution_action" id="vc$X@^BkCCM*nXw(y022"><field name="motionName">actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac</field></block></statement><value name="BOOL"><block type="sensor_ahead_obstacle" id="6B:;/PS%A^hP$}xrnga|"></block></value><next><block type="motion_action_stop" id="o9gq[qS]{6h8y_)%eMeC"><next><block type="motion_execution_action" id="LNM|gNO/QRO76K^A:ZXL"><field name="motionName">actions_636233527487833810</field><next><block type="motion_speed_continued_second" id=":_0htJ}%-n7`leXAQX}("><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=":2C^FX#trFl*rT.4uR7b"><field name="TIME">2</field></shadow></value><next><block type="motion_speed_continued_second" id="C4#CT^VjGmc7q]D=?{hh"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="^.E@zo#A%(4ADfUVww$^"><field name="TIME">1</field></shadow></value><next><block type="motion_execution_action" id="8e5xHYN7ABZ3T2{4{T6k"><field name="motionName">actions_636233528239565150</field></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'motion_speed_continued_second', name: ['speedType']},
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
                value: MSG.c21_startstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c21_startstory_2,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 1
            }
        ],
    endStory: [
            {
                index: 0,
                type: 'img',
                value: '/l_happytanxingyihao.png',
                directioin: 'left',
                x: 0,
                y: 60,
                hide_ele_index: null
            },
            {
                index: 1,
                type: 'text',
                value: MSG.c21_endstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c21_endstory_2,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 1
            },
            {
                index: 3,
                type: 'text',
                value: MSG.c21_endstory_3,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 2
            },
            {
                index: 4,
                type: 'text',
                value: MSG.c21_endstory_4,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 3
            },
            {
                index: 5,
                type: 'img',
                value: '/r_xinbao1.png',
                directioin: 'right',
                x: 0,
                y: 7,
                hide_ele_index: null
            },
            {
                index: 6,
                type: 'text',
                value: MSG.c21_endstory_5,
                directioin: 'right',
                x: 13,
                y: 12,
                hide_ele_index: null
            },
            {
                index: 7,
                type: 'img',
                value: '/r_lubao1.png',
                directioin: 'right',
                x: 0,
                y: 38,
                hide_ele_index: null
            },
            {
                index: 8,
                type: 'text',
                value: MSG.c21_endstory_6,
                directioin: 'right',
                x: 13,
                y: 43,
                hide_ele_index: null
            }
        ],
};