const React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
  <div>
    <Nav/>
    <h1>main Component</h1>
    {props.children}
  </div>
  );
}
module.exports = Main;
