var React = require('react');
var AddOrderForm = require('AddOrderForm');
var ErrorModal = require('ErrorModal');
var myrest = require('myrest');


var AddOrder = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
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

    myrest.AddOrder(name, sum).then(function (result) {
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
    var {isLoading, name, sum, errorMessage} = this.state;
    var that = this;
    function renderForm () {
      if (isLoading) {
        return <h3 className="text-center">Addingggg...</h3>;
      } else{
        return <AddOrderForm addOrder={that.addOrder}/>
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

module.exports = AddOrder;
