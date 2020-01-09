const http = require('utils/http.js')

export const login = params => {
  return http.post('user/login', params);
};

export const fetchOrderDetail = params => {
  return http.post('product-order/get-order-detail', params);
};