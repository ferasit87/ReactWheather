var axios = require('axios');
var qs = require('qs');

const LOGIN_URL = 'http://localhost:8888/index.php?r=login';
const GET_ORDERS_URL = 'http://localhost:8888/index.php?r=order';
const GET_ORDER_URL = 'http://localhost:8888/index.php?r=order/view';
const ADD_ORDER_URL = 'http://localhost:8888/index.php?r=order/add';
const EDIT_ORDER_URL = 'http://localhost:8888/index.php?r=order/update';

module.exports = {
  logIn: function (username, password) {
    return axios.post(LOGIN_URL,qs.stringify({
        "LoginForm" : {
        username,
        password
      }}))
  .then(function (res) {
      if (res.data.Error) throw new Error(res.data.Error);
          return res.data;
    }, function (err) {
      throw new Error(err.message);
    });
  },
  addorder: function (token, name, sum) {
    return axios.post(ADD_ORDER_URL,qs.stringify( {
      token,
      name,
      sum
  }))
  .then(function (res) {
    if (res.data.Error) throw new Error(res.data.Error);
        return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getOreder : function (token, order_id) {
    return axios.post(GET_ORDER_URL, qs.stringify({
      token,
      order_id
  }))
  .then(function (res) {
    if (res.data.Error)throw new Error(res.data.Error);
        return JSON.parse(res.data);
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getOreders: function (token) {
    return axios.post(GET_ORDERS_URL,qs.stringify( {
    token
  }))
  .then(function (res) {
    if (res.data.Error)throw new Error(res.data.Error);
        return JSON.parse(res.data);
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  editOrder: function (token , order_id, name, sum ) {
    return axios.post(EDIT_ORDER_URL, qs.stringify({
    token,
    order_id,
    name,
    sum
  }))
  .then(function (res) {
    if (res.data.Error)throw new Error(res.data.Error);
        return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
