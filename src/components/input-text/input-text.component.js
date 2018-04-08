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
  disabled,
  error,
  errorMessage,
  instructions,
  label,
  name,
  onBlur,
  onChange,
  password,
  placeholder,
  readOnly,
  required,
  value,
}) => {
  let wrapperClasses = `${style.wrapper} ${className}`;
  if (disabled) wrapperClasses += ` ${style.disabled}`;

  let inputClasses = `${style.input}`;
  if (error || errorMessage) inputClasses += ` ${style.hasError}`;

  let inputMetaToRender;
  if (label || required || instructions) {
    inputMetaToRender = (
      <div className={style.inputMeta}>
        {(label || required) && <p className={style.label}>{label} {required && '*'}</p>}
        {instructions && <p className={style.instructions}>{instructions}</p>}
      </div>
    );
  }

  return (
    <label
      className={wrapperClasses}
      htmlFor={name}
    >
      {inputMetaToRender}
      <input
        className={inputClasses}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={password ? 'password' : 'text'}
        value={value}
      />
      {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
    </label>
  );
});

InputText.propTypes = {
  /** Optional className hook for container - wraps entire component */
  className: PropTypes.string,
  /** Boolean to disable input field */
  disabled: PropTypes.bool,
  /** Toggles error state without requiring an error message */
  error: PropTypes.bool,
  /** The error message to display if error exists */
  errorMessage: PropTypes.string,
  /** Callback for accessing the internal state that tracks the form value */
  getValue: PropTypes.func,
  /** Label to display above the input field */
  label: PropTypes.string,
  /** Instructions displayed between label and input field */
  instructions: PropTypes.string,
  /** Used with the htmlFor attribute. Should be unique to form */
  name: PropTypes.string.isRequired,
  /** onBlur callback */
  onBlur: PropTypes.func,
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
  disabled: false,
  error: false,
  errorMessage: null,
  getValue: null,
  instructions: null,
  label: null,
  onBlur: null,
  password: false,
  placeholder: null,
  readOnly: false,
  required: false,
  value: '',
};

export default InputText;
