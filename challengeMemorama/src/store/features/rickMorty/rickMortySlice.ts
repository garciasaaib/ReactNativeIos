// import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {RootState, AppThunk} from '../../app/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from '../../api/RickMortyInterfaces';

// Interfase del state de Counter
export interface CardCredentials {
  id: number;
  key: number;
}
export interface CharacterState extends Character {
  isFront: boolean;
  isFounded: boolean;
}
export interface RickMortyState {
  maxCharacters: number;
  charList: CharacterState[];
  selectedCards: CardCredentials[];
  allowSetFronts: boolean;
}

// Valor inicial del state de Counter
const initialState: RickMortyState = {
  maxCharacters: 0,
  charList: [],
  selectedCards: [],
  allowSetFronts: true,
};

export const rickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {
    setMaxCharacters: (state, action: PayloadAction<number>) => {
      state.maxCharacters = action.payload;
    },
    setCharacterList: (state, action: PayloadAction<CharacterState[]>) => {
      state.charList = action.payload;
    },

    setFront: (state, action: PayloadAction<CardCredentials>) => {
      state.charList[action.payload.key].isFront = true;
    },
    setBack: (state, action: PayloadAction<number[]>) => {
      state.charList[action.payload[0]].isFront = false;
      state.charList[action.payload[1]].isFront = false;
    },

    setFound: (state, action: PayloadAction<number[]>) => {
      state.charList[action.payload[0]].isFounded = true;
      state.charList[action.payload[1]].isFounded = true;
    },
  },
});

// exportamos nuestros actions sincronos
export const {setMaxCharacters, setCharacterList, setFront, setBack, setFound} =
  rickMortySlice.actions;

// finalmente retornamos como default el reducer
export default rickMortySlice.reducer;
