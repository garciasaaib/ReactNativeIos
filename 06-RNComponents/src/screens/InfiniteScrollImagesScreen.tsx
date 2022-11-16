import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FadeInImage from '../components/FadeInImage';
import {usePhotoList} from '../hook/usePhotoList';
import HeadScreen from '../components/HeadScreen';

// all of this is in docs from pexels

interface Props
  extends NativeStackScreenProps<
    RootStackParamList,
    'InfiniteScrollImagesScreen'
  > {}
export default function InfiniteScrollImagesScreen({navigation}: Props) {
  const {imagesList, loadMore} = usePhotoList();

  // <View style={styles.row}>
  //   {/* <Text style={styles.rowText}>{item.toString()}</Text> */}
  //   <Image style={styles.image} source={{uri: item}} />
  // </View>
  const renderItem = ({item}: any) => <FadeInImage uri={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={imagesList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <HeadScreen
            title="Infinite Scroll"
            onPress={() => navigation.popToTop()}
          />
        }
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0}
        ListFooterComponent={() => (
          <View style={styles.activity}>
            <ActivityIndicator size={50} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowText: {
    fontSize: 30,
  },
  container: {},
  row: {
    borderWidth: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {flex: 1, width: '100%'},
  activity: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
