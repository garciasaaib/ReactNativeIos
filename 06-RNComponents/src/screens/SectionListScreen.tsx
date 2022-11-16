import {SectionList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HeaderList from '../components/HeaderList';
import SeparatorList from '../components/SeparatorList';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeadScreen from '../components/HeadScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto', 'Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
    ],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SectionListScreen'> {}
export default function SectionListScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        stickySectionHeadersEnabled // android
        // aplica en el contenedor de listas
        ListHeaderComponent={
          <HeadScreen
            title="Section List"
            // bg="white"
            onPress={() => navigation.popToTop()}
          />
        }
        ListFooterComponent={
          <HeaderList top={false} title={`There are ${DATA.length} lists`} />
        }
        // Aplica en cada seccion
        renderSectionHeader={({section: {title}}) => (
          <HeaderList title={title} bg={theme.colors.background} />
        )}
        renderSectionFooter={({section: {data}}) => (
          <HeaderList top={false} title={`Total: ${data.length}`} bg="pink" />
        )}
        SectionSeparatorComponent={() => <SeparatorList />}
        // Aplica en cada Item
        ItemSeparatorComponent={() => <SeparatorList />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
