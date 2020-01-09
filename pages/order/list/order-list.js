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

    visible: true,
    salesmanText: '加油员',
    payTypeText: "支付方式",
    salesmanList: [{
        id: 1,
        text: '所有'
      },
      {
        id: 2,
        text: '加油员A'
      },
      {
        id: 3,
        text: '加油员B'
      },
      {
        id: 4,
        text: '加油员C'
      },
    ],
    payTypeList: [{
        id: 1,
        text: "所有"
      },
      {
        id: 2,
        text: "支付宝支付"
      },
      {
        id: 3,
        text: "微信支付"
      },
      {
        id: 4,
        text: "汽油卡支付"
      },
      {
        id: 5,
        text: "柴油卡支付"
      },
      {
        id: 6,
        text: "刷卡支付"
      },
      {
        id: 7,
        text: "现金支付"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '订单列表'
    })
  },

  onReady: function() {
    this.salesPopup = this.selectComponent("#salesPopup");
    this.payTypePopup = this.selectComponent("#payTypePopup")
  },

  selectSalesman: function() {
    var salesmanList = this.data.salesmanList
    this.salesPopup.showPopup(salesmanList)
  },

  _onSalesmanItemClick: function(e) {
    var text = e.detail.text
    this.setData({
      salesmanText: text
    })
  },

  selectPayMethod: function() {
    var list = this.data.payTypeList
    this.payTypePopup.showPopup(list)
  },

  _onPayTypeItemClick: function(e) {
    var text = e.detail.text
    this.setData({
      payTypeText: text
    })
  },

  selectDate: function() {
    console.log("日期筛选");
  },

  clickItem: function(e) {
    var id = e.currentTarget.dataset.id
    console.log("item_id =" + id);
    wx.navigateTo({
      url: '../detail/order-detail',
    })
  },

  upper: function() {
    
  },

  lower: function() {
    
  },

  scroll: function() {
    
  },


})