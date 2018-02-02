var React = require('react');
var AuthForm = require('AuthForm');
var ErrorModal = require('ErrorModal');
var myrest = require('myrest');
var {connect} = require('react-redux')

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
      userID : undefined,
      token : undefined ,
      errorMessage: undefined,
      logIn: undefined,
      passwd: undefined,
      temp: undefined
    });

    myrest.logIn(logIn, passwd).then(function (result) {
      that.setState({
        userID: result.id,
        token: result.token,
        isAuth: true,
        isLoading: false
      });
      var body = {
        userID: result.id,
        token: result.token,
      }
      that.props.dispatch({
          type: 'LOGIN',
          body
        });

    }, function (e) {
      that.setState({
        isLoading: false,
        isAuth: false,
        errorMessage: e.message

      });
      that.props.dispatch({
          type: 'LOGOUT',
          token : '',
        });
    });
  },
  componentDidMount: function () {
    if (this.props.auth)
      this.setState({
        userID: this.props.userID,
        token: this.props.token,
        isAuth: true,
        isLoading: false
      });
  },
  handelLogout: function (e) {
    this.setState({
      isLoading: false,
      isAuth: false,
      errorMessage: e.message

    });
    this.props.dispatch({
        type: 'LOGOUT',
        token : '',
      });

  },
  render: function () {
    var {isLoading, temp, userID, token,isAuth } = this.state;
    var that = this;
    function renderForm () {
      if (isLoading) {
        return <h3 className="text-center">LogInnn...</h3>;
      } else if (isAuth) {
        return  <div><h3 className="text-center">Welcome user {userID}</h3><h6><a onClick={that.handelLogout} >LOGOUT</a>  </h6></div>;
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

module.exports = connect(
  (state) =>{
    return {
      auth : state.auth ,
      token : state.token,
      userID : state.userID
    };
  }
)(Authentication);
