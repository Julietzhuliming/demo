var courseData = {
    level: 1,
    stage: 3,
    knowledgePoint: 1,
    mission: 6,
    taskTitle: MSG['l1_s3_m6_' + window.moveType + '_title'] || MSG['l1_s3_m6_commonType_title'],
    toolConfig: {
        'motion': ['motion_speed_continued_second', 'motion_speed_distance'],
        'acousto_optic': ['acoustooptic_paly_tone', 'acoustooptic_paly_sound','acoustooptic_lights_on'],
    },
    guideClick: ['#\\:4'],
    program: {
        'commonType': {// 普通类别
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="169"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="|;cxyF/6~n)DRx=|SFzn"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="=4;}k(r,4*r+8kGHT,kH"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="_vq9bz^RIS^bRZdu!m,C"><field name="acoustoColor">#0000FF</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="zqPB1CwTkU+X}^qr0tr)"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="54" y="169"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_continued_second" id="|;cxyF/6~n)DRx=|SFzn"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="MOTION_SPEED_CONTINUED_SECOND"><shadow type="motion_custom_math_num" id="=4;}k(r,4*r+8kGHT,kH"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="_vq9bz^RIS^bRZdu!m,C"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="zqPB1CwTkU+X}^qr0tr)"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_sound" id="|$31|h|5G[mL`ngU2wn2"><field name="isDelay">true</field><field name="chooseSound">machine:police_car_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND'] },
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON']},
                { type: 'acoustooptic_paly_sound', name: ['chooseSound'], content: "machine:police_car_" }//忽略animal 里面的具体某一个item
            ]
        },
        'doubleFeet': {// 双足
            init: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="98" y="168"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="p+FOiYBO0Su!xPg*AFnW"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_normal</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="t*qKf=?OnMuG?VKZMAuu"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="CF!2Av{p^;[(;?~M$+F*"><field name="acoustoColor">#0000FF</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="2NRnWb]Of!b1D$Drk|p%"><field name="TIME">1</field></shadow></value></block></next></block></next></block></xml>',
            standard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="98" y="168"><field name="PROGRAM_BRANCH">1</field><next><block type="motion_speed_distance" id="p+FOiYBO0Su!xPg*AFnW"><field name="directionType">MoveForward</field><field name="speedType">id_motion_speed_fast</field><value name="CUSTOM_MATH_NUM"><shadow type="sys_custom_math_num" id="t*qKf=?OnMuG?VKZMAuu"><field name="NUM">1</field></shadow></value><next><block type="acoustooptic_lights_on" id="CF!2Av{p^;[(;?~M$+F*"><field name="acoustoColor">#FF0000</field><value name="ACOUSTOOPTIC_LIGHTS_ON"><shadow type="acoustooptic_custom_math_num" id="2NRnWb]Of!b1D$Drk|p%"><field name="TIME">1</field></shadow></value><next><block type="acoustooptic_paly_sound" id="^?_k/(u;5;nT}8#A1=Xq"><field name="isDelay">true</field><field name="chooseSound">machine:police_car_1</field></block></next></block></next></block></next></block></xml>',
            ignore: [
                { type: 'motion_speed_continued_second', name: ['MOTION_SPEED_CONTINUED_SECOND'] },
                { type: 'acoustooptic_lights_on', name: ['ACOUSTOOPTIC_LIGHTS_ON'] }
            ]
        },
       
    },
    missionStandardTime:20*1000//通过任务的标准时间,单位毫秒
};