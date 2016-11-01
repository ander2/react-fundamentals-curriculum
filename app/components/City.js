var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  main: {
  }
}

function Button(props){
  return (
    <button type="button"
    className="btn btn-success"
    onClick={props.onSubmitCity}>
    {props.children}
    </button>
  );
};

function InputField(props){
  return (
    <input type="text"
    name="city"
    className="form-control"
    onChange={props.onUpdateCity}
    value={props.city}
    placeholder="Andoain, Gipuzkoa"
    />
  );
};

function Label  (){
    return (
      <h2>{this.text}</h2>
    )
};

function GetCity (props){
    return (
      <div className="row">
        <Label text="Enter a city and a State"/>
        <InputField
          city={props.city}
          onUpdateCity={props.onUpdateCity} />
        <Button
          onSubmitCity={props.onSubmitCity}>
          Enter a city
        </Button>
      </div>
    );
};

GetCity.propTypes = {
  direction: PropTypes.string,
  country: PropTypes.string.isRequired
}

module.exports = GetCity;
