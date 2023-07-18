import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setAddToCart: (state, action) => {
      const newItem = action.payload;
      const shopId = newItem.vendorShopId;

      // Check if any items in the cart have a different shopId
      const differentShopExists = state.cart.some(
        item => item.vendorShopId !== shopId,
      );

      // Check if the newItem already exists in the cart
      const itemExists = state.cart.find(item => item.id === newItem.id);

      if (differentShopExists) {
        // Throw an error or handle it as you prefer
        throw new Error('Items in the cart should be from the same shop.');
      } else if (itemExists) {
        // Throw an error or handle it as you prefer
        throw new Error(
          `This item already exists in the cart with quantity (${itemExists?.qty}).`,
        );
      } else {
        state.cart.push({...newItem, qty: 1});
      }
    },
    setRemoveFromCart: (state, action) => {
      const newCart = state.cart.filter(
        item => item?.id !== action.payload?.id,
      );
      state.cart = newCart;
    },
    setIncrementQtyCart: (state, action) => {
      const itemExists = state.cart.some(
        item => item.id === action.payload?.id,
      );
      if (itemExists) {
        const newCart = state.cart.map(item => ({
          ...item,
          qty: item?.id === action.payload?.id ? item?.qty + 1 : item?.qty,
        }));
        state.cart = newCart;
      } else {
        throw new Error('Please first add to cart');
      }
    },
    setDecrementQtyCart: (state, action) => {
      const newCart = state.cart.map(item => ({
        ...item,
        qty:
          item?.id === action.payload?.id && item?.qty > 1
            ? item?.qty - 1
            : item?.qty,
      }));
      state.cart = newCart;
    },
    resetCart: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCart,
  resetCart,
  setAddToCart,
  setRemoveFromCart,
  setIncrementQtyCart,
  setDecrementQtyCart,
} = cartSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default cartSlice.reducer;
