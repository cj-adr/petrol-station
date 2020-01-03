// pages/member/detail/member_detail.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMember: app.getImagePath('member_bg.png'),
    imgAvatar: app.getImagePath('member_avatar.png'),
    imgMemberVip: app.getImagePath('member_vip.png'),
    imgDiscount: app.getImagePath('member_discount.png'),
    imgScore: app.getImagePath('member_score.png'),
    imgSelect: app.getImagePath('switch_on.png'),
    imgUnSelect: app.getImagePath('switch_off.png'),
    imgNick: app.getImagePath('member_nick.png'),
    imgSex: app.getImagePath('member_sex.png'),
    imgBirthday: app.getImagePath('member_birthday.png'),
    imgLock: app.getImagePath('member_lock.png'),
    imgLockLevel: app.getImagePath('member_lock_level.png'),
    imgAsk: app.getImagePath('member_ask.png'),
    current: '0',
    pwdLock: false,
    levelLock: false,
    cardItems: [{
        'icon': app.getImagePath('member_qi.png'),
        'name': '汽油卡',
        'value': '￥40.00'
      },
      {
        'icon': app.getImagePath('member_chai.png'),
        'name': '柴油卡',
        'value': '未领卡'
      },
      {
        'icon': app.getImagePath('member_score_less.png'),
        'name': '可用积分',
        'value': '400'
      },
      {
        'icon': app.getImagePath('member_card.png'),
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