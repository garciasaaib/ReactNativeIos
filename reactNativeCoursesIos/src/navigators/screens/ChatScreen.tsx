import React from 'react';
import {Text, View} from 'react-native';
import {BoxObjectModelScreen} from './BoxObjectModel/BoxObjectModelScreen';
import {DimensionesScreen} from './BoxObjectModel/DimensionesScreen';
import {FlexScreen} from './BoxObjectModel/FlexScreen';
import {PositionScreen} from './BoxObjectModel/PositionScreen';
import {TareaScreen} from './BoxObjectModel/TareaScreen';

export const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
      <DimensionesScreen />
      <BoxObjectModelScreen />
      <FlexScreen />
      <PositionScreen />
      <TareaScreen />
    </View>
  );
};
