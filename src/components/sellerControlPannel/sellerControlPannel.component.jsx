import React from 'react';
import './sellerControlPannel.style.scss'
import {Link} from 'react-router-dom';
import AddProductsPage from '../../pages/addProductsPage/addProductPage.component';
const SellerControlPannel=()=>{
    return(
        <div id='sellerControlPannelCotainer' className='sellerControlPannelCotainer'>
            <div className='sellerControlPannelOptions'>
                All Products
            </div>
            <div className='sellerControlPannelOptions'>
                <Link to='/seller/addProducts'>
                    Add Products
                </Link>
            </div>
            <div className='sellerControlPannelOptions'>
                Seller Dashboard    
            </div>
        </div>
    )
}
export default SellerControlPannel;