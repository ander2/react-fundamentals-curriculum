var React = require('react');
var City = require('../components/City');


var CityContainer = React.createClass({

    contextTypes: {
      router: React.PropTypes.object.isRequired
    },

    getDefaultProps: function(){
      return ({
        direction: 'column'
      });
    },

    getInitialState: function  () {
      return ({
        city: ''
      });
    },

    handleSubmitCity: function  () {
     this.context.router.push('/forecast/' + this.state.city);
    },

    handleUpdateCity: function  (e) {
      this.setState ({
        city: e.target.value
      });
    },

    render: function () {
        return (
            <City
            direction={this.props.direction}
            city = {this.state.city}
            onUpdateCity={this.handleUpdateCity}
            onSubmitCity={this.handleSubmitCity}
            />
        )
    }
});

module.exports = CityContainer;
