import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/user-reducer'
import cartSlice from './reducers/cart-slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch