import React from 'react';
import './sellerControlPannel.style.scss'
import {Link, BrowserRouter as Router,Route} from 'react-router-dom';
import AddProductsPage from '../../pages/addProductsPage/addProductPage.component';
const SellerControlPannel=()=>{
    const URLS={
        allProducts:'/seller/allProducts',
        addProducts:'/seller/addProducts',
        sellerDashboard:'seller/sellerDashboard'
    }
    return(
        <Router>
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
            <Route exact path={URLS.addProducts}>
                <AddProductsPage/>
            </Route>

        </Router>

    )
}
export default SellerControlPannel;