var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');
var myrest = require('myrest');

var Orders =  React.createClass({
  getInitialState: function () {
    return  {
      orders : [],
      isLoading: false
    } ;
  },
componentDidMount: function () {

  var that = this ;

  myrest.getOreders(this.props.token).then(function (result) {

      that.setState({
        orders: result,
        isLoading: false
      });

    }, function (e) {

      that.setState({
        isLoading: false,
        errorMessage: e.message
      });

    }) ;

  },
  renderTable : function (orders) {
    if (orders.results){
      var rows= orders.results;
      var result = [] ;
       for (var i = 0; i < rows.length; i++) {
          result.push(<tr><td>{rows[i].name}</td><td>{rows[i].sum}</td><td className="center">  <Link   to={{ pathname: '/editOrder/', query: { id: i } }}  activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>edit </Link> </td></tr>);
      }
       return (result);
     }
     return null;
   },
  render: function () {
    var that = this;
    var {isLoading, orders, errorMessage} = this.state;

    if (this.props.auth){

        if (!errorMessage) return (
            <div>
              <h1> All orders </h1>
          <div id="table" className="table-editable">
         <span className="table-add glyphicon glyphicon-plus"></span>
         <table className="hover">
           <tbody>
           <tr>
             <th>Name</th>
             <th>Value</th>
            <th>Action</th>
           </tr>
              { that.renderTable(that.state.orders) }
         </tbody>
         </table>
       </div>
      </div>
    );else {
      return (<h2>API ERROR {errorMessage}</h2>)
    }
    }
    return               <Link to="/">You should LogIn First</Link>

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
)(Orders);
