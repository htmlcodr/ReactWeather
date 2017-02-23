var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples!</h1>
        <p>Some Example locations:</p>
        <ol>
          <li>
            <Link to="/?location=Winnipeg">Winnipeg, MB</Link>
          </li>
          <li>
            <Link to="/?location=Toronto">Toronto, ON</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
