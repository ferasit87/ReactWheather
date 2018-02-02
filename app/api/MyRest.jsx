var axios = require('axios');

const LOGIN_URL = 'http://localhost:3000/login/';
const GET_ORDER_URL = 'http://localhost:3000/order/';

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
  getOreder: function (id) {
    return axios.post(GET_ORDER_URL, {
    id
  })
  .then(function (res) {
      return res.data;
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
