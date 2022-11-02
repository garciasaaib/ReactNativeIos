import {ImageInterface, ListImageInterface} from './imageInterface';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {imagesDB} from '../../api/imagesDB';

const initialState: ListImageInterface = {
  data: [],
};
export const loadPhotos = createAsyncThunk(
  'image/loadPhotos',
  async (_, thunkApi) => {
    try {
      const value: ImageInterface[] = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      ).then(response => response.json());
      const data = await value.slice(0, 20);
      return {data};
    } catch (error) {
      return thunkApi.rejectWithValue(undefined);
    }
  },
);

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loadPhotos.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(loadPhotos.rejected, (state, action) => {
        console.log('Regected load photos');
      });
  },
  reducers: {},
});

const {reducer} = imageSlice;

// export const {setMessage, clearMessage} = actions;
export default reducer;
