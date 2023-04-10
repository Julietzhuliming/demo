var courseData = {
    courseId : 24,
    courseTitle:MSG.course24_title,
    toolConfig: {
        'motion': ['motion_execution_action', 'motion_action_stop'],
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop', 'custom_control_do_while'],
        'sensors': ['sensor_ahead_obstacle'],
        'acousto_optic': ['acoustooptic_paly_sound', 'acoustooptic_emotions_color_times'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c24_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="62" y="119"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="65" y="132"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="9JKyGrxaq#TFq*_wrNvD"><field name="motionName">actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac</field><next><block type="motion_execution_action" id=",r^2#po_2~2__F`~2|jq"><field name="motionName">actions_636250882787328100</field><next><block type="acoustooptic_paly_sound" id="#/Y2iSyAlu`K;0e|D3{Q"><field name="isDelay">true</field><field name="chooseSound">animal:bear</field><next><block type="motion_execution_action" id="9mVf.6NCj@~OZ!N9ld`Q"><field name="motionName">actions_636250975382721730</field></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'acoustooptic_paly_sound', name: ['chooseSound'] }
        ],
    },
    startStory : [
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
                value:MSG.c24_startstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            }

        ],
    endStory:[
            {
                index:0,
                type:'img',
                value:'/l_meebot.png',
                directioin:'left',
                x:0,
                y:60,
                hide_ele_index:null
            },
            {
                index:1,
                type:'text',
                value:MSG.c24_endstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            },
            {
                index:2,
                type:'text',
                value:MSG.c24_endstory_2,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:1
            }
        ],
 };