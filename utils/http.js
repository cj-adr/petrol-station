const ContentType = {
  RequestBody: 'application/json',
  Form: 'application/x-www-form-urlencoded',
};

const BaseURL = "http://k8s.gas.chuangjiangx.com/ter/mch-terminal/"

/**
 * 供外部post请求调用  
 */
const post = (url, params, contentType = ContentType.RequestBody, toast = true) => {
  return request(url, "POST", params, contentType, toast)
}

/**
 * 供外部get请求调用
 */
const get = (url, params, toast = true) => {
  return request(url, "GET", params, toast)
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @contentType 传参方式
 */

const request = (url, method, params, contentType = ContentType.RequestBody, toast = true) => {
  return new Promise((resolve, reject) => {
    requestWithoutFetchToken(url, method, params, contentType)
      .then(succ => resolve(succ))
      .catch(err => {
        if (err.errCode === '000006') {
          fetchTokenAndRequest(url, method, params, contentType)
            .then(succ => resolve(succ))
            .catch(e => {
              //todo: 登录失败则跳转
              //toast
              if (toast) {
                wx.showToast({
                  title: err.errMsg,
                  icon: 'none',
                })
              }
              reject(err)
            })
        } else {
          //toast
          if (toast) {
            wx.showToast({
              title: err.errMsg,
              icon: 'none',
            })
          }
          reject(err)
        }
      })
  })
}


const requestWithoutFetchToken = (url, method, params, contentType = ContentType.RequestBody) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BaseURL + url,
      data: params,
      method: method,
      header: {
        'content-type': contentType,
        'b-c-t': wx.getStorageSync("token")
      },
      success: function(succ) {
        if (succ.statusCode === 200) {
          if (succ.data.success === true) {
            resolve(succ.data.data)
          } else {
            reject({
              errCode: succ.data.errCode,
              errMsg: succ.data.errMsg
            })
          }
        } else {
          reject({
            errCode: "-1",
            errMsg: succ.errMsg
          })
        }
      },
      fail: function(err) {
        reject({
          errCode: "-1",
          errMsg: err.errMsg
        })
      }
    })
  })
}


const fetchTokenAndRequest = async(url, method, params, contentType = ContentType.RequestBody) => {
  let loginParms = {
    mobile: "15158081188",
    pwd: "111111",
    loginType: "MOBILE_PWD"
  }
  let loginResponse = await requestWithoutFetchToken(BaseURL + "user/login", "POST", loginParms)
  wx.setStorageSync("token", loginResponse.token)
  return await requestWithoutFetchToken(url, method, params, contentType)
}


// 1.通过module.exports方式提供给外部调用
module.exports = {
  ContentType: ContentType,
  post: post,
  get: get,
}