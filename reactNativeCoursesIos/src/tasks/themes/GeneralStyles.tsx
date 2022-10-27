import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30,
    backgroundColor: 'lightgrey',
  },
  primary: {
    color: 'tomato',
  },
  taskItem: {
    margin: 20,
  },
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  resultSmall: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 18,
  },
  generalMargin: {
    margin: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: 'teal',
  },
  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarCotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  drawerButton: {
    backgroundColor: 'salmon',
    marginVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  drawerMenu: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  drawerText: {
    fontSize: 20,
  },
});
