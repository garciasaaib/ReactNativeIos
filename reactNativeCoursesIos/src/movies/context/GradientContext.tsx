import React, {createContext, useState} from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ImageColorsState {
  primary: string;
  secondary: string;
}

interface GradiantContextProps {
  colors: ImageColorsState;
  prevColors: ImageColorsState;
  setColors: (colorsArray: ImageColorsState) => void;
  setPrevColors: (colorsArray: ImageColorsState) => void;
}

/**
 * This will be our store of the context
 */
export const GradientContext = createContext({} as GradiantContextProps);

/**
 * This is a component that only allows all its children access to the store on it.
 * In this case the values are the colors, prevColors and the setters from them.
 * This component will be the wrapper for the main navigator of movies app.
 * @param {children} JSX.Element|[]: all the children that have access to this context
 * @returns A component container of the hole app
 */
export const GradientProvider = ({children}: Props) => {
  const [colors, setColors] = useState<ImageColorsState>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColorsState>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setColors: (colorsArray: ImageColorsState) => {
          setColors(colorsArray);
        },
        setPrevColors: (colorsArray: ImageColorsState) => {
          setPrevColors(colorsArray);
        },
      }}>
      {children}
    </GradientContext.Provider>
  );
};
