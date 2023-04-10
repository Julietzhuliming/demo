var courseData = {
    level: 1,
    stage: 9,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s9_m6_' + window.moveType + '_title'] || MSG['l1_s9_m6_commonType_title'],
    toolConfig: {
        'motion': ['motion_action_speed', 'motion_action_stop', 'motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_lights_on'],
        'control': ['custom_control_infinite_loop', 'custom_control_wait_for'],
        'sensors': ['sensor_obstacle_distance'],
        'math': ['custom_math_logic_compare']
    },
    guideClick: ['#\\:6'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc" x="295" y="245"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value></block><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4" x="31" y="349"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_continued_second" id="+{LIi5H~KYQjpRYeU=;?"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="FHSBdE5_W|L[QKEBe)Xh"><field name="TIME">1</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="g*GsqSUWAJ|6V,P/$TF:"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id=",EXb)d?t[POr}tXa$|@["><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="@2N.R-Cvb*zjSald7xjj"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="YsTw7y@OBjTWEKVj.JWC"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="l39U|HIIv}wZQ+6pk#l9"></block></value><value name="B"><shadow type="custom_math_num" id="9~0[_+vz{{T/XmyfU/!:"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value><next><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_continued_second" id="+{LIi5H~KYQjpRYeU=;?"><field name="directionType">TurnRight</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="FHSBdE5_W|L[QKEBe)Xh"><field name="TIME">1</field></shadow></value></block></next></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                { type: 'acoustooptic_paly_tone', name: ['toneName','beatType'] },
                { type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND']},
            ],
            passRule: [
                { type: 'motion_speed_continued_second', times: 2 },
            ]
          },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc" x="295" y="245"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value></block><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4" x="31" y="349"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_distance" id="x3exE^Q_PtXzm=C=~3Y="><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="U7a%o}%7D3`rK3s%DvOX"><field name="NUM">2</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="+N*/ZjOUyI.:gVvoXpO7"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="*xu[v-:f99g-o6{BnSVo"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="iT-7f=0461@:1):B]zO!"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="dRA|%5)#yF/*g6,ci5`1"><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="kd!}7Fs3O(dMnvAZ.xn5"></block></value><value name="B"><shadow type="custom_math_num" id=".6CN~nfVAs^RxT?b7{{y"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value><next><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_distance" id="x3exE^Q_PtXzm=C=~3Y="><field name="directionType">MoveRight</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="U7a%o}%7D3`rK3s%DvOX"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] },
                { type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
                
            ],
            passRule: [
                { type: 'motion_speed_distance', times: 2 },
            ]
        },
        'fourFeet': {// 四足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field></block><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc" x="295" y="245"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value></block><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4" x="31" y="349"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_distance" id="x3exE^Q_PtXzm=C=~3Y="><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="U7a%o}%7D3`rK3s%DvOX"><field name="NUM">2</field></shadow></value></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="26" y="168"><field name="PROGRAM_BRANCH">1</field><next><block type="custom_control_infinite_loop" id="!ej2e28bpg%9)Z#INTN+"><statement name="CUSTOM_CONTROL_DO0"><block type="custom_control_wait_for" id="V*[S(K`pwJ:A%E)}sn{`"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="custom_math_logic_compare" id="OS~7rM3u=yrUXA9rq?q2"><field name="LOGIC_COMPARE">&lt;</field><value name="A"><shadow type="custom_math_num" id="0!pi/[_Qd[}i;WThFk0."><field name="NUM">1</field></shadow><block type="sensor_obstacle_distance" id="h,Ze#4iXn[~t~Cg[Bb;#"></block></value><value name="B"><shadow type="custom_math_num" id="|rCNkf^ODYe8qR1}kFPB"><field name="NUM">10</field></shadow></value></block></value><next><block type="acoustooptic_lights_on" id="qfOVlfb`I06EWm,X*hKc"><field name="acoustoColor">#00FF00</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="p0@=Q-=`zWDrQM,UZ!|X"><field name="TIME">0.2</field></shadow></value><next><block type="acoustooptic_paly_tone" id="w*kGM,_I]*ntVMVkT?F4"><field name="toneName">E5</field><field name="beatType">beat_8_1</field><next><block type="motion_speed_distance" id="x3exE^Q_PtXzm=C=~3Y="><field name="directionType">MoveBackward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="U7a%o}%7D3`rK3s%DvOX"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></statement></block></next></block></xml>',
            ignore: [
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] },
                { type: 'motion_speed_distance', name: ['CUSTOM_MATH_NUM']},
                { type: 'acoustooptic_paly_tone', name: ['toneName', 'beatType'] },
                
            ],
            passRule: [
                { type: 'motion_speed_distance', times: 2 },
            ]
        },
    },
    missionStandardTime:35*1000//通过任务的标准时间,单位毫秒
};