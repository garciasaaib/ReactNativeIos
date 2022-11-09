import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderList from '../components/HeaderList';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'InfiniteScrollScreen'> {}
export default function InfiniteScrollScreen({}: Props) {
  const [numbers, setNumbers] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(numbers.length + i);
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = ({item}: any) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.toString()}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderList title="Infinite Scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowText: {
    fontSize: 30,
  },
  container: {
    backgroundColor: 'grey',
  },
});
