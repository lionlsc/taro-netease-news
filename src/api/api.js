const apiBase='https://3g.163.com';
const requestBase="http://127.0.0.1:5000";
export const newsUri=requestBase+"/api/news" ;          /*新闻板块*/
export const amuseUri=requestBase+"/api/amuse" ;        /*娱乐版块*/
export const sportUri=requestBase+"/api/sport" ;        /*运动版块*/
export const financeUri=requestBase+"/api/finance" ;    /*金融版块*/
export const warUri=requestBase+"/api/war" ;            /*军事版块*/
export const techUri=requestBase+"/api/tech" ;          /*科技版块*/
export const mobileUri=requestBase+"/api/mobile" ;      /*手机版块*/
export const digitalUri=requestBase+"/api/digital" ;    /*数字版块*/
export const fasionUri=requestBase+"/api/fasion" ;      /*时尚版块*/
export const gameUri=requestBase+"/api/game" ;          /*游戏版块*/
export const eduUri=requestBase+"/api/edu" ;            /*教育版块*/
export const healthUri=requestBase+"/api/health" ;      /*健康版块*/
export const travelUri=requestBase+"/api/travel" ;      /*旅游版块*/
export const videoUri=requestBase+"/api/video" ;        /*视频版块*/
export const recommendUri=requestBase+"/api/hotwords";  /*搜索热词*/
export const searchUri=requestBase+"/api/search";
export const recommendVideoUri=requestBase+"/api/video";
export const getNewsUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BBM54PGAwangning/${startIndex}-${newsCount}.html`
}
export const getAmuseUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA10TA81wangning/${startIndex}-${newsCount}.html`
}
export const getSportUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA8E6OEOwangning/${startIndex}-${newsCount}.html`
}
export const getFinanceUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA8EE5GMwangning/${startIndex}-${newsCount}.html`
}
export const getWarUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BAI67OGGwangning/${startIndex}-${newsCount}.html`
}
export const getTechUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA8D4A3Rwangning/${startIndex}-${newsCount}.html`
}
export const getMobileUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BAI6I0O5wangning/${startIndex}-${newsCount}.html`
}
export const getDigitalUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BAI6JOD9wangning/${startIndex}-${newsCount}.html`
}
export const getFasionUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA8F6ICNwangning/${startIndex}-${newsCount}.html`
}
export const getGameUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BAI6RHDKwangning/${startIndex}-${newsCount}.html`
}
export const getEduUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BA8FF5PRwangning/${startIndex}-${newsCount}.html`
}
export const getHealthUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BDC4QSV3wangning/${startIndex}-${newsCount}.html`
}
export const getTravelUri=function(startIndex,newsCount) {
  return apiBase+`/touch/reconstruct/article/list/BEO4GINLwangning/${startIndex}-${newsCount}.html`
}
export const getRecommendVideoUri=function() {
  return `http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab=Video_Recom&size=10&offset=0&fn=1&passport=&devId=%2BUdKOimhleNgL9xSY5hC9g%3D%3D&lat=&lon=&version=32.1&net=wifi&ts=1563430254&sign=h3yAiTnASvKAIKuK5K%2BlSQu2kL%2F11JoQ21%2FESHeY15V48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=news_lf_cpa_2&mac=v3Sm8roAECwD8p7gOYYZhGA6W63jXMiLLBRm8sTXwOw%3D&open=&openpath=`
}
export const getSearch=function(keyword,currentPage) {
  keyword=encodeURI(keyword);
  return `https://api.k.sohu.com/api/search/v5/search.go?rt=json&pageNo=${currentPage}&words=${keyword}&keyword=${keyword}&p1=NjI5ODQyMjA2ODE3ODc1OTc0OQ%3D%3D&pageSize=20&type=0&pid=&token=&gid=02ffff110611115f12bffc60356a11d31a84a84b99b0d8&apiVersion=42&sid=10&u=1&bid=&keyfrom=hot&autoCorrection=&refertype=6&versionName=6.2.4&os=android&picScale=16&h=3406&_=1564028284384`
}
export const info={
  newsInfo:{
    responseEncode:"BBM54PGAwangning",
  },
  amuseInfo:{
    responseEncode:"BA10TA81wangning",
  },
  sportInfo:{
    responseEncode:"BA8E6OEOwangning",
  },
  financeInfo:{
    responseEncode:"BA8EE5GMwangning",
  },
  warInfo:{
    responseEncode:"BAI67OGGwangning",
  },
  techInfo:{
    responseEncode:"BA8D4A3Rwangning",
  },
  mobileInfo:{
    responseEncode:"BAI6I0O5wangning",
  },
  digitalInfo:{
    responseEncode:"BAI6JOD9wangning",
  },
  fasionInfo:{
    responseEncode:"BA8F6ICNwangning",
  },
  gameInfo:{
    responseEncode:"BAI6RHDKwangning",
  },
  eduInfo:{
    responseEncode:"BA8FF5PRwangning",
  },
  healthInfo:{
    responseEncode:"BDC4QSV3wangning",
  },
  travelInfo:{
    responseEncode:"BEO4GINLwangning",
  },
}
