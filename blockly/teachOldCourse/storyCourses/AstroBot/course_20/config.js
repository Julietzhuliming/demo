var courseData = {
    courseId: 20,
    courseTitle: MSG.course20_title,
    toolConfig: {
        'motion': ['motion_execution_action','motion_speed_continued_second'],
    },
    helpList: {
        'commonType': [
            {
                'text': MSG['c20_help_1'],
                'content': '',
            },
        ],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_execution_action" id="TS*Uz[zJ5mL5txiq{~Xf"><field name="motionName">actions_636233527487833810</field><next><block type="motion_speed_continued_second" id="(_)A*GRqUl_-rSMcFM*x"><field name="directionType">TurnLeft</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="6Etxv`zP;glRCZ{?COW2"><field name="TIME">2</field></shadow></value><next><block type="motion_speed_continued_second" id="M^cxqdS:z=?.Fau1^OLG"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id=":mV~EH$gy`}XgU}e_t_3"><field name="TIME">1</field></shadow></value><next><block type="motion_execution_action" id="YhM^AD~RL0Jx`nDCeIJ{"><field name="motionName">actions_636233528239565150</field></block></next></block></next></block></next></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'motion_speed_continued_second', name: ['speedType'] }
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
                        value: MSG.c20_startstory_1,
                        directioin: 'left',
                        x: 15,
                        y: 65,
                        hide_ele_index: null
                    },
                    {
                        index: 2,
                        type: 'text',
                        value: MSG.c20_startstory_2,
                        directioin: 'left',
                        x: 15,
                        y: 65,
                        hide_ele_index: 1
                    }

              ],
    endStory:  [
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
                        value: MSG.c20_endstory_1,
                        directioin: 'left',
                        x: 15,
                        y: 65,
                        hide_ele_index: null
                    }

                ],
};