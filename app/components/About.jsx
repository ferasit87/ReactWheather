var React = require('react');

var About =  React.createClass({
    renderTable : () => {
      var rows= [];
       for (var i = 0; i < 9; i++) {
          rows.push(<tr><td>Stir Fry</td><td>stir-fry</td><td className="center">  - </td></tr>);
      }
       return (rows);
      },
  render: function () {
      return (
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
        { this.renderTable() }
   </tbody>
   </table>
 </div>
</div>
  )}
});

module.exports = About;
