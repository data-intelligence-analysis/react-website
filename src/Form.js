import React, {useState} from 'react'
import { SignUp } from './SignUp'
import Success from'./Success'
import './Form.css'

export const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)

    function submitForm () {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn"></span>
                <div className="formc-content-left">
                    <img src="images/content-left.png" alt="leaf-left" className="form-leaf-img"/>
                </div>
                <SignUp />
                {/*if is not submitted is true*/}
                {/*{!isSubmitted ? (
                    <SignUp submitForm= {submitForm} /> 
                
                ) : (<Success />)

                }*/}
                

                    
            </div>
        </>
    )
}

export default Form;