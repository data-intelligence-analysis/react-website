import { ErrorSharp } from '@material-ui/icons';
import React from 'react';
import useForm from './useForm';
import validate from './Validate';
import './Form.css';
import { Link } from 'react-router-dom';


export const SignUp = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create New Account</h1>
                <span className='form-input-login'>
                    Already Registered? <Link to="/SignIn">Login</Link>
                </span>
                <br/>
                <div className="form-inputs">
                    <div class="col-25">
                        <label htmlForm="fullname" className='form-label'>
                            Please enter name
                        </label>
                    </div>
                    <div class="col-75">
                        <input
                            id='fullname'
                            type='text' 
                            name='fullname' 
                            className='user-input'
                            placeholder="First and Last Name"
                            values ={values.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    <div class = "error-25">
                        {errors.fullname && <p>{errors.fullname}</p>}
                    </div>
                </div>
                <div className="form-inputs">
                    <div class="col-26">
                        <label htmlForm="email" className='form-label'>
                            Please enter email
                        </label>
                    </div>
                    <div class="col-75">
                        <input
                            id=  'email'
                            type='text' 
                            name='email' 
                            className='user-input'
                            placeholder="Enter your email" 
                            value ={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div class = "error-25">
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    
                    
                </div>
                <div className="form-inputs"> 
                    <div class="col-27">
                        <label htmlForm="DOB" className='form-label'>
                            Please enter date of birth
                        </label>
                    </div>
                    <div class ="col-75">
                        <input
                            id=  'date_of_birth'
                            type='date' 
                            name='date_of_birth' 
                            className='user-input'
                            placeholder="Enter your date of birth"
                            value ={values.date_of_birth}
                            onChange={handleChange}
                        />
                    </div>
                    <div class = "error-25">
                        {errors.date_of_birth && <p>{errors.date_of_birth}</p>}
                    </div>
                    
                </div>
                <div className="form-inputs"> 
                    <div class="col-28">
                        <label htmlForm="password" className='form-label'>
                            Please enter password
                        </label>
                    </div>
                    <div class="col-75">
                        <input
                            id = 'password'
                            type='password' 
                            name='password' 
                            className='user-input'
                            placeholder="Enter your password"
                            value ={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div class = "error-25">
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                
                </div>
                <div className="form-inputs">
                    <div class="col-29">
                        <label htmlForm="password2" className='form-label'>
                            Confirm your password
                        </label>
                    </div>
                    <div class="col-75">
                        <input
                            id=  'password_c'
                            type='password' 
                            name='password_c' 
                            className='user-input'
                            placeholder="Enter your password again"
                            value ={values.password_c}
                            onChange={handleChange}
                        />
                    </div>
                    <div class = "error-25">
                        {errors.password_c && <p>{errors.password_c}</p>}
                    </div>
                    
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    );
        
};
export default SignUp
