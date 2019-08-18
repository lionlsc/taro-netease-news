import Taro, {PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import VideoItem from "../video-item/video-item"
import "./video-list.scss"
@inject('Store')
@observer
class VideoList extends Taro.PureComponent {
  constructor(props) {
    super(props)
    this.state={
      startPageY:0,
      height:0,
      isLoading:false
    }
    this.handleTouchStart=this.handleTouchStart.bind(this);
    this.handleTouchMove=this.handleTouchMove.bind(this);
    this.handleTouchEnd=this.handleTouchEnd.bind(this);
  }
  handleTouchStart(e){
    if(e.touches[0].pageY<200){
      this.setState({
        isLoading:true,
        startPageY:e.touches[0].pageY
      })
    }
  }
  handleTouchMove(e){
    if(e.touches[0].pageY>this.state.startPageY&&this.state.isLoading){  //向下滑动才能刷新
      let height=(e.touches[0].pageY-this.state.startPageY)/3
      if (height>=50){
        this.setState({height:50})
      } else{
        this.setState({height:height})
      }
    }
  }
  handleTouchEnd(e){
    if(this.state.isLoading==true){
      this.setState({
        height:0,
        isLoading:false
      },()=>{
        this.props.Store.clearVideoData();
        this.props.Store.getVideoData();
      })
    }

  }


  componentWillMount() {}
  componentDidMount() {
    this.props.Store.getVideoData();
  }

  render() {
    let array=Array.from(this.props.Store.videoData)
    return (
      <View className={"video-list"}
         onTouchStart={this.handleTouchStart}
         onTouchMove={this.handleTouchMove}
         onTouchEnd={this.handleTouchEnd}
      >
        <View
          className={this.state.isLoading?'':'refresh-tarnsition'}
          style={`width:100%;height:${this.state.height}px;background-color:#ff0000;display:flex;justify-content: center; align-items: center;`}>
          <Text style={{color:"#ffffff"}}>释放即可刷新</Text>
        </View>
        {array.map((item,index)=>{
          return <VideoItem
                title={item.title}
                cover={item.cover}
                key={item.title}
          />
        })}
      </View>
    )
  }
}

export default VideoList
