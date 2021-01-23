import  React from  "react";
import  ReactDom from  "react-dom";
import  DefaultButton from "../components/Button";
import  PrimaryBtn from "../components/Primarybtn"
import  logo from "../assets/image/logo_black.png";
import  eyeicon  from "../assets/icons/envelope.svg";
import passicon from "../assets/icons/eye-alt.svg";
import {Route, BrowserRouter as Router, Link} from  "react-router-dom";
import  useForm from  "../hooks/useForm";
import   validate from "../config/validate";

function Login(){

        const {handleSubmit, handleChange , value, errors}= useForm(submit, validate);

         function submit(){   
                console.log("success")
         }

        return(
                <div className="Login--screen">
                    <div className="cis--logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text-center">
                            <h2 className="header" >Chips News and Offer</h2>
                            <p className="subtitle">Sign up for email to get special news and offers</p>
                    </div>

                  
                    <form  onSubmit={handleSubmit} noValidate>
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input  type="email"  
                                                required
                                                name="username"
                                                value={value.email} 
                                                onChange={handleChange}
                                            />
                                            <span  className="placeholder">  Enter your ncu email address </span>
                                            <img  src={ eyeicon} alt="eyeicon" />
                                    </label>
                            </div>
                            {errors.username && <p className="error">{errors.username}</p>}
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input type="password"  
                                                name="password" 
                                                required
                                                value={value.password} 
                                                onChange={handleChange}
                                            />
                                            <span  className="placeholder">  Enter your password </span>
                                            <img  src={ passicon} alt="eyeicon" />
                                            <div className="forgotpass">
                                                <Link to="/forgot">
                                                         Forgot?
                                                </Link>
                                    </div>
                                    </label>
                            </div>
                            {errors.password && <p className="error">{errors.password}</p>}
                            <DefaultButton  onClick={submit}>HACK IN</DefaultButton>
                    </form>

                    <div className="login-options">
                            <div className="remember-me">
                                <input type="checkbox"></input>
                                <a>Remember me</a>
                            </div>
                            <div  className="no-account">    
                                 <p>no account  
                                     <Link to="/register">
                                                Sign up
                                     </Link>
                                 </p>
                            </div>
                    </div>

                    <PrimaryBtn>GOOGLE</PrimaryBtn>
                    <div className="terms">
                            <p>By signing up, you agree to CIS's <a>Privacy</a> and <a>Terms of user</a></p>
                    </div>
                </div>
        );
}
export default  Login;