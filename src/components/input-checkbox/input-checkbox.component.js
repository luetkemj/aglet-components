import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, withState, withHandlers } from 'recompose';

import style from './input-checkbox.component.scss';

const enhance = compose(
  setDisplayName('InputCheckbox'),
  withState('value', 'updateValue', ({ value }) => value),
  withHandlers({
    onChange: props => () => {
      const newValue = !props.value;
      props.updateValue(newValue);
      props.getValue(newValue);
    },
  }),
);

const InputCheckbox = enhance(({
  className,
  disabled,
  error,
  instructions,
  label,
  name,
  onChange,
  readOnly,
  required,
  value,
}) => {
  let wrapperClasses = `${style.wrapper} ${className}`;
  if (disabled) wrapperClasses += ` ${style.disabled}`;
  if (readOnly) wrapperClasses += ` ${style.readOnly}`;

  let inputClasses = `${style.input}`;
  if (error) inputClasses += ` ${style.hasError}`;

  let checkboxClasses;
  if (value) {
    checkboxClasses = `${style.checkbox} ${style.checked}`;
  } else {
    checkboxClasses = `${style.checkbox}`;
  }

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
    <label htmlFor={name} className={wrapperClasses}>
      <input
        className={inputClasses}
        onChange={onChange}
        disabled={readOnly || disabled}
        type="checkbox"
        id={name}
        checked={value}
      />
      <div className={checkboxClasses} />
      {inputMetaToRender}
    </label>
  );
});

export default InputCheckbox;

InputCheckbox.propTypes = {
  /** Optional className hook for container */
  className: PropTypes.string,
  /** Toggles error state without requiring an error message */
  error: PropTypes.bool,
  /** Callback for accessing the internal state that tracks the form value */
  getValue: PropTypes.func,
  /** Instructions displayed beneath label */
  instructions: PropTypes.string,
  /** Label to display above the input field */
  label: PropTypes.string,
  /** Used with the htmlFor attribute. Should be unique to form */
  name: PropTypes.string.isRequired,
  /** Bool for setting readOnly mode */
  readOnly: PropTypes.bool,
  /** Boolean to toggle wether the input is required or not */
  required: PropTypes.bool,
  /** Bool used to set initial value */
  value: PropTypes.bool,
};

InputCheckbox.defaultProps = {
  className: '',
  error: false,
  instructions: null,
  label: '',
  readOnly: false,
  required: false,
  value: false,
};
