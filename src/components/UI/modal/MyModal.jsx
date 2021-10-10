import React from 'react';
import css from './MyModal.module.css';
const MyModal = ({ children }) => {
  return (
    <div className={[css.myModal, css.active].join(' ')}>
      <div className={css.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
