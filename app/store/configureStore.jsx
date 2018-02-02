var redux = require('redux');
var stateDefault = {
  token: '',
  auth: false
};

export var configure = () => {
  var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH':
      return {
        token : state.token,
        auth: action.auth
      };
   case 'CHANGE_TOKEN':
        return {
          auth : state.auth,
          token: action.token
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
