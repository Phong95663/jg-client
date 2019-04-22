import React, { Component } from 'react';
import '../style/textWrapper.css'

const TextWrapper = props => {
  const {text} = props;
  return(
    <span className='text-wrapper'>{text}</span>
  )
}

export default TextWrapper;
