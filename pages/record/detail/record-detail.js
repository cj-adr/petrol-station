// pages/record/detail/record-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: ['收银总额', '会员卡消费总额', '充值总额', '油品消费统计'],
    bean: JSON.parse('{ "userName": "杨洋洋", "startDate": 1572250371000, "endDate": 1577677712280, "orderList": [{ "totalAmount": 0, "totalCount": 0, "name": "微信", "quantity": 0 }, { "totalAmount": 0, "totalCount": 0, "name": "支付宝", "quantity": 0 }, { "totalAmount": 1455.00, "totalCount": 3, "name": "现金", "quantity": 0 }], "proSkuCount": [{ "totalAmount": 0, "totalCount": 0, "name": "98#", "quantity": 0 }, { "totalAmount": 1555.00, "totalCount": 4, "name": "92#", "quantity": 246.8332 }, { "totalAmount": 0, "totalCount": 0, "name": "0#", "quantity": 0 }, { "totalAmount": 0, "totalCount": 0, "name": "95#", "quantity": 0 }], "mbrCardSpec": [{ "totalAmount": 100.00, "totalCount": 1, "name": "汽油卡", "quantity": 0 }, { "totalAmount": 0, "totalCount": 0, "name": "柴油卡", "quantity": 0 }], "storeCount": [{ "totalAmount": 0, "totalCount": 0, "name": "微信", "quantity": 0 }, { "totalAmount": 0, "totalCount": 0, "name": "支付宝", "quantity": 0 }, { "totalAmount": 100000.00, "totalCount": 2, "name": "现金", "quantity": 0 }], "orderAmount": 1555.00, "discountAmount": 0.00, "realPayAmount": 1455.00, "realMobilePayAmount": 0, "realCashPayAmount": 1455.00, "storeAmount": 100000.00, "giftAmount": 100.00, "refundAmount": 0.00 }')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

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

  }
})