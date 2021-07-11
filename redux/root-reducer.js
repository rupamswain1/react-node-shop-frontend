import {combineReducer} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {sellerReducer} from './sellerReducer/seller.reducer';
const persitConfig={
    key:'root',
    storage,
    whiteList:[sellerReducer]
}

const rootReducer=combineReducer({
    sellerReducer:sellerReducer,
});

export default persistReducer(persitConfig,rootReducer);