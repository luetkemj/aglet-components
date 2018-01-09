import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function controlledText(WrappedComponent) {
  class Decorator extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        value: this.props.initialValue,
      };
    }

    handleChange(event) {
      const { value } = event.target;
      this.props.onChange(value);
      this.setState({ value });
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

  Decorator.propTypes = {
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
  };

  Decorator.defaultProps = {
    initialValue: '',
  };

  return Decorator;
}
