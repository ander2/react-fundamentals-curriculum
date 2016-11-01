var react = require('react');

var hello = react.createClass({
  render: function(){
    return (
      <div>
      Hello World!
      {this.props.children}
      </div>
    );
    }
});

module.expors = hello;
