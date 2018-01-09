import React from 'react';
import PropTypes from 'prop-types';
import ControlledCheckbox from '../decorators/controlled-checkbox.decorator';

import style from './input-checkbox.component.scss';

export function InputCheckbox({
  label,
  name,
  required,
  handleChange,
  isChecked,
}) {
  let isRequired;
  if (required) {
    isRequired = (
      <span className={style.required}>*</span>
    );
  }

  let checkboxClasses;
  if (isChecked) {
    checkboxClasses = `${style.checkbox} ${style.checked}`;
  } else {
    checkboxClasses = `${style.checkbox}`;
  }

  return (
    <div className={style.wrapper}>
      <label
        className={style.label}
        htmlFor={name}
      >
        <p className={style.labelText}>{label} {isRequired}</p>
        <div className={checkboxClasses}>
          <input
            className={style.input}
            name={name}
            type="checkbox"
            onChange={e => handleChange(e)}
            defaultChecked={isChecked}
          />
        </div>
      </label>
    </div>
  );
}

InputCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

InputCheckbox.defaultProps = {
  label: null,
  required: false,
};

export default ControlledCheckbox(InputCheckbox);
