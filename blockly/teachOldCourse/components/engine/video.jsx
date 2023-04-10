const React = require('react')
// var videojs = require('video.js')
var video = require('react-html5video')
var MainEntry = require('./../../../engine/entry.js')
var blocklyDatas = MainEntry.blocklyDatas
var $ = require('jquery')

class Video extends React.Component {
    constructor(props) {
        super(props)
        
        let lang = window.LANGUAGE_CODE
        lang = (lang != 'en' && lang != 'zh-hans') ? 'en' : lang

        this.videoBgImg = './../teachOldCourse/images/video_bg_' + lang +  '.png'
        this.courseId = blocklyDatas.getDataByKey('courseId')
        this.src = blocklyDatas.getDataByKey('course_basepath') + '/course_' + this.courseId + '/'+'video.mp4'
        this.closeVideobox = this.closeVideobox.bind(this)
    }

    componentDidMount() {
        $('.rh5v-Fullscreen_button').on('touchend', function (e) {
            var screenComponent = $('.rh5v-DefaultPlayer_component');
            var screenClassName = screenComponent[0].className;
            if (screenClassName.indexOf('full_screen') > -1) {
                screenComponent[0].className = 'rh5v-DefaultPlayer_component';
            } else {
                screenComponent[0].className = 'rh5v-DefaultPlayer_component full_screen';
            }
        });
        window.setTimeout(function () {
            $(".video_container>div").css("transform", "inherit");
            $(".video_container>div").css("-webkit-transform", "inherit");
            $(".video_container>div").css("-moz-transform", "inherit");
            $(".video_container>div").css("-o-transform", "inherit");
        }, 10);
    }
    componentWillUnmount() {
        console.log('destroy all component');
        if (this.player) {
            this.player.dispose()
        }
    }

    canPlay(e){
        console.log(e);
    }

    closeVideobox(){
        console.log('closeVideo---->')
        // return this.props.onRemove()
    }


    render() {
        var Video = video.DefaultPlayer
        return (
            <div className="video_container" onClick={this.closeVideobox.bind(this, '000')}>
                <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={this.videoBgImg} ref="video" onCanPlayThrough={this.canPlay} autoPlay>
                    <source src={this.src} type="video/mp4" />
                </Video>
            </div>
        )
    }
}

module.exports = Video