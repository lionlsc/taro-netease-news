import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import "./news-item.scss"
class NewsItem extends Component {
  constructor(props) {
    super(props)
    this.state={
      date:new Date()
    }
  }

  componentWillMount() {}
  componentDidMount() {}

  componentWillUnmount() {
  }

  render() {

    return (
      <View className={"news-item"} onClick={()=>{
        Taro.navigateTo({
          url: `/pages/webnews/webnews?url=${this.props.url}`
        })
      }}>
        <View className={"news-container"}>
          <View className={"news-title"}>
            <Text className={"title-text"}>{this.props.title}</Text>
          </View>
          <View className={"news-info"}>
            <Text className={"info-text"}>来源：{this.props.source}</Text>
            <Text className={"info-text"}>{this.state.date.getHours()-new Date(this.props.ptime).getHours()}小时前</Text>
          </View>
          <View className={"news-image"}>
            <Image
              style='width: 100%;height: 100%;background: #fff;'
              src={this.props.imgsrc}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default NewsItem
