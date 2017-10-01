//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor:'rgba(255, 255,555, .5)',
    indicatorActiveColor:"white",
  },
  onLoad:function(){
    
  }
})