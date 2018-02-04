var React = require('react');
var AddOrderForm = require('AddOrderForm');
var ErrorModal = require('ErrorModal');
var myrest = require('myrest');
var {connect} = require('react-redux')
var {Link, IndexLink} = require('react-router');


var AddOrder = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      success : false
    }
  },
  addOrder: function (name, sum) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      name: undefined,
      sum: undefined,
      temp: undefined
    });

    myrest.addorder(this.props.token, name, sum).then(function (result) {
      that.setState({
        result : result ,
        success : true ,
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
    var {isLoading, name, sum, errorMessage} = this.state;
    var that = this;
    function renderForm () {
      if (that.props.auth){
        if (isLoading) {
          return <h3 className="text-center">Addingggg...</h3>;
        } else{
          return <AddOrderForm addOrder={that.addOrder} success={that.state.success}/>
        }
      }else {
        return               <Link to="/">You should LogIn First</Link>
      }

    }


    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Adding Order Form</h1>
        {renderForm()}
        {renderError()}
      </div>
    )
  }
});

module.exports =  connect(
  (state) =>{
    return {
      auth : state.auth ,
      token : state.token,
      userID : state.userID
    };
  }
)(AddOrder);
