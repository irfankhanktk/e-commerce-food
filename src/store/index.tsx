import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/user-reducer';
import wishlistSlice from './reducers/wishlist-reducer';
import cartSlice from './reducers/cart-reducer';
import productSlice from './reducers/product-reducer';
import addressSlice from './reducers/address-reducer';
import chatSlice from './reducers/chat-reducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    product: productSlice,
    address: addressSlice,
    chat: chatSlice,


  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch