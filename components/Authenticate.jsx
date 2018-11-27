
import React from 'react';

function authenticate(WrappedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.onInputChange = this.onInputChange.bind(this);
      this.submit = this.submit.bind(this);
    }

    onInputChange(event) {
      event.preventDefault();
      const inputName = event.target.name;
      const inputValue = event.target.value;
      this.setState({ [inputName]: inputValue });
    }

    submit() {
      this.props.onSubmit(this.state);
    }
    
    render() {
      const { onSubmit, ...otherProps } = this.props;
      return (<WrappedComponent
        onChange={this.onInputChange}
        onSubmit={this.submit}
        {...otherProps}
      />);
    }
  }

  return Authenticate;
}

export default authenticate;