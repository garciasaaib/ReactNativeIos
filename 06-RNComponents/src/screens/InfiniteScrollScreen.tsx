import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeadScreen from '../components/HeadScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'InfiniteScrollScreen'> {}
export default function InfiniteScrollScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);
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
      <Text style={[styles.rowText, {color: theme.colors.text}]}>
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
