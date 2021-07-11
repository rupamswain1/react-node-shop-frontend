import SellerActionType from './seller.type';

export const updateSellerSessio=(isVerified,isAuthenticated,sellerName,token)=>{
    return{
        type:SellerActionType.UPADTE_SELLER_SESSION,
        isAuthenticated:isAuthenticated,
        isVerified:isVerified,
        sellerName:sellerName,
        token:token
    }
}