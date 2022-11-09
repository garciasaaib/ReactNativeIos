/* eslint-disable react-native/no-inline-styles */
import {Dimensions, RefreshControl, ScrollView, Text, View} from 'react-native';
import React from 'react';
import HeaderList from '../components/HeaderList';

/**
 * El pull to refresh funciona en ScrollView & flatList
 *
 * RefreshControl: es un componente JSX que contiene un spiner
 * refreshing: booleano que muestra o esconde el componente
 * onRefresh: funcion que cambia a refreshing, y despues lo esconde.
 */
const wait = async (timeout: number) => {
  return await new Promise((res: any) => {
    setTimeout(res, timeout);
  });
};
export default function PullToRefreshScreen() {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(3000).then(() => setRefreshing(false));
  }, []);

  const {width, height} = Dimensions.get('window');
  return (
    <ScrollView
      style={{
        position: 'absolute',
        flex: 1,
        height,
        width,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // Android
          progressBackgroundColor="#5856d6"
          // progressViewOffset={50}
          colors={['white', 'red', 'green']}
          // IOS
          style={{
            paddingTop: 100,
            backgroundColor: '#5856d6',
            position: 'absolute',
          }}
          tintColor="tomato"
        />
      }>
      <View>
        <HeaderList title="Pull to Refresh" />
        <Text>PullToRefreshScreen</Text>
      </View>
    </ScrollView>
  );
}
