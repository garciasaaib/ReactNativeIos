// import { createAsyncThunk, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
// import {RootState, AppThunk} from '../../app/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// Interfase del state de Counter
export interface GameState {
  isStart: boolean;
  status: 'idle' | 'loading' | 'paused';
  level: 'easy' | 'mid' | 'hard';
  allowClicks: boolean;
}

// Valor inicial del state de Counter
const initialState: GameState = {
  isStart: false,
  status: 'idle',
  level: 'easy',
  allowClicks: true,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<GameState['level']>) => {
      state.status = 'loading';
      state.level = action.payload;
    },
    stopLoading: state => {
      state.status = 'idle';
      state.isStart = true;
    },
    finishGame: state => {
      state.isStart = false;
    },
    setAllowClicks: (state, action: PayloadAction<boolean>) => {
      state.allowClicks = action.payload;
    },
  },
});

// exportamos nuestros actions sincronos
export const {finishGame, startLoading, stopLoading, setAllowClicks} =
  gameSlice.actions;

// finalmente retornamos como default el reducer
export default gameSlice.reducer;
