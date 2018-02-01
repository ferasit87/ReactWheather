var React = require('react');

var EditOrderFrom = React.createClass({
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
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name" placeholder="Text of order" />
            <input type="number" ref="sum" placeholder="sum of order" />
            <button className="button expanded hollow">Edit</button>
          </form>
        </div>
    );
  }
});

module.exports = EditOrderFrom;
