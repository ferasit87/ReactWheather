var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Authentication = require('Authentication');
var Orders = require('Orders');
var AddOrder = require('AddOrder');
var EditOrder = require('EditOrder');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="addOrder" component={AddOrder}/>
      <Route path="orders" component={Orders}/>
      <Route path="editOrder" component={EditOrder}/>
      <IndexRoute component={Authentication}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
