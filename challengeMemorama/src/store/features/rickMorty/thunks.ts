import {AppThunk} from '../../store';
import {baseUrl} from '../../api/rickMortyApi';
import {
  CardCredentials,
  CharacterState,
  setBack,
  setCharacterList,
  setFound,
  setFront,
} from './rickMortySlice';
import {randomNtimes, shuffleArray} from '../../../utilities/getRandom';
import {Character, ResponseRickMorty} from '../../api/RickMortyInterfaces';
import {setAllowClicks} from '../game';
// reducer thunk asincrono
export const getCharInfoRickMorty = (): AppThunk => {
  //retorna una funcion asincrona que maneja el dispatch y el store
  //para retornar poder ejecutar reducers
  // return async (dispatch, getState) => {
  return async (dispatch, getState) => {
    // get the level and transform to number
    const {
      game: {level},
      rickMorty: {maxCharacters},
    } = getState();
    let maxCharactersState: number = maxCharacters;

    // if !maxCharacters get it from api and set as state
    if (!maxCharactersState) {
      const count = await fetch(`${baseUrl}/character`)
        .then((res: any) => res.json())
        .then((res: ResponseRickMorty) => res.info.count);
      maxCharactersState = count;
    }

    // get ids amount, depends on level
    const amountChar = await (() => {
      switch (level) {
        case 'easy':
          return randomNtimes(4, maxCharactersState);
        case 'mid':
          return randomNtimes(6, maxCharactersState);
        case 'hard':
          return randomNtimes(8, maxCharactersState);
        default:
          return randomNtimes(4, maxCharactersState);
      }
    })();

    // get array of characters and save on state
    await fetch(`${baseUrl}/character/${amountChar}`)
      .then(res => res.json())
      .then((chars: Character[]) => {
        let charsState: CharacterState[] = chars.map(char => ({
          ...char,
          isFront: false,
          isFounded: false,
        }));
        charsState = charsState.concat(charsState);
        charsState = shuffleArray(charsState);
        dispatch(setCharacterList(charsState));
      });
  };
};

export const cardClick = ({key, id}: CardCredentials): AppThunk => {
  //retorna una funcion asincrona que maneja el dispatch y el store
  //para retornar poder ejecutar reducers
  // return async (dispatch, getState) => {
  return async (dispatch, getState) => {
    // disable clicks
    dispatch(setAllowClicks(false));

    // get card list and cards in game
    const {charList} = getState().rickMorty;

    const frontedCards = charList.filter(
      card => card.isFront === true && card.isFounded === false,
    );

    // si no hay cartas por evaluar, se voltea la clickeada
    if (frontedCards.length === 0) {
      dispatch(setFront({key, id}));
    }

    // si ya hay una carta por evaluar, se realiza la evaluacion
    else if (frontedCards.length === 1) {
      // voltea carta
      dispatch(setFront({key, id}));

      // get index of carta actual y anterior
      const prevCard = charList.indexOf(frontedCards[0]);
      // console.log(charList[prevCard].id);
      // console.log(charList[key].id);
      // if prev and curr key has same id, set as found
      if (charList[prevCard].id === charList[key].id) {
        dispatch(setFound([prevCard, key]));
      } else {
        //se evalua si son iguales
        await setTimeout(() => {
          dispatch(setBack([prevCard, key]));
        }, 1000);
      }
    }
    dispatch(setAllowClicks(true));
  };
};
