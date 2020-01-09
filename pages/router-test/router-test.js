// pages/router-test/router-test.js

const router=require('../../router/index')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    backData:undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("========"+decodeURIComponent(options.data));

    var json= router.extract(options)

    console.log(json.isBoolean)
    console.log(json.isNumber)
    console.log(json.isString)
    console.log(typeof json.isBoolean)

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
    console.log("===onShow======")
    
    if(this.data.backData !=undefined){
      var date= decodeURIComponent(this.data.backData);
      console.log("========="+date)
    }
    
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


  switchBar:function(){
    router.navigationTo({
      name:"member_list",
    })
  },

  navigationTo:function(){
    router.navigationTo({
      name:"router_test_detail",
      data:{
        test:true,
        bean:{
          name:"张三",
          sex:'男',
          age:16,
        }
      }
    })
  },

  reLaunch:function(){
    //一般用于token失效跳转到登录页面，关闭所有页面，打开到应用内的某个页面
    router.reLaunch({
      name:"login",
      data:{
        token:"3c66bf4c-1bf2-494f-9e58-8102db5f51b5/666/?"
      }
    })
  },

  eventChannel:function(){
    router.eventChannel("../../pages/router-test/router-test-detail");
  }
})