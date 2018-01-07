import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Field(WrappedComponent) {
  class HOCFieldCheckbox extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        checked: props.isChecked,
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

  HOCFieldCheckbox.propTypes = {
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
  };

  HOCFieldCheckbox.defaultProps = {
    onChange: null,
    isChecked: false,
  };

  return HOCFieldCheckbox;
}
