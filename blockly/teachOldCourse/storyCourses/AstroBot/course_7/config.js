var courseData = {
    courseId : 7,
    courseTitle:MSG.course7_title,
    helpList: {
        'commonType': [
            {
                'text': MSG['c7_help_1'],
                'content': '',
            }
        ],
    },
    toolConfig: {
        'control': ['custom_control_repeat_times', 'custom_control_infinite_loop'],
        'acousto_optic': ['acoustooptic_lights_on'],
    },
    program: {
        init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"></block></xml>',
        standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="122"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_repeat_times" id="U$=wl1V/DmeTYk5nTx9a"><value name="CUSTOM_CONTROL_REPEAT_TIMES"><shadow type="custom_math_num" id="}hc!6:RO!3.QUi4B[6rv"><field name="NUM">3</field></shadow></value><statement name="CUSTOM_CONTROL_DO0"><block type="acoustooptic_lights_on" id="CQ^$~rk!rT3F^ivm~YK|"><field name="acoustoColor">#FF8000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="+$9(w,D_:Is$m(+tuH,Z"><field name="TIME">2</field></shadow></value><next><block type="acoustooptic_lights_on" id="T,jA:RzHtWPZ^X)ly@Yj"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="~`37lUJBpMq*BAP/Jr-|"><field name="TIME">2</field></shadow></value><next><block type="acoustooptic_lights_on" id="|yfc!Xh@k^xd1DUW#)j*"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="}|0V(1.=YC$n$/1yH+aJ"><field name="TIME">2</field></shadow></value></block></next></block></next></block></statement></block></next></block></xml>',//xml字符串
        ignore: [
            { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] },
        ],
    },
    startStory: [
                    {
                        index:0,
                        type:'img',
                        value:'/l_xinbao3.png',
                        directioin:'left',
                        x:0,
                        y:20,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c7_startstory_1,
                        directioin:'left',
                        x:12,
                        y:25,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c7_startstory_2,
                        directioin:'left',
                        x:12,
                        y:25,
                        hide_ele_index:1
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c7_startstory_3,
                        directioin:'left',
                        x:12,
                        y:25,
                        hide_ele_index:2
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c7_startstory_4,
                        directioin:'left',
                        x:12,
                        y:25,
                        hide_ele_index:3
                    }
                ],
    endStory:[
                {
                    index:0,
                    type:'img',
                    value:'/l_xinbao1.png',
                    directioin:'left',
                    x:0,
                    y:50,
                    hide_ele_index:null
                },
                {
                    index:1,
                    type:'text',
                    value:MSG.c7_endstory_1,
                    directioin:'left',
                    x:12,
                    y:55,
                    hide_ele_index:null
                },
            ],
};