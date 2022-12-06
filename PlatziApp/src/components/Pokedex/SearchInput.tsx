import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedInput} from '../../hooks/useDebounceInput';
interface Props {
  onDebounce: (value: string) => void;
}
const isIos = Platform.OS === 'ios';
export default function SearchInput({onDebounce}: Props) {
  const [text, setText] = React.useState('');
  const {debounceValue} = useDebouncedInput(text, 500);

  React.useEffect(() => {
    onDebounce(debounceValue);
  }, [debounceValue]);

  return (
    <View style={styles.container}>
      <View style={[styles.textBg, styles.shadow]}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={text}
          onChangeText={value => setText(value)}
        />
        {!isIos && text && (
          <TouchableWithoutFeedback onPress={() => setText('')}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textBg: {
    backgroundColor: '#f2eff0',

    height: 40,
    borderRadius: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    // borderColor: 'grey',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  textInput: {
    top: isIos ? 0 : 2,
    fontSize: 18,
    flex: 1,
  },
  textIcon: {
    top: isIos ? 2 : 5,
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
