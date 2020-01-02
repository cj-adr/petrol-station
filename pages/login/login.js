// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPassword:true,
    ischecked:false,
    textLoginWay:'短信快捷登录',
    checked:false,
    imageurl:"../image/login_image/uncheck-box.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  changLoginway:function(){
    var showPassword=this.data.showPassword
    this.setData({
      showPassword:!showPassword,
      textLoginWay:showPassword?'账号密码登录':'短信快捷登录',
    })
  },

  rememberPassword:function(){
    var checked=this.data.checked
    var imageurl=this.data.imageurl
    console.log('=========测试========='+checked)
    this.setData({
      checked:!checked,
      imageurl:checked?"../image/login_image/uncheck-box.png"
      :"../image/login_image/checked-box.png",
    }),
    console.log('=========测试========='+checked)
  },

  getCode:function(){
    console.log('获取验证码')
  },
  
})

