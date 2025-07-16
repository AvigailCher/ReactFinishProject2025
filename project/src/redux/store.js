import { createStore, combineReducers } from 'redux';
import { ProductReducer } from "./reducer/productsReducer";
import cartReducer from "./reducer/cartReducer";

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);
export default store;
