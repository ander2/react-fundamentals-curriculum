var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/openweathermap.js');


var ForecastContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function  () {
    return ({
      loading: true,
      forecast: {}
    });
  },
  componentDidMount: function  () {
    this.makeRequest(this.props.routeParams.city);
  },
  componentWillReceiveProps: function  (nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  },

  makeRequest: function  (city) {
    api.getForecast(city)
    .then(function  (response) {
      console.log(response);
      this.setState({
        loading: false,
        forecast: response
      });
    }.bind(this));
  },

  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    });
  },

  render: function  () {
    return (
      <Forecast
        loading={this.state.loading}
        city={this.props.routeParams.city}
        forecast={this.state.forecast}
        handleClick={this.handleClick} />
    );
  }
});

module.exports = ForecastContainer;
