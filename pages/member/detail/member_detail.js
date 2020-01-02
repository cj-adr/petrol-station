// pages/member/detail/member_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMember: '../../../assets/images/member_bg.png',
    imgAvatar: '../../../assets/images/member_avatar.png',
    imgMemberVip: '../../../assets/images/member_vip.png',
    imgDiscount: '../../../assets/images/member_discount.png',
    imgScore: '../../../assets/images/member_score.png',
    imgSelect: '../../../assets/images/switch_on.png',
    imgUnSelect: '../../../assets/images/switch_off.png',
    current: '0',
    pwdLock: false,
    levelLock: false,
    cardItems: [{
        'icon': '../../../assets/images/member_qi.png',
        'name': '汽油卡',
        'value': '￥40.00'
      },
      {
        'icon': '../../../assets/images/member_chai.png',
        'name': '柴油卡',
        'value': '未领卡'
      },
      {
        'icon': '../../../assets/images/member_score_less.png',
        'name': '可用积分',
        'value': '400'
      },
      {
        'icon': '../../../assets/images/member_card.png',
        'name': '卡包',
        'value': '6张'
      }
    ]
  },

  onTabClick: function(e) {
    let index = e.currentTarget.dataset['index'];
    if (this.data.current != index) {
      this.setData({
        current: index
      });
    }
  },

  onPageChange: function(e) {
    let current = e.detail['current'];
    let source = e.detail['source'];

    if (source == 'touch' && current != this.data.current) {
      this.setData({
        current: current
      });
    }
  },

  onPwdLockClick: function(e) {
    this.setData({
      pwdLock: !this.data.pwdLock
    });
  },

  onLevelLockClick: function(e) {
    this.setData({
      levelLock: !this.data.levelLock
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