const routers=require('./routers');
function navigationTo({name ,data }){
  const dataStr=encodeURIComponent(JSON.stringify(data));
  const route= routers[name];

  if(route.type ==='tab'){
    wx.switchTab({
      url: `${route.path}`,
    })
    return;
  }

  wx.navigateTo({
    url: `${route.path}?data=${dataStr}`,
    success: function(){
      console.log("跳转成功")
      wx.showToast({
        title: '跳转成功',
        duration:1000,
        image:''
      })
    },
    fail:function(){
      console.log("跳转失败")
    },
    complete:function(){
      console.log("跳转完成")
    }
  });
}

function extract(options){ 
  return JSON.parse(decodeURIComponent(options.data));
}


function navigateBack({delta,backData}){ 
  var pages=getCurrentPages();
  if(pages.length-delta-1>0){
    var prePage=pages[pages.length-delta-1];
    if(backData !=undefined){
      const dataStr=encodeURIComponent(JSON.stringify(backData));
      prePage.setData({
        backData:dataStr
      });
    }
  }

  wx.navigateBack({
    delta:delta,
  })
}





//跳转到任意页面
function reLaunch({name ,data }){

  const dataStr=encodeURIComponent(JSON.stringify(data));
  const route= routers[name];
  wx.reLaunch({
    url: `${route.path}?data=${dataStr}`,
  });
}

function eventChannel(url){

  wx.navigateTo({
    url: `${url}`,
    events:{
      receviveData:function(data){
        console.log("=====接收返回数据======="+data.data);
      },
    },
    success:function(res){
      res.eventChannel.emit("sendData","test data from send")
    },
  })
}




module.exports={
  routers,
  navigationTo,
  navigateBack,
  reLaunch,
  extract,
  eventChannel,
}