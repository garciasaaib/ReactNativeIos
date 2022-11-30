import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';

// estos hooks tipados de `useDispatch` and `useSelector` te permiten obtener el precargado de sus valores

// useDispatch personalizadd al que se le han agregado los thunks
export const useAppDispatch = () => useDispatch<AppDispatch>();

// esto previene tener que darle el tipado cada que es llamado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
