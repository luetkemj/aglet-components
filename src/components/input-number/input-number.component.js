import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, withState, withHandlers } from 'recompose';

import style from './input-number.component.scss';

let inputRef;

const notLessThan = (min, n, step) => {
  let number = Number(n) - Number(step);
  if (number < min) number = min;
  return number;
};

const notMoreThan = (max, n, step) => {
  let number = Number(n) + Number(step);
  if (number > max) number = max;
  return number;
};

const enhance = compose(
  setDisplayName('InputText'),
  withState('value', 'updateValue', ({ value }) => value),
  withHandlers({
    decrement: ({
      getValue,
      min,
      step,
      updateValue,
    }) => () => updateValue((n) => {
      inputRef.focus();
      const newValue = notLessThan(min, n, step);
      getValue(newValue);
      return newValue;
    }),
    increment: ({
      getValue,
      max,
      step,
      updateValue,
    }) => () => updateValue((n) => {
      inputRef.focus();
      const newValue = notMoreThan(max, n, step);
      getValue(newValue);
      return newValue;
    }),
    onChange: ({ updateValue, getValue }) => (event) => {
      updateValue(event.target.value);
      getValue(event.target.value);
    },
  }),
);

const InputNumber = enhance(({
  className,
  decrement,
  disabled,
  error,
  errorMessage,
  increment,
  instructions,
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
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
      <input
        className={inputClasses}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref => inputRef = ref} // eslint-disable-line no-return-assign
        type="number"
        value={value}
        max={max}
        min={min}
        step={0.1}
      />
      <div className={style.spin}>
        <button className={`${style.button} ${style.increment}`} onClick={increment} />
        <button className={`${style.button} ${style.decrement}`} onClick={decrement} />
      </div>
      {inputMetaToRender}
    </label>
  );
});

InputNumber.propTypes = {
  /** Optional className hook for container - wraps entire component */
  className: PropTypes.string,
  /** Boolean to disable input field */
  disabled: PropTypes.bool,
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
  /** String for setting readOnly mode */
  readOnly: PropTypes.bool,
  /** Boolean to toggle wether the input is required or not */
  required: PropTypes.bool,
  /** String used to set initial value */
  value: PropTypes.string,
};

InputNumber.defaultProps = {
  className: null,
  disabled: false,
  getValue: null,
  instructions: null,
  label: null,
  onBlur: null,
  placeholder: null,
  readOnly: false,
  required: false,
  value: '',
};

export default InputNumber;
