import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import {categoryReducer} from './categories/category.reducer'
import {cartReducer} from './cart/cart.reducer';

export const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    cartReducer,
})