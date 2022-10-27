import {useState, useRef} from 'react';

enum Operadores {
  sum,
  rest,
  multiply,
  divide,
}

export const useCalculadora = () => {
  const [display, setDisplay] = useState('');
  const [displaySmall, setDisplaySmall] = useState('0');

  const operacion = useRef<Operadores>();

  const justQuitAChar = (dis: string) =>
    dis.substring(0, dis.length - 1) || '0';
  const isEmpty = (dis: string) => ['0', '-0', ''].some(d => d === dis);
  const quitNoValueDecimal = (dis: string) => {
    let value = dis;
    if (dis.includes('.')) {
      value = dis.replace(/0+$/, '');
    }
    return value.endsWith('.') ? justQuitAChar(value) : value;
  };

  const cleanDisplay = () => {
    setDisplay('0');
  };

  const buildNumber = (numberText: string) => {
    // not allow double .
    if (display.includes('.') && numberText === '.') {
      return;
    }

    // not allow add other 0 in the left without a .
    if (isEmpty(display)) {
      if (numberText === '0') {
        return;
      }
      if (/[1-9]/.test(numberText)) {
        setDisplay(/[-0]/.test(display) ? numberText : '-' + numberText);
        return;
      }
    }
    setDisplay(display + numberText);
  };

  const togglePositiveNegative = () => {
    if (display.includes('-')) {
      setDisplay(display.replace('-', ''));
    } else {
      setDisplay('-' + display);
    }
  };

  const btnDeleteOneChar = () => {
    let newValue;

    newValue =
      display.length > 2
        ? justQuitAChar(display)
        : /-[\d]?/.test(display)
        ? '0'
        : justQuitAChar(display);

    setDisplay(newValue);
  };

  const moveToDisplaySmall = () => {
    const valueToTop = quitNoValueDecimal(display);
    if (isEmpty(valueToTop)) {
      return;
    }
    setDisplaySmall(valueToTop);
    cleanDisplay();
  };

  const btnDivide = () => {
    moveToDisplaySmall();
    operacion.current = Operadores.divide;
  };

  const btnSum = () => {
    moveToDisplaySmall();
    operacion.current = Operadores.sum;
  };

  const btnMultiply = () => {
    moveToDisplaySmall();
    operacion.current = Operadores.multiply;
  };

  const btnRest = () => {
    moveToDisplaySmall();
    operacion.current = Operadores.rest;
  };

  const calculate = () => {
    const num1 = Number(displaySmall);
    const num2 = Number(display);
    if (num1 === 0) {
      return;
    }
    console.log(num1, num2);
    switch (operacion.current) {
      case Operadores.sum:
        setDisplay(`${num1 + num2}`);
        break;
      case Operadores.rest:
        setDisplay(`${num1 - num2}`);
        break;
      case Operadores.divide:
        if (num2 !== 0) {
          setDisplay(`${num1 / num2}`);
        }
        break;
      case Operadores.multiply:
        setDisplay(`${num1 * num2}`);
        break;
    }
    setDisplaySmall('0');
  };

  return {
    display,
    displaySmall,
    cleanDisplay,
    calculate,
    btnDivide,
    btnSum,
    btnRest,
    btnMultiply,
    btnDeleteOneChar,
    togglePositiveNegative,
    buildNumber,
  };
};
