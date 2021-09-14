import { ErrorSharp } from '@material-ui/icons';
import React from 'react';
import useForm from './useForm';
import validate from './Validate';
import './Form.css';

export const SignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create New Account</h1>
                <span className='form-input-login'>
                    Already Registered?  <a href='#'>Login</a>
                </span>
                <br/>
                <div className="form-inputs"> 
                    <label htmlForm="fullname" className='form-label-fn'>
                        Please enter your name
                    </label><br/>
                    <input
                        id='fullname'
                        type='text' 
                        name='fullname' 
                        className='user-input'
                        placeholder="First and Last Name"
                        values ={values.fullname}
                        onChange={handleChange}
                    />
                    {errors.fullname && <p>{errors.fullname}</p>} 
                </div>
                <div className="form-inputs"> 
                    <label htmlForm="email" className='form-label-email'>
                        Please enter email
                    </label><br/>
                    <input
                        id=  'email'
                        type='text' 
                        name='email' 
                        className='user-input'
                        placeholder="Enter your email" 
                        value ={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    {/*<label htmlFrom=*/}
                </div>
                <div className="form-inputs"> 
                    <label htmlForm="DOB" className='form-label-db'>
                        Please enter date of birth
                    </label><br/>
                    <input
                        id=  'date_of_birth'
                        type='date' 
                        name='date_of_birth' 
                        className='user-input'
                        placeholder="Enter your date of birth"
                        value ={values.date_of_birth}
                        onChange={handleChange}
                    />
                    {errors.date_of_birth && <p>{errors.date_of_birth}</p>}
                    {/*<label htmlFrom=*/}
                </div>
                <div className="form-inputs"> 
                    <label htmlForm="password" className='form-label-ps'>
                        Please enter your password
                    </label><br/>
                    <input
                        id = 'password'
                        type='password' 
                        name='password' 
                        className='user-input'
                        placeholder="Enter your password"
                        value ={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                    {/*<label htmlFrom=*/}
                </div>
                <div className="form-inputs"> 
                    <label htmlForm="password2" className='form-label-pc'>
                        Confirm your password
                    </label><br/>
                    <input
                        id=  'password_c'
                        type='password' 
                        name='password_c' 
                        className='user-input'
                        placeholder="Enter your password again"
                        value ={values.password_c}
                        onChange={handleChange}
                    />
                    {errors.password_c && <p>{errors.password_c}</p>}

                    
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign Up
                </button>
                
            </form>
        </div>
    );
        
};
