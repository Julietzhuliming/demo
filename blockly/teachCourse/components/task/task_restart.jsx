const React = require('react');
var MainEntry = require('./../../../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
import { toNextMission } from './goToNextMission'
class TaskRestart extends React.Component {
    constructor(props) {
        super(props)
    }
    refreshPage(e){
        if (blocklyDatas.getDataByKey("programRunning")) return
        let params = {
            level: blocklyDatas.getDataByKey('level'),
            stage: blocklyDatas.getDataByKey('stage'),
            mission: blocklyDatas.getDataByKey('mission'),
            modelID: blocklyDatas.getDataByKey('modelID'),
            modelId: blocklyDatas.getDataByKey('modelId'),
            moveType: blocklyDatas.getDataByKey('moveType'),
            missionId: blocklyDatas.getDataByKey('missionId'),//app 要用
            starCount: blocklyDatas.getDataByKey('starCount'),//星星数量
        }
        console.log("reset button:",params)
       
        blocklyDatas.setKeyData('gudieFlag', true)//指引标识
        blocklyDatas.setKeyData('hasClickedReset',true)//点击了重置按钮
        toNextMission(JSON.stringify(params))
        
        let  that = this
        window.setTimeout(function(){
            // 异步处理将工作空间拖动的位置还原到起始位置
            let transformParams = 'translate(97,0) scale(' + Blockly.getMainWorkspace().scale + ')'
            let obj = document.querySelector('.blocklyBlockCanvas')
            if (obj) {
                obj.setAttribute('transform', transformParams)
            }
        },100)
        
    }
    resetWorkspacePosition(){
        
    }
    render() {
        return (
            <div className="restart_button" onClick={this.refreshPage}>
            </div>
        )
    }
}
module.exports = TaskRestart;
