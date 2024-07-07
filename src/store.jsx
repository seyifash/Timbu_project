import { createStore, combineReducers} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
  
  const store = createStore(rootReducer);
  const persistor = persistStore(store);
  
  export { store, persistor };