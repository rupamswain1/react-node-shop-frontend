import React from 'react';
import InputField from '../../components/inputField/inputFieldComponent'
import PrimaryButton from '../../components/primaryButton/primaryButton.component';
import {connect} from 'react-redux';
import {updateSellerSessio} from '../../redux/sellerReducer/seller.action'
import {Link} from 'react-router-dom'
import {signInApi} from '../../api/signIn';
import { withRouter } from 'react-router-dom';
import './signInStyle.scss';
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            userName:"",
            password:"",
            userNameErr:"",
            passwordErr:"",
            validationError:""
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

    onSubmitHandler= async (event)=>{
        event.preventDefault();
        const response = await signInApi(this.state.userName,this.state.password);
        console.log(response.data)
        if(response.statusCode!==200){
                if(response.data.param==='email'){
                    this.setState({userNameErr:response.data.msg})
                }
                else{
                    this.setState({validationError:response.data.message})
                }
            }
        else{
            this.props.logUser(response.verification,true,response.name,response.token);
            this.props.history.push({pathName:'/seller'})
        }
        console.log(this.state.validationError)
        
    }
    
    render(){
       
        
        return(
            <>
             <div className="signInHeading">Sign In</div>
            {this.state.validationError?(<div className='errorMsg'>{this.state.validationError}</div>):''}
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
const mapDispatchToProps=dispatch=>({
    logUser:(isVerified,isAuthenticated,sellerName,token)=>dispatch(updateSellerSessio(isVerified,isAuthenticated,sellerName,token))
})
export default withRouter(connect(null,mapDispatchToProps)(SignIn));