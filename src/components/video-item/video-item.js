import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import { ClIcon } from 'mp-colorui'
import "./video-item.scss"
class VideoItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View className={"item-container"}>
        <Image
          style='width: 100%;height: 100%;background: #fff;position: absolute'
          src={this.props.cover}
        />
        <Text className={'video-title'}> {this.props.title} </Text>
        <View className={"video-icon"}>
          <ClIcon iconName='video' size='large' color='white' />
        </View>
      </View>
    )
  }
}

export default VideoItem
