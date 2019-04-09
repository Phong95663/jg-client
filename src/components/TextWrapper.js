import React, { Component } from 'react';
import '../style/textWrapper.css'
export default const TextColor = props => {
  const {text} = props;
  return(
    <span className='text-wrapper'>{text}</span>
  )
}
