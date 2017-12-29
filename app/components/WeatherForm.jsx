const React = require('react');

var WeatherForm = React.createClass({
  submitmyform : function (e){
    if (this.refs.city.value != '') {
      this.props.submitForm(this.refs.city.value);
      this.refs.city.value = '';
    }
  },
  render: function () {
  return (
       <form onSubmit={this.submitmyform}>
         <input type="text" ref="city" placeholder="Enter city name"/>
           <button type="submit"> Get wheater</button>
       </form>
    );
  }
});

module.exports = WeatherForm;
