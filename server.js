const express = require('express');

//create your app
app = express();
const PORT = process.env.PORT || 3000 ;
/*
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  }else {
    res.redirect('http://'+ req.hostname + req.url);
  }
});
*/
app.use(express.static('public'));

app.post('/login', (req, res) => {
  return res.send({
    id: 100,
    token: '1dasdas21df3s2a1fdsa3f2s1'
    });
});
app.post('/order', (req, res) => {
  return res.send({
    name: 'fdsfds',
    sum: 123
    });
});
app.post('/orders', (req, res) => {
  var obj = {
    results : [ {
        name: 'fdsfdsadads',
        sum: 123
      }
      ,{
          name: 'fdsfdsadads',
          sum: 123
        }
     ]
  }
  return res.send(obj);

});
app.post('/order/add', (req, res) => {
  return res.send({
    name: 'fdsfds',
    sum: 123
    });
});

app.post('/order/edit', (req, res) => {
  return res.send({
    name: 'fdsfds',
    sum: 123
    });
});
app.listen(PORT , () => {
    console.log("I am running on port "+PORT);
})
