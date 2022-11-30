import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import rickMortyReducer from './features/rickMorty/rickMortySlice';
import logger from 'redux-logger';
// import { rickMortyApi } from './api/rickMortyApi';
// store wrapper cualquiera
export const store = configureStore({
  reducer: {
    game: gameReducer,
    rickMorty: rickMortyReducer,
    // [rickMortyApi.reducerPath]: rickMortyApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // getDefaultMiddleware().concat(logger, rickMortyApi.middleware),
});

// obtiene los tipados del configureStore
export type AppDispatch = typeof store.dispatch;

// obtiene los tipados del state mediante el mismo state
export type RootState = ReturnType<typeof store.getState>;

// obtiene los tipados del AppDispatch y el RootState para poder crear thunks por fuera del slice
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
