// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detailData:[
        {
          title:"基本信息",
          itemList:[
            {
              leftText:"订单金额",
              rightText:"¥200.00",
            },
            
            {
              leftText: "优惠金额",
              rightText: "¥200.00",
            },
            {
              leftText: "扣款金额",
              rightText: "¥200.00",
            },
            {
              leftText: "油品",
              rightText: "92#",
            },
            {
              leftText: "订单状态",
              rightText: "交易成功",
            },
            {
              leftText: "订单单号",
              rightText: "cj2192929190299002",
            },
            {
              leftText: "支付方式",
              rightText: "汽油卡支付",
            },
            {
              leftText: "支付时间",
              rightText: "2018-09-22 19:20:00",
            },
          ]
        },

        {
          title: "会员信息",
          itemList: [
            {
              leftText: "会员手机号",
              rightText: "192 3222 0122",
            },

            {
              leftText: "本次积分",
              rightText: "92",
            },
            {
              leftText: "汽油卡余额",
              rightText: "¥200.00",
            },
            {
              leftText: "优惠券",
              rightText: "5元代金券",
            },
          ]
        },

        {
          title: "退款信息",
          itemList: [
            {
              leftText: "退款金额",
              rightText: "¥200.00",
            },

            {
              leftText: "退款状态",
              rightText: "交易成功",
            },
            {
              leftText: "退款时间",
              rightText: "2017-08-25 18:45:09",
            },
          ]
        },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
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

  printTicket:function(){
    console.log("补打小票");
    wx.showToast({
      title: '补打小票',
      duration: 1000,
    })
  },

  refund :function(){
    console.log("退款");
    wx.showToast({
      title: '退款',
      duration: 1000,
    })
  },

  refresh:function(){
    console.log("刷新");
    wx.showToast({
      title: '刷新',
      duration: 1000,
    })
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

  }
})