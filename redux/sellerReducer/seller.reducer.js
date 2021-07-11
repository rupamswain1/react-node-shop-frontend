import SellerActionType from './seller.action'

const INITIAL_STATE={
    isAuthenticated:false,
    isVerified:null,
    sellerName:null,
    token:null,
}

export const sellerReducer=(state=INITIAL_STATE, action)=>{
    switch (action.type){
        case SellerActionType.UPADTE_SELLER_SESSION:
            return{
                ...state,
                isAuthenticated:action.isAuthenticated,
                isVerified:action.isVerified,
                sellerName:action.sellerName,
                token:action.token,
            }
        case SellerActionType.UPDATE_SELLER_SIGNOUT:
            state=INITIAL_STATE;
            return{
                ...state,
            }        
        default:
            return state;
    }

}