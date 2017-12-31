import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Field(WrappedComponent) {
  class HOCField extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        value: '',
      };
    }

    handleChange(event) {
      const { value } = event.target;
      this.setState({ value });
      this.props.onChange(value);
    }

    render() {
      return (
        <WrappedComponent
          value={this.state.value}
          handleChange={this.handleChange}
          {...this.props}
        />
      );
    }
  }

  HOCField.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  return HOCField;
}
