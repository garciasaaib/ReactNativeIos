import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import messageReducer from './account/messageSlice';
// reducer wrapper, contains all the reducers...
const reducer = {
  auth: authReducer,
  message: messageReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
