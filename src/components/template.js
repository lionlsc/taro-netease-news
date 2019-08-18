import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
@inject('Store')
@observer
class NewsList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text> NewsList </Text>
      </View>
    )
  }
}

export default NewsList
