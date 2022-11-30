import {AppThunk} from '../../store';
import {GameState, startLoading, stopLoading} from './gameSlice';
import {getCharInfoRickMorty} from '../rickMorty';
// reducer thunk asincrono

export const startGame = (level: GameState['level']): AppThunk => {
  //retorna una funcion asincrona que maneja el dispatch y el store
  //para retornar poder ejecutar reducers
  // return async (dispatch, getState) => {
  return async dispatch => {
    // inicializa el loader
    dispatch(startLoading(level));

    // get random characters from api
    await dispatch(getCharInfoRickMorty());

    // setea el nuevo store
    await dispatch(stopLoading());
  };
};
