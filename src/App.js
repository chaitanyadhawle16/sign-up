import './App.css';
import FormInput from './Components/FormInput';
import { useState , useEffect} from 'react';
import PasswordInput from './Components/PasswordInput';

function App() {

  const [formErrors, setFormErrors] = useState({});
  const[isSubmitted, setIsSubmitted] = useState(false);
  const[values, setValues] = useState({
    userName:'',
    email: '',
    password: '',
    confirmPassword: ''
  })

  
  const validate = (values) =>{
    const formErrors = {};
    
    if(values.userName.length < 8 || values.userName.length > 25){
      formErrors.userName = "Username should be between 8 and 25 characters";
    }
    
    if(!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i)){
      formErrors.email = "Enter a valid email address";
    }
    if(!values.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/)){
      formErrors.password = "Password must atleast have 8 characters that include atleast 1 lowecase character, 1 uppercase character, 1 number and 1 special character";
    }
    if(values.confirmPassword !== values.password){
      formErrors.confirmPassword = "Passwords do not match";
    }
    return formErrors;
  }
  
  const handleOnChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmitted(true);
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmitted){
      alert("Sign Up successfull");
      
    }
  },[formErrors])
  
  return (
    <div className="App">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
  
      <FormInput name='userName' type='text' placeholder='Enter username' value={values.userName} onChange={handleOnChange} errorMessage={formErrors.userName}/>
      
      <FormInput name='email' type='text' placeholder='Enter email' value={values.email} onChange={handleOnChange} errorMessage={formErrors.email}/>
      
      <PasswordInput name='password' placeholder='Enter password' value={values.password} onChange={handleOnChange} errorMessage={formErrors.password}/>
      
      <PasswordInput name='confirmPassword'  placeholder='Re-enter password' value={values.confirmPassword} onChange={handleOnChange} errorMessage={formErrors.confirmPassword}/>
      

      <button className='btn'>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
