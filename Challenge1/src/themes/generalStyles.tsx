import {StyleSheet} from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenChldCenter: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'teal',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 2,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
  imageLogin: {
    width: 100,
    height: 100,
  },
  input: {
    // height: 40,
    // borderBottomColor: '#aaa',
    // borderBottomWidth: 1,
    width: '100%',
    color: 'black',
    // backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
