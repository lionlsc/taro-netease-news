import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {ClSearchBar,ClMenuList} from 'mp-colorui'
import { observer, inject } from '@tarojs/mobx'
import './hot-list.scss'
@inject('Store')
@observer
class HotList extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  componentDidMount() {
    this.props.Store.getHotwords();
  }

  render() {
    let array=Array.from(this.props.Store.hotwords)
    return (
      <View>
        <ClSearchBar
          placeholder='请搜索'
          fix
          bgColor={'red'}
          onSearch={(value)=>{
            console.log(value);
            Taro.navigateTo({
             url:`/pages/searchlist/searchlist?keyword=${value}`
           })
          }}
        />
        <View className={'hotwords-list'}>
          {array.map((item)=>{
            return <View className={'hotwords-item'} key={item.hotWord}>
              <Text>{item.hotWord}</Text>
            </View>
          })}
        </View>
      </View>
    )
  }
}

export default HotList
