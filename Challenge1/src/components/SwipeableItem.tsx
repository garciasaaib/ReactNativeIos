import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Animated} from 'react-native';
import {ScaleDecorator} from 'react-native-draggable-flatlist';

export default function SwipeableItem({
  item,
  handleDelete,
  drag,
  isActive,
}: any) {
  const leftSwipe = (dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity style={styles.leftSwipe} onPress={handleDelete}>
        <Animated.View style={{transform: [{scale}]}}>
          <Icon name="trash-can" size={50} color="white" />
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <ScaleDecorator>
      <TouchableOpacity onLongPress={drag} disabled={isActive}>
        <Swipeable renderLeftActions={leftSwipe}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={{uri: item.thumbnailUrl}}
              />
              <View style={styles.itemText}>
                <Text>Title:</Text>
                <Text>{item.title}</Text>
              </View>
            </View>
          </View>
        </Swipeable>
      </TouchableOpacity>
    </ScaleDecorator>
  );
}
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  itemContainer: {
    width,
  },
  item: {
    backgroundColor: 'teal',
    padding: 5,
    flexDirection: 'row',
    flex: 1,
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemText: {
    flex: 1,
    marginLeft: 5,
  },
  leftSwipe: {
    backgroundColor: 'tomato',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSwipeText: {
    backgroundColor: 'tomato',
    width,
  },
});
