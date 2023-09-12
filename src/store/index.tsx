import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/user-reducer';
import wishlistSlice from './reducers/wishlist-reducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
    wishlist: wishlistSlice,

  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch