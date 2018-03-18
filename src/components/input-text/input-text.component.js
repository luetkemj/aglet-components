import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, withState, withHandlers } from 'recompose';

import style from './input-text.component.scss';

const enhance = compose(
  setDisplayName('InputText'),
  withState('value', 'updateValue', ({ value }) => value),
  withHandlers({
    onChange: props => (event) => {
      props.updateValue(event.target.value);
      props.getValue(event.target.value);
    },
  }),
);

const InputText = enhance(({
  className,
  label,
  name,
  onChange,
  password,
  placeholder,
  readOnly,
  required,
  value,
}) => {
  let isRequired;
  if (required) {
    isRequired = (
      <span className={style.required}>*</span>
    );
  }
  return (
    <label
      className={`${style.wrapper} ${className}`}
      htmlFor={name}
    >
      <p className={style.label}>{label} {isRequired}</p>
      <input
        className={style.input}
        name={name}
        type={password ? 'password' : 'text'}
        readOnly={readOnly}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
});

InputText.propTypes = {
  /** Optional className hook for container - wraps entire component */
  className: PropTypes.string,
  /** Callback for accessing the internal state that tracks the form value */
  getValue: PropTypes.func,
  /** Label to display above the input field */
  label: PropTypes.string,
  /** Used with the htmlFor attribute. Should be unique to form */
  name: PropTypes.string.isRequired,
  /** Text to display when no user input exists */
  placeholder: PropTypes.string,
  /** Boolean to toggle password masking */
  password: PropTypes.bool,
  /** String for setting readOnly mode */
  readOnly: PropTypes.bool,
  /** Boolean to toggle wether the input is required or not */
  required: PropTypes.bool,
  /** String used to set initial value */
  value: PropTypes.string,
};

InputText.defaultProps = {
  className: null,
  label: null,
  password: false,
  placeholder: null,
  readOnly: false,
  required: false,
  value: '',
};

export default InputText;
