var React = require('react');

//var About = React.createClass({
//  render: function () {
//    return (
//      <h3>About</h3>
//    )
//  }
//});

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Nothing is about here! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae</p>
    </div>
  )
};

module.exports = About;
