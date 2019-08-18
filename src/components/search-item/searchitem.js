import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './searchitem.scss'
class SearchItem extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <View className={'search-item'}>
        <View className={"search-image"}>
          <Image
            style='width: 100%;height: 100%;'
            src={this.props.imgsrc}
          />
        </View>
        <View className={'item-title'}>
          <Text > {this.props.title} </Text>
        </View>
      </View>
    )
  }
}

export default SearchItem
