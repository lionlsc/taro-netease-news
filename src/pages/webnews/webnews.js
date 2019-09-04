import Taro, { Component } from '@tarojs/taro'
import { View, Text, WebView } from '@tarojs/components'
class WebNews extends Component {
  constructor(props) {
    super(props)
  }
  config = {
    navigationBarTitleText:'新闻详情'
  }
  componentWillMount() {}
  componentDidMount() {
  }

  render() {
    return (
      <WebView src={this.$router.params.url}  />
    )
  }
}

export default WebNews
