/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState, AppThunk} from '../store';
import {userLogin} from '../../api/userConstants';
import {LoginSchema} from '../../components/LoginForm';
import {setMessage} from '../account/messageSlice';
import {Response} from '../../constant/'

// const user = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@user');
//     if (value !== null) {
//       // value previously stored
//       return {isLoggedIn: false, user: null};
//     }
//     return {isLoggedIn: true, user};
//   } catch (e) {
//     throw e;
//   }
// };
interface UserData {
  username: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}
interface AuthState {
  isLoggedIn: boolean;
  user?: UserData;
}
const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export const login = createAsyncThunk(
  'auth/login',
  async (formValues: LoginSchema, thunkApi) => {
    try {
      //  API request
      const {username, password, keep} = formValues;
      const response: Response = await userLogin({username, password});

      // manage error
      if (!response.data) {
        throw thunkApi.dispatch(setMessage(response.message));
      }

      // set success response
      const userData: UserData = {username};
      return userData as UserData;
    } catch (error) {
      return thunkApi.dispatch(setMessage(error));
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    console.log('haciendo logout');
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(login.pending, (state, action) => {
      //   state.status = 'loading';
      // })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = undefined;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = undefined;
      });
  },
  reducers: {},
});

// [login.fulfilled]: (state, action) => {
//   state.isLoggedIn = true;
//   state.user = action.payload.user;
// },
// [login.rejected]: (state, action) => {
//   state.isLoggedIn = false;
//   state.user = null;
// },
// [logout.fulfilled]: (state, action) => {
//   state.isLoggedIn = false;
//   state.user = null;
// },
const {reducer} = authSlice;

export default reducer;
