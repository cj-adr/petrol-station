// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    listData: [{
        id: "1001",
        icon: "../../../assets/images/order_card.png",
        title: "汽油卡支付",
        date: "2019.09.09 09:00:00",
        amount: "¥100.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },
      {
        id: "1002",
        icon: "../../../assets/images/order_alipay.png",
        title: "支付宝支付",
        date: "2019.09.09 09:00:10",
        amount: "¥200.00",
        status: "交易成功",
        statusColor: "#808080"
      },
      {
        id: "1003",
        icon: "../../../assets/images/order_wxpay.png",
        title: "微信支付",
        date: "2019.09.09 09:00:20",
        amount: "¥300.00",
        status: "退款成功",
        statusColor: "#FF5100"
      },
      {
        id: "1004",
        icon: "../../../assets/images/order_card.png",
        title: "汽油卡支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },

      {
        id: "1005",
        icon: "../../../assets/images/order_card.png",
        title: "汽油卡支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "交易成功",
        statusColor: "#808080"
      },

      {
        id: "1006",
        icon: "../../../assets/images/order_wxpay.png",
        title: "微信支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },

      {
        id: "1007",
        icon: "../../../assets/images/order_card.png",
        title: "汽油卡支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },

      {
        id: "1008",
        icon: "../../../assets/images/order_alipay.png",
        title: "支付宝支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "交易成功",
        statusColor: "#808080"
      },

      {
        id: "1009",
        icon: "../../../assets/images/order_card.png",
        title: "汽油卡支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },

      {
        id: "10010",
        icon: "../../../assets/images/order_alipay.png",
        title: "支付宝支付",
        date: "2019.09.09 09:00:30",
        amount: "¥400.00",
        status: "部分退款",
        statusColor: "#FF5100"
      },

    ],

    visible: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '订单列表'
    })
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

  selectSalesman: function() {
    console.log("选择加油员");
  },

  selectPayMethod: function() {
    console.log("选择支付方式");
  },

  selectDate: function() {
    console.log("日期筛选");
  },

  clickItem: function(e) {
    var id = e.currentTarget.dataset.id
    console.log("item_id =" + id);
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  upper: function() {
    console.log("upper");
  },

  lower: function() {
    console.log("lower")
  },

  scroll: function() {
    console.log("scroll");
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
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})