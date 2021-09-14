import {useState, useEffect} from 'react';

//pass validate as a parameter to represent logic in Validate.js
const useForm = (callback, Validate) => {
    const [values, setValues] = useState({
        fullname:'',
        email: '',
        date_of_birth:'',
        password:'',
        password_c:''
    });
    const [errors,setErrors]=useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e =>{
        const  { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
        
    }
    //Prevents the page from refreshing when you click on submit
    const handleSubmit = e=>{
        e.preventDefault();

        setErrors(Validate(values));
        setIsSubmitting(true);
    }

    //Submit only if there are zero errors
    useEffect(()=> {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }

    },[errors]);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
