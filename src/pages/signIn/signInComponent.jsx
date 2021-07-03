import React from 'react';
import InputField from '../../components/inputField/inputFieldComponent'
import './signInStyle.scss';
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            userName:"",
            password:""
        }
    }
    
    
    render(){
        const changeHandler=(e)=>{
            if(e.name==='userName'){
                this.setState({userName: [...this.state[e.name],e.value]})
            }
           console.log(this.state.userName)
           
        }
        
        return(
            <>
             <div className="signInHeading">Sign In</div>
            <div className="signIn-container">
               
                <div className="signIn-inputFields">
                    <form id="loginForm"></form>
                    <div className="usernameField">
                        username
                        <InputField 
                            value={this.state.userName}
                            name='userName'
                            type="text"
                            enabled={false}
                            onChangehandler={changeHandler}
                            placeHolder="Username or Email"
                            />
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