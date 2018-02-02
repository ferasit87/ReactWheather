var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Authentication = require('Authentication');
var Orders = require('Orders');
var AddOrder = require('AddOrder');
var EditOrder = require('EditOrder');

var {Provider} = require('react-redux');

var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="addOrder" component={AddOrder}/>
      <Route path="orders" component={Orders}/>
      <Route path="editOrder" component={EditOrder}/>
      <IndexRoute component={Authentication}/>
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
