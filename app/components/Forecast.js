var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
  main: {
  }
}

function DayItem(props){
  var date = new Date(props.day.dt*1000).toLocaleDateString();
  return (
    <div className='col-md-2 col-sm-2 col-lg-2'>
      {date} <br />
      <img src={'http://openweathermap.org/img/w/' + props.day.weather[0].icon + '.png'} onClick={props.handleClick}/>
      <br />
      <b>{props.day.weather[0].description}</b>
    </div>
  );
}

function ForecastUI(props) {
  return (
    <div>
      <h2>{props.city}</h2>
      <div className='container'>
        {props.forecast.list.map(function(day){
          return (
            <DayItem key={day.dt} handleClick={props.handleClick.bind(null, day)} day={day} />
          )
        })}
      </div>
    </div>
  );
}

function Forecast(props) {
  return (
    props.loading === true
    ? <div> Loading...  </div>
    : <ForecastUI city={props.city} forecast={props.forecast} handleClick={props.handleClick} />
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecast: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = Forecast;
