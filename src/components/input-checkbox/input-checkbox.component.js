import React from 'react';
import PropTypes from 'prop-types';
import Field from '../decorators/field.higher-order-component';

import style from './input-checkbox.component.scss';

export function InputCheckbox({
  label,
  name,
  required,
  handleChange,
  value,
}) {
  let isRequired;
  if (required) {
    isRequired = (
      <span className={style.required}>*</span>
    );
  }

  let checkboxToRender;
  let checkboxClasses;
  if (value) {
    checkboxClasses = `${style.checkbox} ${style.checked}`;
    checkboxToRender = (
      <input
        className={style.input}
        name={name}
        type="checkbox"
        onChange={event => handleChange(event)}
        checked
      />
    );
  } else {
    checkboxClasses = `${style.checkbox}`;
    checkboxToRender = (
      <input
        className={style.input}
        name={name}
        type="checkbox"
        onChange={event => handleChange(event)}
      />
    );
  }

  return (
    <div className={style.wrapper}>
      <label
        className={style.label}
        htmlFor={name}
      >
        <p className={style.labelText}>{label} {isRequired}</p>
        <div className={checkboxClasses}>
          {checkboxToRender}
        </div>
      </label>
    </div>
  );
}

InputCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

InputCheckbox.defaultProps = {
  label: null,
  required: false,
  value: false,
};

export default Field(InputCheckbox);
