import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
  formConntainer: {
    padding: 30,
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    color: 'white',
  },
  input: {
    color: 'white',
    fontSize: 20,
  },
  inputIos: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  btn: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'white',
  },
  btnText: {
    color: 'white',
  },
  newUserContainer: {
    marginTop: 10,
    marginBottom: 40,
    flexDirection: 'row-reverse',
  },
  newUserLink: {
    width: '30%',
  },
  newUserText: {
    textAlign: 'right',
    color: 'white',
    textDecorationLine: 'underline',
  },
  textError: {
    color: 'tomato',
  },
  btnReturn: {
    position: 'absolute',
    top: 0,
    left: 25,
  },
});
