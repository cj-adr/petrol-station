// pages/member/list/member_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSearch: '../../../assets/images/common_search.png',
    imgClear: '../../../assets/images/common_clear.png',
    imgArrow: '../../../assets/images/common_arrow_right.png',
    imgAvatar: '../../../assets/images/common_avatar.png',
    memberDesc: '共100条会员数据',
    searchValue: '',
    items: [{
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      },
      {
        'avatar': 'https://www.baidu.com',
        'name': 'test',
        'phone': '130 0000 1234'
      }
    ],
  },

  /**
   * item点击事件
   */
  onItemClick: function(e) {
    let item = e.currentTarget.dataset['item'];
    console.log(item.name);
    wx.navigateTo({
      url: '../detail/member_detail?name="test"',
    })
  },

  onInputChange: function(e) {
    var v = e.detail.value;
    console.log(v);
    this.setData({
      searchValue: v
    });
  },

  onClearClick:function(e){
    this.setData({
      searchValue: ''
    });
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