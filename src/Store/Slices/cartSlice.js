import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id == action.payload.id && e.size == action.payload.size) {
          return false;
        }
        return e;
      });
    },
    increaseQuantity: (state, action) => {
      state.list = state.list.map((e) => {
        if (e.id == action.payload.id && e.size == action.payload.size) {
          e.quantity++;
          return e;
        }
        return e;
      });
    },
    decreaseQuantity: (state, action) => {
      state.list = state.list.map((e) => {
        if (e.id == action.payload.id && e.size == action.payload.size) {
          e.quantity--;
          return e;
        }
        return e;
      });
      state.list = state.list.filter((e) => {
        if (e.quantity === 0) {
          return false;
        }
        return e;
      });
    },
    addItem: (state, action) => {
      let add = true;
      state.list = state.list?.map((e) => {
        if (e?.id == action.payload.item.id && e?.size == action.payload.size) {
          e.quantity += action.payload.quantity;
          add = false;
          return e;
        }
        return e;
      });
      add &&
        state.list.push({
          id: action.payload.item.id,
          brandName: action.payload.item["brand_name"],
          name: action.payload.item.name,
          image: action.payload.item["grid_picture_url"],
          price: action.payload.item["retail_price_cents"] / 100,
          quantity: action.payload.quantity,
          size: action.payload.size,
        });
    },
  },
});

export const {
  removeAll,
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
