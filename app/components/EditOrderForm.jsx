var React = require('react');

var EditOrderFrom = React.createClass({
  getInitialState: function () {
  return {
    name : this.props.name,
    sum :  this.props.sum,

  };

},
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var sum = this.refs.sum.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.refs.sum.value = '';
      this.props.editOrder(name, sum);
    }
  },
  onnameChange(value){
        this.setState({
             name: value
        });
    },
  onsumChange(value){
      this.setState({
           sum: value
      });
  },
  render: function () {
    var {name, sum} = this.state ;
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name" value={ name } onChange={e => this.onnameChange(e.target.value)}/>
            <input type="number" ref="sum" value={ sum } onChange={e => this.onsumChange(e.target.value)}/>
            <button className="button expanded hollow">Edit</button>
          </form>
        </div>
    );
  }
});

module.exports = EditOrderFrom;
