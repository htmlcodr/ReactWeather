var React = require('react');

//var WeatherMessage = React.createClass ({
//  render: function () {
//    var {temp, location} = this.props;

//    var location = this.props.location;
//    var temp = this.props.temp;

//    return (
//      <div>
//        <p>It is {temp} in {location}</p>
//      </div>
//    );
//  }
//});

//var WeatherMessage = (props) => {
var WeatherMessage = ({temp, location}) => {
//  var {temp, location} = props;
  return (
    <div>
      <h3 className="text-center">It is {temp} in {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
