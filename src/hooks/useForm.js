import {useState, useEffect} from "react";

    const useForm = (callback,validate) =>{


    const [value, setValues] = useState({email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleChange = event  =>{
        const {name, value} = event.target;

        setValues({
            [name]: value
        });
    }
    const handleSubmit = event =>{
    event.preventDefault();
    setErrors(validate(value));
    callback();
    setisSubmitting(true);
    }

    
    useEffect(() =>{
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    },[errors]);


    return{
         handleChange,
         handleSubmit,
         value,  
         errors
    };


};
export default useForm;