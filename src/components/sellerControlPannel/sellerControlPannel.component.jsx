import React from 'react';
import './sellerControlPannel.style.scss'

const SellerControlPannel=()=>{
    return(
        <div id='sellerControlPannelCotainer' className='sellerControlPannelCotainer'>
            <div className='sellerControlPannelOptions'>
                All Products
            </div>
            <div className='sellerControlPannelOptions'>
                Add Products
            </div>
            <div className='sellerControlPannelOptions'>
                Seller Dashboard    
            </div>
        </div>
    )
}
export default SellerControlPannel;