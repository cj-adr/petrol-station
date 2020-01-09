// component/popup/popup.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    canClickOutCancel: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
        console.log("数值发生了变化"+newVal+","+oldVal)
      }
    },

    offsetX:{
      type:Number,
      value:140
    },

    offsetY:{
      type:Number,
      value:40
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    popupList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup(list) {
      if (list == null) {
        return
      }
      this.setData({
        popupList: list,
        visible: true
      })
    },

    hidePopup() {
      this.setData({
        visible: false
      })
    },

    _onItemClick: function(e) {
      var item = e.currentTarget.dataset['item'];
      console.log("data = " + item.text)
      this.setData({
        visible: false
      })

      this.triggerEvent("onItemClick",item)
    },

    _outClick: function() {
      var can = this.data.canClickOutCancel
      if (this.data.canClickOutCancel){
          this.setData({
            visible:false
          })
      }
    },


  
  },

})