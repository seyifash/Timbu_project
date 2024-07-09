import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
// import {composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk'
import productsReducer from './reducers/productReducers';
import cartReducer from "./reducers/cartReducers";


const persistConfig = {
    key: 'root',
    storage, 
  };
  

  const rootReducer = combineReducers({
    productData: persistReducer(persistConfig, productsReducer),
    cartData: persistReducer(persistConfig, cartReducer),

  });

  const middleware = [thunk]
  const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
  
  export { store, persistor };