import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeadScreen from '../components/HeadScreen';
import {useTheme} from '@react-navigation/native';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'InfiniteScrollScreen'> {}
export default function InfiniteScrollScreen({navigation}: Props) {
  const {colors} = useTheme();
  // list of items from Flatlist
  const [numbers, setNumbers] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // request to add items to Flatlist
  const loadMore = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(numbers.length + i);
    }
    setNumbers([...numbers, ...newArray]);
  };

  // component wrapper for items in the list
  const renderItem = ({item}: any) => (
    <View style={styles.row}>
      <Text style={[styles.rowText, {color: colors.text}]}>
        {item.toString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <HeadScreen
            onPress={() => navigation.popToTop()}
            title="Infinite Scroll"
          />
        }
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
  },
  rowText: {
    fontSize: 30,
  },
  container: {},
});
