import React from 'react';
import css from './MySelect.module.css';
const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={css.select}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    >
      <option value="v1" disabled>
        {defaultValue}{' '}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
