import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {getSearch,searchUri} from "../../api/api";
import SearchItem from '../../components/search-item/searchitem'
class SearchList extends Component {
  config = {
    navigationBarTitleText:"搜索结果"
  }
  constructor(props) {
    super(props)
    this.state={
      searchlist:''
    }
  }

  componentWillMount() {}
  componentDidMount() {
    Taro.showLoading({
      title: '数据加载中'
    })
    Taro.request({
      url: searchUri,
      method:"POST",
      data: {
        requestUri:getSearch(this.$router.params.keyword,1)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        let tempArray=[];
        res.data.resultList.forEach((item,index)=>{
          if(item.pics.length!=0){
               tempArray.push(item)
          }
        })
        this.setState({searchlist:tempArray})
        Taro.hideLoading();
      })
  }

  render() {
    return (
      <View>
        {this.state.searchlist.map((item)=>{
          return <SearchItem imgsrc={item.pics[0]} title={item.title} key={item.title}/>
        })}
      </View>
    )
  }
}

export default SearchList
