import React from 'react';
import './input.scss';

const Input = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="input">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!!value && (
        // 문자열이기때문에 값이 없으면 false, !value === '' 이럴 필요없이, value로만 사용하여 true, false 지정하기
        <span
          className="clear-btn"
          onClick={() => setValue('')}
        >
          닫기
        </span>
      )}
    </div>
  )
}

export default Input
