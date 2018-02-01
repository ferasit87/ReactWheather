var React = require('react');
var AuthForm = require('AuthForm');
var ErrorModal = require('ErrorModal');
var myrest = require('myrest');


var Authentication = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleLogIn: function (logIn, passwd) {
    var that = this;

    this.setState({
      isLoading: true,
      isAuth : false,
      errorMessage: undefined,
      logIn: undefined,
      passwd: undefined,
      temp: undefined
    });

    myrest.logIn(logIn, passwd).then(function (result) {
      that.setState({
        userID: result.userID,
        token: result.token,
        isAuth: true,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        isAuth: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var logIn = this.props.logIn ;
    var passwd = this.props.passwd;


    if (logIn && logIn.length > 0 && passwd && passwd.length > 0  ) {
      this.logIn(logIn, passwd);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var logIn = newProps.logIn.query.logIn;
    var passwd = newProps.passwd.query.passwd;

    if (logIn && logIn.length > 0 && passwd && passwd.length > 0  ) {
      this.logIn(logIn, passwd);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, logIn, isAuth, passwd, errorMessage} = this.state;
    var that = this;
    function renderForm () {
      if (isLoading) {
        return <h3 className="text-center">LogInnn...</h3>;
      } else if (isAuth) {
        return  <h3 className="text-center">Welcome user {this.state.logIn}</h3>;
      }else {
        return <AuthForm onLogIn={that.handleLogIn}/>
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
        <h1 className="text-center page-title">Authentication Form</h1>
        {renderForm()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Authentication;
