import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderList from '../components/HeaderList';
import SeparatorList from '../components/SeparatorList';
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
export default function SectionListScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        stickySectionHeadersEnabled // android
        // aplica en el contenedor de listas
        ListHeaderComponent={<HeaderList title="Section List" bg="white" />}
        ListFooterComponent={
          <HeaderList top={false} title={`There are ${DATA.length} lists`} />
        }
        // Aplica en cada seccion
        renderSectionHeader={({section: {title}}) => (
          <HeaderList title={title} bg="white" />
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
