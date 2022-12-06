import React from 'react';

export const useDebouncedInput = (input: string = '', time: number = 500) => {
  const [debounceValue, setDebounceValue] = React.useState(input);

  React.useEffect(() => {
    // cuando input cambia inicia el delay para despues cambiar el debounce value
    const timeout = setTimeout(() => {
      setDebounceValue(input);
    }, time);

    // en caso de ser corrido en tiempo anterior se reinicia el time
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);
  return {debounceValue};
};
