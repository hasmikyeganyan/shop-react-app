import { combineReducers } from "redux";

import categoriesSlice from "./categories/reducer";
import producstSlice from "./products/reducer";

const rootReducer = combineReducers({
  products: producstSlice,
  categories: categoriesSlice,
});

export default rootReducer;
