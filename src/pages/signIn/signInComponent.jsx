import React from 'react';
import InputField from '../../components/inputField/inputFieldComponent'
import PrimaryButton from '../../components/primaryButton/primaryButton.component';
import {Link} from 'react-router-dom'
import './signInStyle.scss';
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            userName:"",
            password:"",
            userNameErr:"",
            passwordErr:"",
            error:"abc"
        }
    }
    
    changeHandler=(e)=>{
        
        if(e.name==='userName'){
            this.setState({userName: e.value},()=>{
                const re=new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
                if(!re.test(this.state.userName)){
                    this.setState({userNameErr: "Enter Valid Email"})
                }
                if(re.test(this.state.userName)){
                    this.setState({userNameErr: ""})
                }
            })
          
           
        }
        else if(e.name==='password'){
            this.setState({password: e.value},()=>{
                this.state.password.length<=6?this.setState({passwordErr: "Password length should be more than 6"}):this.setState({passwordErr: ""})
            })
            
            
        }
       
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log('form submitted')
    }
    
    render(){
       
        
        return(
            <>
             <div className="signInHeading">Sign In</div>
            {this.state.error?(<div className='errorMsg'>{this.state.error}</div>):''}
            <div className="signIn-container">
            <form id="loginForm" onSubmit={this.onSubmitHandler}>
                <div className="signIn-inputFields">
                    
                    <div className="usernameField">
                        <InputField 
                            value={this.state.userName}
                            name='userName'
                            type="text"
                            enabled={true}
                            onChangehandler={this.changeHandler}
                            placeHolder="Username or Email"
                            errorMsg={this.state.userNameErr}
                            key="signInUsername"
                            />
                    </div>
                    <div className="passwordField">
                    <InputField 
                            value={this.state.password}
                            name='password'
                            type="password"
                            enabled={true}
                            onChangehandler={this.changeHandler}
                            placeHolder="Password"
                            errorMsg={this.state.passwordErr}
                            key="signInPassword"
                            />
                    </div>
                </div>
                <div classname="signin-Button">
                    <PrimaryButton 
                        name="signIn"
                        enabled={true}
                        value="Sign In"
                        type='submit'
                        key="signInSubmit"
                    />
                </div>
            </form>
                <div className="reset-forgot-password">
                    Reset or forgot password
                </div>
                <div className="signup-link">
                    Do Not have account!!! <Link to="/seller/signup">Sign up Here</Link>

                </div>
            </div>
            </>
        );
    }
}

export default SignIn;