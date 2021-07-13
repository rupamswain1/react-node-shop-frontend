import React from 'react';
import {useSelector} from 'react-redux'
import './sellerStatus.style.scss';

const SellerStatusPage=()=>{
    const {isVerified,sellerName}=useSelector(state=>state.sellerReducer)
    return(
        <div className='sellerStatusContainer' id='sellerStatusContainer'>
                <div className='sellerStatusText'>
                    Hi!!!, {sellerName}, Thanks for signing up for React Node Ecomm shop, Verification of your account is pendind, It ususlly takes 2-3 Days, Our team will get in touch with you.
                </div>
        </div>
    )
}

export default SellerStatusPage;
