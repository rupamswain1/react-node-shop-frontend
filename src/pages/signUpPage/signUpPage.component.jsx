import React,{useState,useEffect} from 'react'

import InputField from '../../components/inputField/inputFieldComponent';
import PrimaryButton from '../../components/primaryButton/primaryButton.component';
import {sellerSignup} from '../../api/signup';
import {useLocation,useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {updateSellerSessio} from '../../redux/sellerReducer/seller.action';

import './signupPage.style.scss';

const SignUpPage=()=>{
    document.title="Sign Up"
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [houseNo,setHouseNo]=useState('');
    const [address,setAddress]=useState('');
    const [pinCode,setPinCode]=useState('');
    const [city,setCity]=useState('');
    const [state1,setState1]=useState('');
    const [errorMsg,setErrorMsg]=useState({a:'abc'});
    const path=useLocation().pathname.split('/');
    const history=useHistory();
    const dispatch = useDispatch();
    const sellerData=useSelector(state=>state.sellerReducer);
    const onChangehandler=(e)=>{
        // eslint-disable-next-line default-case
        switch (e.name){
            case 'fullName':
                setFullName(e.value);
                break;
            case 'email':
                setEmail(e.value);
                break;
            case 'password':
                setPassword(e.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.value);
                break;
            case 'phoneNumber':
                setPhone(e.value)
                break;
            case 'address':
                setAddress(e.value);
                break;
            case 'pinCode':
                setPinCode(e.value);
                break;
            case 'city':
                setCity(e.value);
                break;
            case 'state':
                setState1(e.value);
                break;
            case 'houseName':
                setHouseNo(e.value);
                break;
        }
    }

    const submitHandler= async (event)=>{
        event.preventDefault();
        
        const err={};
        const re=new RegExp(/^[A-Za-z]+$/)
        if(!re.test(fullName) || fullName.length<=0){
            err.fullName='Full Name can not be blank, Special char or number';
        }
        else{
            delete err.fullName;
        }
        const emailRe=new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        if(!emailRe.test(email)){
            err.email='Please Enter a valid Email Address';
            
        }
        else if(emailRe.test(email)){
            delete err.email;
        }
        //console.log(errorMsg)
        if(password.length<6){
            err.password='Password should be at least 6 character long'
        }
        else{
            delete err.password;
        }
        if(!(password===confirmPassword)){
            err.confirmPassword='Password is not matching';
            
        }
        else{
            delete err.confirmPassword
        }
        if(!(phone.length===10)){
            err.phoneNo='Phone Number should be 10 digits long'
        }
        else{
            delete err.phoneNumber;
        }
        if(houseNo.length<=0){
            err.houseName='House Number cannot be left blank';
        }
        else{
            delete err.houseNo;
        }
        if(address.length<=0){
            err.address="Address cannot be left blank";
        }
        else{
            delete err.address;
        }
        if(!(pinCode.length===6)){
            err.pinCode="Please enter a valid pin code"
        }
        else{
            delete err.pinCode;
        }
        if(city.length<=0){
            err.city="city cannot be left blank"
        }
        else{
            delete err.city;
        }
        if(state1.length<=0){
            err.state="state cannot be left blank";
        }
        else{
            delete err.state
        }

        // console.log(errorMsg)
        setErrorMsg({...err});
        console.log(errorMsg);
            if(errorMsg){
                console.log(err.length)
                if(path[1]==='seller' && err!==undefined){
                    console.log('submit method')
                    const response=await sellerSignup(fullName,email,password,confirmPassword,phone,houseNo,address,pinCode,city,state1)
                    if(response.statusCode!==201){
                        response.data.forEach((value)=>{
                            err[value.param]=value.msg;
                            
                        })
                        setErrorMsg({...err});
                        
                    }
                    else{
                        console.log(response)
                        dispatch(updateSellerSessio('pending','true',fullName,response.token));
                        history.push('/seller/sellerStatus')
                    }
                    
                }
            }
           
            
        
    }

    useEffect(()=>{
        
    },errorMsg)
    
    return(
        <div className="signUpPage-container">
            
            <div className="signUpHeader">Sign Up On React Node Ecomm</div>
            <form id="signUpForm" onSubmit={submitHandler}>
                <div className='signUpInputFieldContaine'>
                    <div className="signUpNameField">
                        <div className="userCredFieldSignUp">
                            <InputField
                                key="signupFullName"
                                name="fullName"
                                value={fullName}
                                type="text"
                                enabled={true}
                                errorMsg={errorMsg.fullName}
                                placeHolder="Full Name"
                                onChangehandler={onChangehandler}
                            />
                        </div>
                        <div className="signUpEmailField">
                            <InputField
                                    key="signUpEmail"
                                    name="email"
                                    value={email}
                                    type="email"
                                    enabled={true}
                                    errorMsg={errorMsg.email}
                                    placeHolder="Email"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="signUpPassword">
                            <InputField
                                    key="signUpPassword"
                                    name="password"
                                    value={password}
                                    type="password"
                                    enabled={true}
                                    errorMsg={errorMsg.password}
                                    placeHolder="Password"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="signUpConfirmPassword">
                            <InputField
                                    key="signUpConfirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    type="password"
                                    enabled={true}
                                    errorMsg={errorMsg.confirmPassword}
                                    placeHolder="Confirm Password"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="signUpPhoneNumber">
                            <InputField
                                    key="signUpPhoneNumber"
                                    name="phoneNumber"
                                    value={phone}
                                    type="number"
                                    enabled={true}
                                    errorMsg={errorMsg.phoneNo}
                                    placeHolder="Phone Number"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                    </div>
                    <div className="addressHeaderSignUp">Address</div>
                    <div className="SignUpaddressBox">
                        <div className="houseNoContainer">
                            <InputField
                                    key="signUpHouseNumber"
                                    name="houseName"
                                    value={houseNo}
                                    type="text"
                                    enabled={true}
                                    errorMsg={errorMsg.houseName}
                                    placeHolder="House Name"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="addressLineSignUp">
                            <InputField
                                    key="signUpAddress"
                                    name="address"
                                    value={address}
                                    type="text"
                                    enabled={true}
                                    errorMsg={errorMsg.address}
                                    placeHolder="Address"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="pinCodeSignUp">
                            <InputField
                                    key="signupPinCode"
                                    name="pinCode"
                                    value={pinCode}
                                    type="number"
                                    enabled={true}
                                    errorMsg={errorMsg.pinCode}
                                    placeHolder="Pin Code"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="citySignUp">
                            <InputField
                                    key="signUpCity"
                                    name="city"
                                    value={city}
                                    type="text"
                                    enabled={true}
                                    errorMsg={errorMsg.city}
                                    placeHolder="City"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                        <div className="stateSignUp">
                            <InputField
                                    key="signUpState"
                                    name="state"
                                    value={state1}
                                    type="text"
                                    enabled={true}
                                    errorMsg={errorMsg.state}
                                    placeHolder="State"
                                    onChangehandler={onChangehandler}
                                />
                        </div>
                    </div>
                    <div className="signUpSubmitButton">
                        <PrimaryButton
                            key="signUpSubmitButton"
                            name="signUp"
                            type="submit"
                            value="Sign Up"
                            enabled={true}
                        />
                    </div>
                </div>

            </form>

        </div>
    )
}

export default SignUpPage;