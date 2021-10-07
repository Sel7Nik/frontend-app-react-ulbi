import React from 'react';
import css from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return <input className={css.myInput} {...props} ref={ref}></input>;
});

export default MyInput;
