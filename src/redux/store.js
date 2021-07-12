import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';

const middleleware=[];
if(process.env.NODE_ENV==='development'){
    middleleware.push(logger);
}

export const store=createStore(rootReducer,applyMiddleware(...middleleware));

export const persistor=persistStore(store);