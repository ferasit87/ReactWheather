var React = require('react');

var AddOrderFrom = React.createClass({
  getInitialState: function () {
    return {
       success : this.props.success
    };
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var sum = this.refs.sum.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.refs.sum.value = '';
      this.props.addOrder(name, sum);
    }
  },
  render: function () {
    var success = '';
    if (this.state.success)   success = (<div data-alert class="alert-box success radius">Success Added Order !</div>);
    return (
        <div>
        {success}
          <form onSubmit={this.onFormSubmit}>
            <input required type="text" ref="name" placeholder="Text of order"/>
            <input type="number" ref="sum" placeholder="sum of order"/>
            <button className="button expanded hollow">Add</button>
          </form>
        </div>
    );
  }
});

module.exports = AddOrderFrom;
