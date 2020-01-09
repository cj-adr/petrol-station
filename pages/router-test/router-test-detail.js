// pages/router-test/router-test-detail.js

const router=require('../../router/index')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if(!options.data==undefined){
      console.log("======"+decodeURIComponent(options.data));
      var json=router.extract(options);
      console.log("========="+json.test);
      console.log("========="+json.bean.name);
      console.log("========="+json.bean.sex);
      console.log("========="+json.bean.age);
    }
    

    const eventChannel= this.getOpenerEventChannel();
    //接收数据
    eventChannel.on("sendData",function(data){
      console.log("=======接收数据========"+data);
    })


  },

  eventChannelBack:function(){
    const eventChannel= this.getOpenerEventChannel();

    //发送回去的数据
    eventChannel.emit("receviveData",{data:"test data back"});

    router.navigateBack({
      delta:1
    })

  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  back:function(){
    router.navigateBack({
      delta:2
    })
  },

  backOne:function(){
    

    router.navigateBack(
      {
        delta:1,
        backData:{
          car:{
            name:"宝马",
            carColor:"黑色"
          }
        }
      }
    )
  },

})