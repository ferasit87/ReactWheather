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
    name : '',
    sum : 0 ,
    orderID : 0 ,
    isLoading : true
  };

  },
    componentDidMount: function () {
      var that = this ;
      myrest.getOreder(this.props.token,this.props.location.query.id).then(function (result) {
          that.setState({
            name : result.name ,
            sum : result.sum ,
            orderID : result.orderID,
            isLoading: false
          });
      }, function (e) {
            that.setState({
          isLoading: false,
          errorMessage: e.message
      });
      });
    },
  editOrder: function (name, sum) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      name: undefined,
      sum: undefined
     });

    myrest.editOrder( this.props.token,this.props.location.query.id, name, sum).then(function (result) {
      that.setState({
        name,
        sum,
        result : result ,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        name,
        sum,
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {

    var {isLoading, name, sum, errorMessage} = this.state;
    var that = this;
    function renderForm () {
      if (isLoading) {
        return <h3 className="text-center">LoadING...</h3>;
      } else if (!errorMessage){
        return <EditOrderForm editOrder={that.editOrder} name={name} sum={sum}/>
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
        <h1 className="text-center page-title">Edit Order Form</h1>
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
