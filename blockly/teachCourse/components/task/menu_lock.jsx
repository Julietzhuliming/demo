const React = require('react');
const TaskData = require('../task_data');
var MainEntry = require('./../../../engine/entry.js');
var blocklyDatas = MainEntry.blocklyDatas;
var eventsListener = MainEntry.eventsListener;
var constants = MainEntry.constants;
var ToolConfig = MainEntry.ToolConfig;

class MenuLock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toolConfig: blocklyDatas.getDataByKey('toolConfigString'),
        }
        this.goSure = this.goSure.bind(this)
        this.goCancel = this.goCancel.bind(this)
        this.updataMenuLock = this.updataMenuLock.bind(this)
        
    }
    componentDidMount() {
        eventsListener.on('updataMenuLock', this.updataMenuLock)
    }
    
    componentWillUnmount() {
        eventsListener.off('updataMenuLock')
    }

    updataMenuLock(curTaskData){
        if (curTaskData.toolConfig) {
            // let toolConfig = new ToolConfig(constants.PLATFORM_COURSE, curTaskData)
            blocklyDatas.setKeyData('toolConfigString', JSON.stringify(curTaskData.toolConfig))
            this.setState({
                toolConfig: blocklyDatas.getDataByKey('toolConfigString'),
            }, () =>{
                // console.log(this.state.toolConfig)
            })
        }
    }

    renderPartMenuLock() {
        const arr = constants.TEACHBLOCKLY_ICON_ARRAY.concat()
        if (this.state.toolConfig){
            const showConfigJson = JSON.parse(this.state.toolConfig)
            for (const key in showConfigJson) {
                if (arr.indexOf(key)>-1){
                    arr.splice(arr.indexOf(key), 1,1)
                }
            }
        }
        const lockArr = []
        const ele = document.querySelector('.blocklyReturn')
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != 1){
                    lockArr.push(<div key={i} className={"flex menu_lock meun" + (i + 2) + "_lock"} style={{ 'width': ele.clientWidth + 'px' }}></div>);
                }
            }
        }
        return lockArr;
    }

    goSure(e) {
        this._stopPropagation(e)
        this.props.callback({ direction: this.state.selected })
        return this.props.onRemove()
    }

    goCancel(e) {
        this._stopPropagation(e)
        return this.props.onRemove()
    }
    _stopPropagation(e) {
        if (!e) return ;
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        const lockArr = this.renderPartMenuLock()
        return (
            <div className="partmenu_lock_box" >
                {lockArr}
            </div>
        )
    }
}

module.exports = MenuLock;
