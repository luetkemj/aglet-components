import React from 'react';
import PropTypes from 'prop-types';
import ControlledNumber from '../decorators/controlled-number.decorator';

import style from './input-number.component.scss';

export function InputNumber({
  label,
  name,
  placeholder,
  required,
  value,
  handleChange,
}) {
  let isRequired;
  if (required) {
    isRequired = (
      <span className={style.required}>*</span>
    );
  }
  return (
    <label
      className={style.wrapper}
      htmlFor={name}
    >
      <p className={style.label}>{label} {isRequired}</p>
      <input
        className={style.input}
        name={name}
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={event => handleChange(event)}
      />
    </label>
  );
}

InputNumber.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.number,
  required: PropTypes.bool,
  value: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

InputNumber.defaultProps = {
  label: null,
  placeholder: null,
  required: false,
  value: 0,
};

export default ControlledNumber(InputNumber);
