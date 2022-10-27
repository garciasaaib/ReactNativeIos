import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../../navigators/theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {displaySmall === '0' || (
        <Text style={styles.resultSmall}>{displaySmall}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {display}
      </Text>
      {/* Botton */}

      <View style={styles.row}>
        <ButtonCalc text="C" action={cleanDisplay} />
        <ButtonCalc text="+/-" action={togglePositiveNegative} />
        <ButtonCalc text="del" action={btnDeleteOneChar} />
        <ButtonCalc color="orange" text="/" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="7" action={buildNumber} />
        <ButtonCalc color="dark" text="8" action={buildNumber} />
        <ButtonCalc color="dark" text="9" action={buildNumber} />
        <ButtonCalc color="orange" text="*" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="4" action={buildNumber} />
        <ButtonCalc color="dark" text="5" action={buildNumber} />
        <ButtonCalc color="dark" text="6" action={buildNumber} />
        <ButtonCalc color="orange" text="-" action={btnRest} />
      </View>
      <View style={styles.row}>
        <ButtonCalc color="dark" text="1" action={buildNumber} />
        <ButtonCalc color="dark" text="2" action={buildNumber} />
        <ButtonCalc color="dark" text="3" action={buildNumber} />
        <ButtonCalc color="orange" text="+" action={btnSum} />
      </View>
      <View style={styles.row}>
        <ButtonCalc width={2} color="dark" text="0" action={buildNumber} />
        <ButtonCalc color="dark" text="." action={buildNumber} />
        <ButtonCalc color="orange" text="=" action={calculate} />
      </View>
    </View>
  );
};
