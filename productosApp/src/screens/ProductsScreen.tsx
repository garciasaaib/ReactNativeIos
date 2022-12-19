/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProductsStackParamList} from '../navigators/ProductsStackNavigator';
import {ProductsContext} from '../contexts/Poducts/ProductsContext';

interface Props
  extends NativeStackScreenProps<ProductsStackParamList, 'ProductsScreen'> {}

export default function ProductsScreen({navigation}: Props) {
  const {products, loadProducts} = React.useContext(ProductsContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginRight: 10}}
          onPress={() =>
            navigation.navigate('ProductScreen', {
              id: undefined,
              name: undefined,
            })
          }>
          <Text>Add</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  // state and action for the refreshing data
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const onRefresh = async () => {
    //set isRefreshing to true
    setIsRefreshing(true);
    await loadProducts().then(_products => {
      setIsRefreshing(false);
    });
    // and set isRefreshing to false at the end of your callApiMethod()
  };
  // todo: refresh list on pull up-down
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <Text>ProductsScreen</Text>
      <FlatList
        data={products}
        keyExtractor={p => p._id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: item._id,
                name: item.nombre,
              })
            }>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productName: {},
  itemSeparator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
