var axios = require('axios');

const LOGIN_URL = 'http://localhost:3000/login/';
const GET_ORDERS_URL = 'http://localhost:3000/orders/';
const GET_ORDER_URL = 'http://localhost:3000/order/';
const ADD_ORDER_URL = 'http://localhost:3000/order/add';
const EDIT_ORDER_URL = 'http://localhost:3000/order/edit';

module.exports = {
  logIn: function (logIn, passwd) {
    return axios.post(LOGIN_URL, {
    logIn,
    passwd
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  addorder: function (token, name, sum) {
    return axios.post(ADD_ORDER_URL, {
      token,
      name,
      sum
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getOreder : function (token, orderID) {
    return axios.post(GET_ORDER_URL, {
      token,
      orderID
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getOreders: function (token) {
    return axios.post(GET_ORDERS_URL, {
    token
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  editOrder: function (token , orderID, name, sum ) {
    return axios.post(EDIT_ORDER_URL, {
    token,
    orderID,
    name,
    sum
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
