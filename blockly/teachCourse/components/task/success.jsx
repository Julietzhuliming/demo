const React = require('react');
const TaskData = require('../task_data');
var MainEntry = require('./../../../engine/entry.js');
var RobatCommand = MainEntry.RobatCommand;
var constants = MainEntry.constants;
var blocklyDatas = MainEntry.blocklyDatas;
var eventsListener = MainEntry.eventsListener;
import { actionName2Id } from '../../../engine/common/utils/action_map'
import { toNextMission } from './goToNextMission'


class CourseTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showUsedTimeStr: '',
            clickHelp: 0,
            starCount:0,
        }
        this.countStarFunc = this.countStarFunc.bind(this)
        this.countUsedTime = this.countUsedTime.bind(this)
        this.sendCommondAndCheer = this.sendCommondAndCheer.bind(this)
        this.renderStarUlLi = this.renderStarUlLi.bind(this)
        this.successDeal = this.successDeal.bind(this)
        this.goConcel = this.goConcel.bind(this)
        this.updataSuccessTime = this.updataSuccessTime.bind(this)
    }
    componentDidMount() {
        this.sendCommondAndCheer()
        eventsListener.on('updataSuccessTime', this.updataSuccessTime);
    }
    componentWillUnmount() {
        eventsListener.off('updataSuccessTime');
    }
    updataSuccessTime(){
        let showUsedTimeStr_ = this.countUsedTime()
        this.setState({
            showUsedTimeStr: showUsedTimeStr_,
            clickHelp: blocklyDatas.getDataByKey('clickHelpcount'),
        })
    }
    countUsedTime(){//计算花费的时间
        let date2 = new Date() //结束时间
        let date3 = date2.getTime() - window.ENTER_BLOCKLY_TIME  //时间差的毫秒数
        this.countStarFunc(date3, this.state.clickHelp)
        let timestr
        if (date3>10*60*1000){//闯关成功所用的时间 上限是10min+
            timestr = '10min+'
        }else{
            let minutes = Math.floor(date3 / (60 * 1000))
            //计算相差秒数
            let leave3 = date3 % (60 * 1000)      //计算分钟数后剩余的毫秒数
            let seconds = Math.round(leave3 / 1000)
            minutes!='0'?minutes + "min":''
            timestr = minutes != '0' ? (minutes + "min") : '' + seconds + MSG['id_motion_second']
        }
        return timestr;
    }
    countStarFunc(usedTime, clickHelp){//计算星星
        let starCount = 0
        usedTime = (clickHelp == 1) ? usedTime * 1.25 : usedTime
        usedTime = (clickHelp == 2) ? usedTime * 1.3 : usedTime
        usedTime = (clickHelp >= 3) ? usedTime * 1.5 : usedTime
        let standardTime = TaskData.curTaskData.missionStandardTime
        if (usedTime <= standardTime){//3星
            starCount= 3
        } else if (usedTime <= standardTime * 2.5 && usedTime > standardTime) {//2星
            starCount = 2
        } else if (usedTime > standardTime*2.5) {//1星
            starCount = 1
        } 
        this.setState({
            starCount: starCount
        })
    }
    sendCommondAndCheer(){
        blocklyDatas.setKeyData('isSuccess', true);
        this.updataSuccessTime();
       
        // 显示了成功界面之后 要发送欢呼的命令+欢呼的音效
        var jsonobj = { "type": 'emotion', "key": 'cheer', "description": MSG['cheer'], "playPath": constants.BASE_PATH + '/emotion/cheer/cheer.aac' };
        if (window.blocklyObj) {//播放录音
            window.blocklyObj.stopPlayAudio();
            window.blocklyObj.playAudio(JSON.stringify(jsonobj));
        }
        const systemActionsArr = blocklyDatas.getSystemActionsArr()
        let param = 'action|' + actionName2Id('huanhu1126', systemActionsArr)
        RobatCommand.send(param);
    }
    
    successDeal(type,e){
        // 这里发送停止轮模式命令
        RobatCommand.send('stopRobot');
        console.log(type)
        
        let data = {
            type: type,//type===>1:返回项目列表;2:重新玩接口;3:进入下一个任务接口
            starCount: blocklyDatas.getDataByKey('starCount'),//星星数量
            modelId: blocklyDatas.getDataByKey('modelId') ,//app 要用
            missionId: blocklyDatas.getDataByKey('missionId'),//app 要用
        }
       
        // if (type == '2') {//重新开始
        //     let params = {
        //         level: blocklyDatas.getDataByKey('level'),
        //         stage: blocklyDatas.getDataByKey('stage'),
        //         mission: blocklyDatas.getDataByKey('mission'),
        //         modelID: blocklyDatas.getDataByKey('modelID'),
        //         moveType: blocklyDatas.getDataByKey('moveType'),
        //         modelId: blocklyDatas.getDataByKey('modelId'),
        //         missionId: blocklyDatas.getDataByKey('missionId'),//app 要用
        //         starCount: blocklyDatas.getDataByKey('starCount'),//星星数量
        //     }
        //     console.log("重新开始：params:",params)
        //     toNextMission(JSON.stringify(params))
        // }else{
            //下一关或者返回项目列表
            console.log("下一关或者返回项目列表//重新开始:",data)
            if (window.blocklyObj) {
                if(data.type == 1){//返回项目列表的时候要清掉语音
                    let bdtts = document.querySelector("#bdtts_div_id")
                    if (bdtts) {
                        bdtts.innerHTML = ''
                    }
                    window.setTimeout(function(){//为了解决卡卡返回项目列表还停止不了动作的bug
                        // 再把数据传出去，等待回调函数加载下一个任务
                        window.blocklyObj.successDeal(JSON.stringify(data))
                    },200)
                }else{//下一关或者重新开始任务
                    // 再把数据传出去，等待回调函数加载下一个任务
                    window.blocklyObj.successDeal(JSON.stringify(data))
                    blocklyDatas.setKeyData('starCount', 0)
                }
               
            } else { //浏览器环境 模拟环境下一关的逻辑
                let stage = blocklyDatas.getDataByKey('stage')
                let stageId = stage.substring(stage.indexOf('_') + 1, stage.length)
                let mission = blocklyDatas.getDataByKey('mission')
                let missionId = mission.substring(mission.indexOf('_') + 1, mission.length)

                if (type == 3) {
                    if (missionId == 9 || ((stageId == 3 || stageId == 4 || stageId == 8 || stageId == 9) && missionId == 8) || ((stageId == 6) && missionId == 7)) {
                        stageId = stageId / 1 + 1
                        missionId = 1
                    } else {
                        missionId = missionId / 1 + 1
                    }
                }
                blocklyDatas.setKeyData('stage', 'stage_' + stageId)
                blocklyDatas.setKeyData('mission', 'mission_' + missionId)

                let params = {
                    level: 'level_1',
                    stage: 'stage_' + stageId,
                    mission: 'mission_' + missionId,
                    modelID: blocklyDatas.getDataByKey('modelID'),
                    modelId: blocklyDatas.getDataByKey('modelId'),
                    moveType: blocklyDatas.getDataByKey('moveType') || 'commonType',
                }
                this.dealNextMission(e, params)
            }
        // }

        this.goConcel(e)   
    }
    dealNextMission(e, params){
        toNextMission(JSON.stringify(params))
    }
    goConcel(e){
        this._stopPropagation(e)
        if (e.target.className.indexOf('popup_container') > -1 || e.target.parentNode.className.indexOf('button_item') > -1 ) {//这是取消
            RobatCommand.send('stopRobot');//取消的时候也停止一下机器，卡卡模型停止不了
            return this.props.onRemove()
        }
    }
    _stopPropagation(e) {
        if (!e) return;
        e.stopPropagation();
        e.preventDefault();
    }
    renderStarUlLi(){
        let arr = []
        let last = blocklyDatas.getDataByKey('starCount')||0
        blocklyDatas.setKeyData('starCount', this.state.starCount/1 > last/1 ? this.state.starCount:last);
        console.log("通关成功啦！我获得的当前通关的星星数量是：", this.state.starCount );
        console.log("通关成功啦！我获得的最高星星数量的记录是：", blocklyDatas.getDataByKey('starCount'));
        let len = this.state.starCount
        for(let i=0;i<len;i++){
            arr.push(<li key={"star_"+i}>
                <img src={'./images/star.png'}/>
            </li>)
        }
        return arr
    }
    render() {
        let ulLi = this.renderStarUlLi()
        let condition = TaskData.curTaskData.level == '1' && TaskData.curTaskData.stage == '10' && TaskData.curTaskData.mission == '8'
        return (
            <div id="success_page_show" className={"popup_container success_page "} onTouchEnd={this.goConcel}>
                <div className="popup popup_middle">
                    <ul className="stars">
                        {ulLi}
                    </ul>
                    <div className="course_info">
                        <div>
                            {MSG['help']}：{this.state.clickHelp} {MSG['times']}
                        </div>
                        <div>
                            {MSG['useTime']}：{this.state.showUsedTimeStr}
                        </div>
                    </div>
                    <div className="success_op flex">
                        <div className="button_item flex button_ulist">
                            <img src={'./images/list.png'} onTouchEnd={this.successDeal.bind(this, '1')}/>
                        </div>
                        <div className="button_item flex button_restart" >
                            <img src={'./images/restart.png'} onTouchEnd={this.successDeal.bind(this, '2')} />
                        </div>
                        {condition?'':<div className="button_item flex button_next">
                            <img className="next_img" src={'./images/next.png'} onTouchEnd={this.successDeal.bind(this, '3')} />
                                    </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CourseTitle;
