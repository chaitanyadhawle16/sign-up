import React, { useState } from 'react';
import './formInput.css';

export default function FormInput(props) {
    const{onChange,errorMessage, ...inputProps} = props;
    return (
    <div className="formInput">
        <div className="inputContainer">
        <input {...inputProps} onChange={onChange} />
        </div>
        <span className="error">{errorMessage}</span>
    </div>
  )
}
