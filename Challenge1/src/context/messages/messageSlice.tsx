import {createSlice} from '@reduxjs/toolkit';

interface Message {
  message?: string;
}
const initialState: Message = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return {message: action.payload};
    },
    clearMessage: () => {
      return {message: ''};
    },
  },
});

const {reducer, actions} = messageSlice;

export const {setMessage, clearMessage} = actions;
export default reducer;
