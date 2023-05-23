import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FavoriteSlice } from './favoriteType';
import type { RootObject } from '../viewSlice/viewType';

const initialState: FavoriteSlice = {
  favoritesCards: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<RootObject[]>) => {
      state.favoritesCards = action.payload;
    },
    addFavorites: (state, action: PayloadAction<RootObject>) => ({
      ...state,
      favoritesCards: [action.payload, ...state.favoritesCards],
    }),
    deleteFavorite: (state, action: PayloadAction<RootObject['id']>) => ({
      ...state,
      favoritesCards: state.favoritesCards.filter(
        (favCard) => favCard.id !== action.payload,
      ),
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setFavorite, addFavorites, deleteFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
