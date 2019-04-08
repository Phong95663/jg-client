import React from 'react';
import './TextWrapper.css';

const TextWrapper = (props) => {
  const { text } = props;
  return (
    <span className="text-wrapper"> {text} </span>
  )
}
export default TextWrapper;
