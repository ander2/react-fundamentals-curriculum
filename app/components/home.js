var React = require('react');
var CityContainer = require('../containers/CityContainer');
var styles = {
  main: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}


var home = React.createClass({
  render: function(){
    return (
      <div style={styles.main}>
        <h1>Enter a city</h1>
        <CityContainer />
      </div>
    );
    }
});

module.exports = home;
