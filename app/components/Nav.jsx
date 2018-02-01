var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Yii App orders</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Authentication</IndexLink>
            </li>
            <li>
              <Link to="/addOrder" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Add new order</Link>
            </li>
            <li>
              <Link to="/orders" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>View yours orders</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
