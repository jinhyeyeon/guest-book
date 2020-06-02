import React from 'react';
import './input.scss';

const Input = ({value, onChange}) => {

  return (
    <div className="input">
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      {!!value && (
        <span
          className="clear-btn"
          onClick={() => {
            onChange && onChange('');
          }}
        >
          닫기
        </span>
      )}
    </div>
  )
}

export default Input
