import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";
import { ICategory } from "../../components/models/categories";

interface IState {
  data: ICategory[];
}

const INITIAL_STATE: IState = {
  data: [],
};

export const slice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCategories } = slice.actions;

export default slice.reducer;
