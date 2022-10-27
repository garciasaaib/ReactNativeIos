import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

// Props para sreen
// interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

export const AlbumScreen = () => {
  const {signOut, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text>Album Screen</Text>
      {isLoggedIn && <Button title="LogOut" onPress={signOut} />}
    </View>
  );
};
