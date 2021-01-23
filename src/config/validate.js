  
export default function validate(value){

    let errors = {};
    
    if(!value.username){
        errors.username ="Username is Required";
    } else if(!/^[a-zA-Z]+$/.test(value.username)){
        errors.username = "Invalid Username";
    }else if(value.username.length < 5){
        errors.username = "Username Should have more than 5 characters ";
    }
    
    if(!value.password){
        errors.password ="Password is Required";
    }else if(value.password.length < 6){    
        errors.password ="Password must be more than 6 characters";
    }else if (!/^[a-zA-Z]+$/.test(value.password)){
        errors.password = "Must contain atleast one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
    
    if(!value.title){
        errors.title ="Title is Required";
    } else if(!/^[a-zA-Z]+$/.test(value.title)){
        errors.title = "Invalid Title";
    }
    
    
    if(!value.service){
        errors.service ="Service is Required";
    } else if(!/^[a-zA-Z]+$/.test(value.service)){
        errors.service = "Invalid Service";
    }
    
    
    if(!value.title){
        errors.client ="Client is Required";
    } else if(!/^[a-zA-Z]+$/.test(value.client)){
        errors.client = "Invalid Client";
    }
    
    
    return errors;
    }