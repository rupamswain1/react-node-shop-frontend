import React,{useState} from 'react'

import InputField from '../../components/inputField/inputFieldComponent';
import PrimaryButton from '../../components/primaryButton/primaryButton.component'

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
    const [state,setState]=useState('');
    const [errorMsg,setErrorMsg]=useState({});
    const onChangehandler=(e)=>{
        // eslint-disable-next-line default-case
        switch (e.name){
            case 'fullName':
                setFullName(e.value);
                const re=new RegExp(/^[A-Za-z]+$/)
                if(!re.test(fullName)){
                    setErrorMsg({...errorMsg,fullName:'Full Name can not be blank, Special char or number'})
                }
                else{
                    setErrorMsg({...errorMsg,fullName:''})
                }
               
        }
    }

    return(
        <div className="signUpPage-container">
            <div className="signUpHeader">Sign Up On React Node Ecomm</div>
            <form id="signUpForm">
                <div className='signUpInputFieldContaine'>
                    <div className="signUpNameField">
                        <div className="userCredFieldSignUp">
                            <InputField
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
                                    name="email"
                                    value={email}
                                    type="email"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Email"
                                />
                        </div>
                        <div className="signUpPassword">
                            <InputField
                                    name="password"
                                    value={password}
                                    type="password"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Password"
                                />
                        </div>
                        <div className="signUpConfirmPassword">
                            <InputField
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    type="password"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Confirm Password"
                                />
                        </div>
                        <div className="signUpPhoneNumber">
                            <InputField
                                    name="phoneNumber"
                                    value={phone}
                                    type="number"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Phone Number"
                                />
                        </div>
                    </div>
                    <div className="addressHeaderSignUp">Address</div>
                    <div className="SignUpaddressBox">
                        <div className="houseNoContainer">
                            <InputField
                                    name="houseName"
                                    value={houseNo}
                                    type="text"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="House Name"
                                />
                        </div>
                        <div className="addressLineSignUp">
                            <InputField
                                    name="address"
                                    value={address}
                                    type="text"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Address"
                                />
                        </div>
                        <div className="pinCodeSignUp">
                            <InputField
                                    name="pinCode"
                                    value={pinCode}
                                    type="number"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="Pin Code"
                                />
                        </div>
                        <div className="citySignUp">
                            <InputField
                                    name="city"
                                    value={city}
                                    type="text"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="City"
                                />
                        </div>
                        <div className="stateSignUp">
                            <InputField
                                    name="state"
                                    value={state}
                                    type="text"
                                    enabled={true}
                                    errorMsg=""
                                    placeHolder="State"
                                />
                        </div>
                    </div>
                    <div className="signUpSubmitButton">
                        <PrimaryButton
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