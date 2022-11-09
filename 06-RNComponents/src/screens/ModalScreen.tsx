import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import HeaderList from '../components/HeaderList';
import Btn from '../components/Btn';
const {width, height} = Dimensions.get('screen');
export default function ModalScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View>
      <HeaderList title={`Modal Visible: ${modalVisible}`} />
      <Btn onPress={() => setModalVisible(!modalVisible)} title="Open modal" />

      {/* Real Modal */}
      <Modal
        animationType="fade" // animation
        transparent={true} // covers screen
        visible={modalVisible} // state
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ModalContent onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}
// this can be anything you want
function ModalContent({onPress}: {onPress: () => void}) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalBackground} />
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onPress}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: '#000',
    opacity: 0.4,
    position: 'absolute',
    width,
    height,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
