import { configureStore } from '@reduxjs/toolkit';
import setDotaReducer from './api/viewSlice/viewSlice';
import setFavoritesReducer from './api/favoriteSlice/favoriteSlice';
import setMoreReducer from './api/showMoreSlice/moreSlice';

export const store = configureStore({
  reducer: {
    setApi: setDotaReducer,
    favorite: setFavoritesReducer,
    more: setMoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
