// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    info:"NULL",
    userid:"",
    nickname:""
  },
  userIDInput:function(e){
    let userid=this.validateNumber(e.detail.value);
    this.setData({
      userid
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  nicknameInput:function(e){
    this.setData({
      nickname:e.detail.value
    })
  },
  bindtest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb//WXTest',
      data:{
        userid:this.data.userid,
        nickname:this.data.nickname
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
        wx.showToast({ // 显示Toast

          title: 'Success',
    
          icon: 'success',
    
          duration: 1500
    
        });
        // var obj=JSON.stringify(res.data);
        this.setData({
          info: String(res.data.userID) + " " + res.data.nickName + " added!"
        });
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
loginTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/login',
      data:{
        UserID:1,
        UserNickname:"ZJZ"
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },

  bookTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/book',
      data:{
        UserID:1,
        Time:"12:10",
        DepartureLon:113.332264,
        DepartureLat:23.156206,
        DestinationLon:113.332264,
        DestinationLat:23.156206,
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  orderTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/order',
      data:{
        UserID:1,
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  chooseTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/choose',
      data:{
        RoomID:14,
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  chatroomTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/chatroom',
      data:{
        RoomID:14,
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
  messageTest:function()
  {
    wx.request({
      url: 'http://localhost:8080/YFTXWeb/message',
      data:{
        RoomID:14,
        Time:"1",
        Content:"ABC",
        UserNickname:"XWW",
        UserID:2
      },
      method:'GET',
      header:{
        'content-type': 'application/json'
      },
      success: (res) =>{
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  },
}
 )
