import React from 'react';
import './signInStyle.scss';
class SignIn extends React.Component{
    render(){
        return(
            <>
             <div className="signInHeading">Sign In</div>
            <div className="signIn-container">
               
                <div className="signIn-inputFields">
                    <div className="usernameField">
                        username
                    </div>
                    <div className="passwordField">
                        password
                    </div>
                </div>
                <div classname="signin-Button">
                    SignIn Button
                </div>
                <div className="reset-forgot-password">
                    Reset or forgot password
                </div>
                <div className="signup-link">
                    Sign up link
                </div>
            </div>
            </>
        );
    }
}

export default SignIn;