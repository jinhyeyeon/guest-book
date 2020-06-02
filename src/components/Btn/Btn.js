import React from 'react';
import cn from 'classnames';
import './btn.scss';

const Btn = ({children, icon, classNames, on}) => {
  return (
    <span className={cn("btn", classNames, on)}>
      {icon && <img src={icon} alt="버튼 이미지"/>}
      {children}dddd
    </span>
  )
}

export default Btn;
