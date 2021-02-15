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
      url: 'http://1.15.123.232/YFTXWeb/WXTest',
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
  }
}
 )
