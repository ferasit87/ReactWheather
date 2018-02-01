var React = require('react');

var AuthForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var logIn = this.refs.logIn.value;
    var passwd = this.refs.passwd.value;

    if (logIn.length > 0) {
      this.refs.logIn.value = '';
      this.refs.passwd.value = '';
      this.props.onLogIn(logIn, passwd);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="logIn" placeholder="Email or logIn"/>
            <input type="password" ref="passwd" placeholder="password"/>
            <button className="button expanded hollow">LogIn</button>
          </form>
        </div>
    );
  }
});

module.exports = AuthForm;
