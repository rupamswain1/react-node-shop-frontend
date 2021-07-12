import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {sellerReducer} from './sellerReducer/seller.reducer';
const persitConfig={
    key:'root',
    storage,
    whiteList:[sellerReducer]
}

const rootReducer=combineReducers({
    sellerReducer:sellerReducer,
});

export default persistReducer(persitConfig,rootReducer);