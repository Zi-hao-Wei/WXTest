var bmap = require('../../libs/bmap-wx.js');
Page({
  data:{
    latitude:'',
    longitude:'',
    desLatitude:'',
    desLongtitude:'',
    marker:[]
  },
  onLoad:function(){
      const vm=this
      wx.getLocation({
        success(res){
          console.log(res)
          vm.setData(
            { latitude:res.latitude,
              longitude:res.longitude}
            )          
        }
      })
  },
  mapView: function () {
    var vm = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        vm.setData(
          { desLatitude:res.latitude,
            desLongtitude:res.longitude,
            markers:[{
              id: 0,
              name:"no",
              iconPath: "../../images/marker_red.png",
              latitude: res.latitude,
              longitude: res.longitude,
              width: 30,
              height: 30
            }]
          }
          ) 
      },
    })
  }
}
)