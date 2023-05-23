import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { MoreSlice } from './moreType';
import type { AppThunk } from '../../hooks';
import type { RootObject } from '../viewSlice/viewType';

const initialState: MoreSlice = {
  more: [],
};

export const moreSlice = createSlice({
  name: 'more',
  initialState,
  reducers: {
    // setMore: (state, action: PayloadAction<RootObject['id']>) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const {} = moreSlice.actions;

export const moreAllCards =
  (id: number): AppThunk =>
  (dispatch) => {
    // axios<RootObject[]>(`https://api.opendota.com/api/heroStats/${id}`)
    //   .then((res) => dispatch(setMore(res.data)))
    //   .catch(console.log);
  };

export default moreSlice.reducer;
