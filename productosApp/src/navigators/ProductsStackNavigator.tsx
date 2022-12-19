import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from '../screens/ProductsScreen';
import ProductScreen from '../screens/ProductScreen';

export type ProductsStackParamList = {
  ProductsScreen: undefined;
  ProductScreen: {id?: string; name?: string};
};
const Stack = createNativeStackNavigator<ProductsStackParamList>();

export default function ProductsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        options={{title: 'Productos'}}
        name="ProductsScreen"
        component={ProductsScreen}
      />
      <Stack.Screen
        options={{title: 'Producto'}}
        name="ProductScreen"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
