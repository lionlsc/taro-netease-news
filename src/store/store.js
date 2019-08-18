import { observable, action } from 'mobx'
import Taro from '@tarojs/taro'
import {info,newsUri,getNewsUri,amuseUri,getAmuseUri,sportUri,getSportUri,financeUri,getFinanceUri,
  warUri,getWarUri,techUri,getTechUri,mobileUri,getMobileUri,digitalUri,getDigitalUri,recommendVideoUri,getRecommendVideoUri,recommendUri} from "../api/api"
class Store {
  @observable isShow = false;
  @observable newsData=[];
  @observable videoData=[];
  @observable liveData=[];
  @observable hotwords=[];
  @observable startIndex=-10;
  @observable newsCount=10;
  @observable show=true;
  @observable userAvatar='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67';
  @action.bound changeAvatar(avatarUri){
    this.userAvatar=avatarUri
  }
  @action.bound hiddenButton(){
    this.show=false;
  }
  @action.bound showButton(){
    this.show=true;
  }
  @action.bound showSpinner(){
    this.isShow = true;
  }
  @action.bound hideSpinner(){
    this.isShow = false;
  }
  @action.bound getNewsData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: newsUri,
      method:"POST",
      data: {
        requestUri:getNewsUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.newsInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getAmuseData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: amuseUri,
      method:"POST",
      data: {
        requestUri:getAmuseUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.amuseInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getSportData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: sportUri,
      method:"POST",
      data: {
        requestUri:getSportUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.sportInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getFinanceData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: financeUri,
      method:"POST",
      data: {
        requestUri:getFinanceUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.financeInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getWarData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: warUri,
      method:"POST",
      data: {
        requestUri:getWarUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.warInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getTechData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: techUri,
      method:"POST",
      data: {
        requestUri:getTechUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.techInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getMobileData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: mobileUri,
      method:"POST",
      data: {
        requestUri:getMobileUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.mobileInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getDigitalData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    this.startIndex+=10; //每次获取10条数据
    Taro.request({
      url: digitalUri,
      method:"POST",
      data: {
        requestUri:getDigitalUri(this.startIndex,this.newsCount)
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1))
        this.newsData=data[info.digitalInfo.responseEncode]
        Taro.hideLoading();
      })
  }
  @action.bound getVideoData(){
    Taro.showLoading({
      title: '数据加载中'
    })
    Taro.request({
      url: recommendVideoUri,
      method:"POST",
      data: {
        requestUri:getRecommendVideoUri()
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
        this.videoData=res.data["视频"]
        Taro.hideLoading();
      })
  }
  @action.bound clearNewsData(){
    this.startIndex=-10;
    this.newsData.length=0;
  }
  @action.bound clearVideoData(){
    this.videoData.length=0;
  }
  @action.bound getHotwords(){
    Taro.showLoading({
      title: '数据加载中'
    })
    Taro.request({
      url: recommendUri,
      method:"GET",
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res)=>{
       this.hotwords = res.data.hotWordList;
        Taro.hideLoading();
      })
  }
}
export default new Store()
