// pages/login/login.js
const services = require('../../services.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPassword: true,
    ischecked: false,
    textLoginWay: '短信快捷登录',
    checked: false,
    imageurl: "../../assets/images/uncheck-box.png",
  },



  login: function() {
    let parms = {
      orderNumber: "85144799012191604736",
      refresh: false,
    }
    services.fetchOrderDetail(parms).then(succ => {
      console.log(succ)
    }).catch(e => {
      console.log(e)
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  changLoginway: function() {
    var showPassword = this.data.showPassword
    this.setData({
      showPassword: !showPassword,
      textLoginWay: showPassword ? '账号密码登录' : '短信快捷登录',
    })
  },

  rememberPassword: function() {
    var checked = this.data.checked
    var imageurl = this.data.imageurl
    console.log('=========测试=========' + checked)
    this.setData({
        checked: !checked,
        imageurl: checked ? "../../assets/images/uncheck-box.png" : "../../assets/images/checked-box.png",
      }),
      console.log('=========测试=========' + checked)
  },

  getCode: function() {
    console.log('获取验证码')
  },


})