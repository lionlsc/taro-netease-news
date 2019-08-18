import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { ClButton,ClTabBar } from 'mp-colorui'
import './index.scss'
import NewsList from "../../components/news-list/news-list";
import LiveList from "../../components/hot-list/hot-list";
import VideoList from "../../components/video-list/video-list";
import UserPage from "../../components/user-page/user-page"
import { observer, inject } from '@tarojs/mobx'
@inject('Store')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText:"网易新闻"
  }
  constructor(props){
    super(props)
    this.state={
      active:0,
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(index){
    this.setState({
      active:index
    })
  }
  componentWillMount () { }
  componentDidMount () {
    let self=this       //应用一旦进入就去获取用户信息
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              self.props.Store.hiddenButton()
              self.props.Store.changeAvatar(res.userInfo.avatarUrl)
            }
          })
        }
      }
    })
  }
  componentWillUnmount () { }

  componentDidUpdate() {

  }

  render () {
    let renderPage;
    if(this.state.active==0){
      renderPage=<NewsList/>
    }else if(this.state.active==1){
      renderPage=<VideoList/>
    }else if(this.state.active==2){
      renderPage=<LiveList/>
    }else if(this.state.active==3){
      renderPage=<UserPage/>
    }
    return (
      <View className='index'>
        {renderPage}
        <ClTabBar
          bgColor='#ffffff'
          activeColor='red'
          active={this.state.active}
          fix={true}
          tabs={[{title:"新闻",icon:"newsfill",badge:false},
            {title:"视频",icon:"videofill",badge:false},
            {title:"搜索",icon:"search",badge:false},
            {title:"我的",icon:"peoplefill",badge:false}]}
          onClick={this.handleClick}
        >
        </ClTabBar>
      </View>
    )
  }
}

export default Index
