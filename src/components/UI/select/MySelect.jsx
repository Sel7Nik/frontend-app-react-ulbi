import React from 'react';
import css from './MySelect.module.css';
const MySelect = ({ options, defaultValue }) => {
  return (
    <select className={css.select}>
      <option value="v1" disabled>
        {defaultValue}{' '}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
