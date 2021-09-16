import React from 'react'
import useForm from './useForm';
import validate from './Validate';
import './Form.css';
import { Link } from 'react-router-dom';
export const Login = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className="login-form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <span className="form-input-continue">
                    Sign in to Continue
                </span>
                
                <div className="form-inputs">
                    <label htmlForm="fullname" className='form-label'>
                        Please enter Email 
                    </label><br />
                    <input
                        id='fullname'
                        type='text'
                        name='fullname'
                        className='user-input'
                        placeholder="email@xyz.com"
                        values={values.fullname}
                        onChange={handleChange}
                    />
                    {errors.fullname && <p>{errors.fullname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlForm="email" className='form-label'>
                        Please enter Password
                    </label><br />
                    <input
                        id='email'
                        type='text'
                        name='email'
                        className='user-input'
                        placeholder="Enter your password"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {/*{errors.email && <p>{errors.email}</p>}*/}
                    {/*<label htmlFrom=*/}
                </div>
                <button className='form-input-btn' type='submit'>
                    Login
                </button>
                <span className="form-input-signup">
                    Don't have an account? Join us <Link to="/">here</Link>
                </span>
            </form>

            
                
        </div>
        
    );
}
export default Login
