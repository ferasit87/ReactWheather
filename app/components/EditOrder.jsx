var React = require('react');
var AddOrderForm = require('AddOrderForm');
var EditOrderForm = require('EditOrderForm');
var ErrorModal = require('ErrorModal');
var myrest = require('myrest');
var ReactDOM = require('react-dom');
var {Route, Router, withRouter, IndexRoute, hashHistory} = require('react-router');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


var EditOrder = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  editOrder: function (name, sum) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      name: undefined,
      sum: undefined,
      temp: undefined
    });

    myrest.EditOrder(name, sum).then(function (result) {
      that.setState({
        result : result ,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {
    myrest.getOreder(this.props.params).then(function (result) {
      that.setState({
        name : result.name ,
        sum : result.sum ,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
    var {isLoading, name, sum, errorMessage} = this.state;
    var that = this;
    function renderForm () {
      if (isLoading) {
        return <h3 className="text-center">Addingggg...</h3>;
      } else if (!errorMessage){
        return <EditOrderForm editOrder={that.editOrder}/>
      }
      else{
        return <h3 className="text-center">Order not found</h3>;
      }
    }


    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    if (this.props.auth){
    return (

      <div>
        <h1 className="text-center page-title">Adding Order Form</h1>
        {renderForm()}
        {renderError()}
      </div>
    );
  }else{
    return               <Link to="/">You should LogIn First</Link>
  }
  }
});

module.exports = connect(
  (state) =>{
    return {
      auth : state.auth ,
      token : state.token,
      userID : state.userID
    };
  }
)(EditOrder);
