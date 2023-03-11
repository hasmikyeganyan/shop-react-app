import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
import { ProductElement } from "../../components/models/products";

interface IState {
  data: ProductElement[];
  product?: ProductElement;
}

const INITIAL_STATE: IState = {
  data: [],
};

export const slice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductElement[]>) => {
      state.data = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductElement>) => {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setProduct } = slice.actions;

export default slice.reducer;
