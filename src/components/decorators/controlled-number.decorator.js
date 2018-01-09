import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'lodash';

export default function ControlledNumber(WrappedComponent) {
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
      let number = Number(value);

      if (isNumber(this.props.max) && number > this.props.max) number = this.props.max;
      if (isNumber(this.props.min) && number < this.props.min) number = this.props.min;

      this.props.onChange(number);
      this.setState({ value: number });
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
    initialValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  Decorator.defaultProps = {
    initialValue: 0,
    min: null,
    max: null,
  };

  return Decorator;
}
