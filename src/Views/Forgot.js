import  React, {useEffect, useRef} from  "react";
import  ReactDom from  "react-dom";
import  DefaultButton from "../components/Button";
import  logo from "../assets/image/logo_black.png";
import  eyeicon  from "../assets/icons/envelope.svg";
import {Route, BrowserRouter as Router, Link} from  "react-router-dom";
import  lottie from  "lottie-web";

function Forgot(){

        const animeCon = useRef(null)

        useEffect(() => {
                    lottie.loadAnimation({
                        container: animeCon.current,
                        renderer: 'svg',
                        loop:true,
                        autoplay:true,
                        animationData:  require('../assets/json/hacker.json')
                    })
        },   [ ])   


        return(
                <div className="Login--screen">
                    <div className="text-center">
                            <h2 className="header" >Forgot Password</h2>
                            <p className="subtitle">
                                We will send a new password reset link to the 
                                   email address you provide only if it’s
                                      connected to the account.
                            </p>
                    </div>
           
                    <div className="animeCon" ref={animeCon} ></div>

                    <form>
                            <div className="input-form">
                                    <label className="custom-field ">
                                            <input  type="email"  required/>
                                            <span  className="placeholder">  Enter your ncu email address </span>
                                            <img  src={ eyeicon} alt="eyeicon" />
                                    </label>
                            </div>
                            <DefaultButton >RESET PASSWORD</DefaultButton>
                    </form>

                    <div className="login-options">
                            <div  className="account">    
                                 <p>Already have an account  
                                     <Link to="/">
                                                Sign in
                                     </Link>
                                 </p>
                            </div>
                    </div>
                </div>
        );
}
export default  Forgot;