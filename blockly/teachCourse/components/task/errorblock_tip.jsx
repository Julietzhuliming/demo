
const React = require('react');
var MainEntry = require('./../../../engine/entry.js');
var eventsListener = MainEntry.eventsListener;
var constants = MainEntry.constants;
var $ = require("jquery");
class errorBlockTip extends React.Component {
    constructor(props) {
        super(props)
        this.updataErrorTipPos = this.updataErrorTipPos.bind(this)
        this.removeErrorTip = this.removeErrorTip.bind(this)
        this.answerWrongDeal = this.answerWrongDeal.bind(this)
    }

    componentDidMount() {
        this.answerWrongDeal(this.props.data)
        eventsListener.on('updataErrorTipPos', this.updataErrorTipPos)
        eventsListener.on('removeErrorTip', this.removeErrorTip)
    }

    componentWillUnmount() {
        eventsListener.off('updataErrorTipPos')
        eventsListener.off('removeErrorTip')
    }
     // 失败了要播放忙音音效的
    playFailAudio(){
        var jsonobj = { 
            "type": 'machine', 
            "key": 'busy_tone', 
            "description": MSG['busy_tone'], 
            "playPath": constants.BASE_PATH + '/machine/busy_tone/busy_tone.aac' 
        };
        if (window.blocklyObj) {//播放录音
            window.blocklyObj.stopPlayAudio();
            window.blocklyObj.playAudio(JSON.stringify(jsonobj));
        }
        console.log("window.blocklyObj.playAudio", JSON.stringify(jsonobj));
    }
    // 更新显示错误提示的具体位置
    updataErrorTipPos(data){
        $("#course_error_block").css({
            left: data.left,
            top: data.top,
            position:'absolute'
        });
        $(".warn_img").css({height:data.height});
    }
    // 答案错误处理事情
    answerWrongDeal(data){
        this.updataErrorTipPos(data)
        this.playFailAudio()
    }
    // 移除错误块提示组件
    removeErrorTip(){
        $(".blocklyPath").removeClass('errorBlockShadow');
        return this.props.onRemove()
    }
    render() {
        return (
            <div>
                <img src={'../teachCourse/images/warn.png'} id="course_error_block" className="warn_img"/>
            </div>
        )
    }
}

module.exports = errorBlockTip;
