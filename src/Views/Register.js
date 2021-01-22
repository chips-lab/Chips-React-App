import  React from  "react";
import  ReactDom from  "react-dom";
import  DefaultButton from "../components/Button";
import  PrimaryBtn from "../components/Primarybtn"
import  logo from "../assets/image/logo_black.png";
import  eyeicon  from "../assets/icons/envelope.svg";
import passicon from "../assets/icons/eye-alt.svg";
import  lock from "../assets/icons/lock.svg";
import unlock from "../assets/icons/unlock.svg";
import  Login from  "./Login";
import {Route, BrowserRouter as Router, Link} from  "react-router-dom"

function Register(){

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
                                            <input  type="text" />
                                            <span  className="placeholder">  Enter your First Name </span>
                                    </label>
                            </div>
                         <div className="input-form">
                                    <label className="custom-field ">
                                            <input  type="text" />
                                            <span  className="placeholder">  Enter your Last Name </span>
                                    </label>
                            </div>
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input  type="email" />
                                            <span  className="placeholder">  Enter your ncu email address </span>
                                            <img  src={ eyeicon} alt="eyeicon" />
                                    </label>
                            </div>
                            
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input type="password" />
                                            <span  className="placeholder">  Enter your password </span>
                                            <img  src={ lock} alt="eyeicon" />
                                    </label>
                            </div>
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input type="password" />
                                            <span  className="placeholder">  Confirm password </span>
                                            <img  className="orange" src={ unlock} alt="eyeicon" />
                                    </label>
                            </div>
                            <DefaultButton >CREATE</DefaultButton>
                    </form>

                    <div className="login-options">
                            <div  className="account">
                                 <p>Already  have an account 
                                        <Link to="/">
                                                Sign  in
                                         </Link>
                                </p>
                            </div>
                    </div>
                    <div className="terms">
                            <p>By signing up, you agree to CIS's <a>Privacy</a> and <a>Terms of user</a></p>
                    </div>
                </div>
        );
}
export default  Register;