import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  onSearch: (name: string) => void;
  data: any[];
}
const isIos = Platform.OS === 'ios';
export default function SearchInput({onSearch, data}: Props) {
  function runSearch() {
    onSearch('pikachu');
  }
  useEffect(() => {
    setTimeout(() => {
      runSearch();
    }, 500);
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.textBg, styles.shadow]}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          returnKeyLabel="holo"
        />
        {!isIos && (
          <TouchableWithoutFeedback onPress={() => console.log('hola')}>
            <Icon
              name="close-outline"
              color="white"
              size={14}
              style={styles.textClean}
            />
          </TouchableWithoutFeedback>
        )}
        <Icon
          name="search-outline"
          color="#ccc"
          size={30}
          style={styles.textIcon}
        />
      </View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textBg: {
    backgroundColor: '#f3f3f3',
    height: 40,
    borderRadius: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
  },
  textInput: {
    top: isIos ? 0 : 2,
    fontSize: 18,
    flex: 1,
  },
  textIcon: {
    top: 2,
  },
  textClean: {
    backgroundColor: '#ccc',
    padding: 1,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
