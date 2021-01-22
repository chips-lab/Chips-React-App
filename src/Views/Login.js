import  React from  "react";
import  ReactDom from  "react-dom";
import  DefaultButton from "../components/Button";
import  PrimaryBtn from "../components/Primarybtn"
import  logo from "../assets/image/logo_black.png";
import  eyeicon  from "../assets/icons/envelope.svg";
import passicon from "../assets/icons/eye-alt.svg";
import {Route, BrowserRouter as Router, Link} from  "react-router-dom"

function Login(){

        return(
                <div className="Login--screen">
                    <div className="cis--logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text-center">
                            <h2 className="header" >Chips News and Offer</h2>
                            <p className="subtitle">Sign up for email to get special news and offers</p>
                    </div>

                  
                    <form>
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input  type="email"  required/>
                                            <span  className="placeholder">  Enter your ncu email address </span>
                                            <img  src={ eyeicon} alt="eyeicon" />
                                    </label>
                            </div>
                            
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input type="password"  required/>
                                            <span  className="placeholder">  Enter your password </span>
                                            <img  src={ passicon} alt="eyeicon" />
                                            <div className="forgotpass">
                                                <Link to="/forgot">
                                                         Forgot?
                                                </Link>
                                    </div>
                                    </label>
                            </div>
                            <DefaultButton >HACK IN</DefaultButton>
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