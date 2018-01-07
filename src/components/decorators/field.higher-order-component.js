import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Field(WrappedComponent) {
  class HOCField extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        value: this.props.initialValue,
      };
    }

    handleChange(event) {
      if (event.target.type === 'checkbox') {
        this.props.onChange(!this.state.value);
        this.setState({ value: !this.state.value });
      } else {
        const { value } = event.target;
        this.props.onChange(value);
        this.setState({ value });
      }
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
    initialValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  };

  HOCField.defaultProps = {
    initialValue: '',
  };

  return HOCField;
}
