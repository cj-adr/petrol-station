// components/nav-bar/navBar.js
const App = getApp();
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    pageName: String, //中间的title
    showNav: { //判断是否显示左上角的按钮    
      type: Boolean,
      value: true
    },
    textColor: {
      type: String,
      value: '#333'
    },
    bgColor: {
      type: String,
      value: '#fff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showHome: true, //判断是否显示左上角的按钮
    imgBack: App.getImagePath('common_back_wihte.png')
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 回退
    navBack: function() {
      wx.navigateBack()
    },
  }
})