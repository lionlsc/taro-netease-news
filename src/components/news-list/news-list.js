import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ClButton } from 'mp-colorui'
import { observer, inject } from '@tarojs/mobx';
import NewsItem from "../news-item/news-item";
@inject('Store')
@observer
class NewsList extends Component {
  constructor(props) {
    super(props)
    this.nextPage=this.nextPage.bind(this)
    this.prevPage=this.prevPage.bind(this)
  }
  nextPage(){
    this.props.Store.getNewsData();
  }
  prevPage(){
    if(this.props.Store.startIndex==0){
      Taro.showToast({
        title: '已经是第一页',
        icon: 'none',
        duration: 2000
      })
    }else{
      this.props.Store.startIndex-=20;
      this.props.Store.getNewsData();
    }
  }
  componentWillUnmount() {}
  componentDidMount() {
       this.props.Store.getNewsData();
  }

  componentWillUnmount() {
    this.props.Store.clearNewsData();
  }

  render() {
    let array=Array.from(this.props.Store.newsData) //必须添加这一句，将mobx数据转为正常数据！！！
    return (
      <View className={'news-list'}>
        {array.map((item,index)=>{
          return  <NewsItem
            title={item.title}
            source={item.source}
            ptime={item.ptime}
            imgsrc={item.imgsrc}
            key={item.docid}
            url={item.url}
          />
        })}
       <View className={"news-button"}>
         <ClButton size='normal' shadow={true} bgColor={"red"} type='primary' text={"上一页"} onClick={this.prevPage}></ClButton>
         <ClButton size='normal' shadow={true} bgColor={"red"} type='primary' text={"下一页"} onClick={this.nextPage}></ClButton>
       </View>
      </View>
    )
  }
}

export default NewsList
