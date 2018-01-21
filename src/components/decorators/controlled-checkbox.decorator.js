import React, { Component } from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function ControlledCheckbox(WrappedComponent) {
  class Decorator extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        checked: props.defaultChecked,
      };
    }

    handleChange(e) {
      if (this.props.onChange) {
        this.props.onChange(!this.state.checked);
      }
      this.setState({ checked: e.target.checked });
    }

    render() {
      return (
        <WrappedComponent
          isChecked={this.state.checked}
          handleChange={this.handleChange}
          {...this.props}
        />
      );
    }
  }

  Decorator.propTypes = {
    onChange: PropTypes.func,
    defaultChecked: PropTypes.bool,
  };

  Decorator.defaultProps = {
    onChange: null,
    defaultChecked: false,
  };

  Decorator.displayName = getDisplayName(WrappedComponent);

  return Decorator;
}
