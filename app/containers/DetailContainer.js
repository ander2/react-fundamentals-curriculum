var React = require('react');
var Detail = require('../components/Detail');
var api = require('../helpers/openweathermap.js');


var DetailContainer = React.createClass({
  getInitialState: function  () {
    return ({
      loading: true,
      forecast: {}
    });
  },
  componentDidMount: function  () {
    //this.makeRequest(this.props.routeParams.city);
    return true;
  },
  componentWillReceiveProps: function  (nextProps) {
    //this.makeRequest(nextProps.routeParams.city);
    return true;
  },

  makeRequest: function  (city) {
    api.getDetail(city)
    .then(function  (response) {
      console.log(response);
      this.setState({
        loading: false,
        forecast: response
      });
    }.bind(this));
  },
  render: function  () {
    console.log(this);
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
        />
    );
  }
});

module.exports = DetailContainer;
