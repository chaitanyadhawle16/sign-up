import { React, useState } from 'react';
import './formInput.css';
import { Icon } from 'react-icons-kit';
import { eye} from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'


export default function PasswordInput(props) {
  
  const[fieldType, setFieldType] = useState('password');
  const[eyeIcon, setEyeIcon] = useState(eye);  
  const{onChange,errorMessage, ...inputProps} = props;    

  const handleEyeClick = () =>{
    console.log('eye clicked');
   
    
    if(fieldType==='password'){
      setEyeIcon(eyeOff);
      setFieldType('text');
      console.log(fieldType);
      console.log(eyeIcon); 
    }
    else if(fieldType==='text'){
      setEyeIcon(eye);
      setFieldType('password');
    }
  }

  return (
    <div className='formInput'>
        <div className="inputContainer">
        <input onChange={onChange} type={fieldType}  {...inputProps}/>
        <span className='iconSpan' onClick={handleEyeClick}><Icon icon={eyeIcon} /></span>
        </div>
        <span className="error">{errorMessage}</span>
    </div>
  )
}
