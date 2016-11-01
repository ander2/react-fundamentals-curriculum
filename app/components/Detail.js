var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
  main: {
    textAlign: 'center',
  }
}

function DayItem(props){
  return (
    <div className='col-md-2 col-sm-2 col-lg-2'>
      {date} <br />
      <br />
      <b>{props.day.weather[0].description}</b>
    </div>
  );
}

function DetailUI(props) {
  var date = new Date(props.weather.dt*1000).toLocaleDateString();
  return (
    <div style={styles.main}>
      <img src={'http://openweathermap.org/img/w/' + props.weather.weather[0].icon + '.png'}/>
      <br />
      <h2>{props.city}</h2>
      <h3>{date}</h3>
      <br />
      <span>
      {props.weather.weather[0].description}
      </span><br />
      <span>
      Min. temp: {props.weather.temp.min}
      </span><br />
      <span>
      Max. temp: {props.weather.temp.max}
      </span>
    </div>
  );
}

function Detail(props) {

  return (
    <DetailUI weather={props.weather} city={props.city} />
  )
}

Detail.propTypes = {
  weather: PropTypes.string.isRequired,
}

module.exports = Detail;
