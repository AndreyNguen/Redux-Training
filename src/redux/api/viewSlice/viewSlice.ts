import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootObject, RootObjectSlice } from './viewType';
import type { AppThunk } from '../../hooks';

const initialState: RootObjectSlice = {
  cards: [],
};

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<RootObject[]>) => {
      state.cards = action.payload;
    },
    addCards: (state, action: PayloadAction<RootObject>) => {
      state.cards.unshift(action.payload);
    },
    delCards: (state, action: PayloadAction<RootObject['id']>) => ({
      ...state,
      cards: state.cards.filter((card) => card.id !== action.payload),
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setCards, addCards, delCards } = viewSlice.actions;

export const viewAllCards = (): AppThunk => (dispatch) => {
  axios<RootObject[]>('https://api.opendota.com/api/heroStats')
    .then((res) => dispatch(setCards(res.data)))
    .catch(console.log);
};

export const addDotaCard =
  (addCardInput: { localized_name: string; img: string }): AppThunk =>
  (dispatch) => {
    const newCard = {
      ...addCardInput,
      id: Math.floor(Math.random() * 10000000),
    };
    dispatch(addCards(newCard));
  };

export default viewSlice.reducer;
