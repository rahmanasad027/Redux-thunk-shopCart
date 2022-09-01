import { productReducer, selectedProductReducer } from "./ProductReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default allReducers;
