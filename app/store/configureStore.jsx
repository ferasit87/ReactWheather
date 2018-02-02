var redux = require('redux');
var stateDefault = {
  token: '',
  auth: false,
  userID : null ,
};

export var configure = () => {
  var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        token : '',
        auth: false,
        userID : null ,
      };
   case 'LOGIN':
        return {
          auth : true,
          token: action.body.token,
          userID : action.body.userID,
        };
    default:
      return state;
  }
};

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
