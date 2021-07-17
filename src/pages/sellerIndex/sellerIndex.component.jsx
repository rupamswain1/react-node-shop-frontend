import React from 'react';
import {useSelector} from 'react-redux';
import SellerStatusPage from '../sellerStatusPage/sellerStatusPage.component';
import SellerControlPannel from '../../components/sellerControlPannel/sellerControlPannel.component';
const SellerIndex=()=>{
    const {isVerified,isAuthenticated}=useSelector(state=>state.sellerReducer);
    console.log(isVerified)
    return(
        <div>
            {
                (isVerified==='pending')?
                    <SellerStatusPage/>:
                    <div className='sellerIndexMainPageContainer'>
                        <SellerControlPannel key='sellerControlPannel'/>

                    </div>
            }
            
        </div>
    )
}
export default SellerIndex;