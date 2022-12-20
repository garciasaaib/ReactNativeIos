/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductsStackParamList} from '../navigators/ProductsStackNavigator';
import {Picker} from '@react-native-picker/picker';
import useProductCategory from '../hooks/useProductCategory';
import {useForm} from '../hooks/useFrom';
import {ProductsContext} from '../contexts/Poducts/ProductsContext';
import ImageButtons from '../components/ImageButtons';

interface Props
  extends NativeStackScreenProps<ProductsStackParamList, 'ProductScreen'> {}
export default function ProductScreen({navigation, route}: Props) {
  const {loadProductById, addProduct, updateProduct, updateImageProduct} =
    React.useContext(ProductsContext);
  const {name, id} = route.params;

  const {_id, categoriaId, nombre, img, form, onChange, setFormValue} = useForm(
    {
      _id: id,
      categoriaId: '',
      nombre: name,
      img: '',
      precio: 0,
    },
  );
  const {isLoading, categories} = useProductCategory();

  React.useEffect(() => {
    navigation.setOptions({title: nombre || 'Product Name'});
  }, [nombre]);

  const loadProduct = async () => {
    if (!_id) {
      return;
    }
    const prod = await loadProductById(_id);

    setFormValue({
      // ...prod,
      categoriaId: prod.categoria._id,
      nombre: prod.nombre,
      img: prod.img,
      precio: prod.precio,
    });
  };

  React.useEffect(() => {
    loadProduct();
  }, []);

  const saveOrUpdateProduct = async () => {
    if (nombre) {
      if (id) {
        updateProduct(categoriaId, nombre, id);
      } else {
        const newProduct = await addProduct(
          categoriaId || categories[0]._id,
          nombre,
        );
        onChange(newProduct._id, '_id');
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Product name</Text>
        <TextInput
          style={styles.textInput}
          value={nombre}
          onChangeText={value => {
            onChange(value, 'nombre');
          }}
          //todo: hacerlo para que se pueda editar
        />

        {/* Picker / selector */}
        <Text style={styles.label}>Category</Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Picker
            selectedValue={categoriaId}
            onValueChange={itemValue => {
              onChange(itemValue, 'categoriaId');
            }}>
            {categories.map(c => (
              <Picker.Item key={c._id} label={c.nombre} value={c._id} />
            ))}
          </Picker>
        )}

        {/* Picture */}
        {img && (
          <Image source={{uri: img}} style={{width: '100%', height: 300}} />
        )}

        {/* botones de galeria */}

        {_id && (
          <>
            <ImageButtons
              setTempUri={data => onChange(data, 'img')}
              updateImage={imageData => {
                updateImageProduct(imageData, _id);
              }}
            />
          </>
        )}

        {/* Guardar */}
        <Button title="Save" onPress={saveOrUpdateProduct} color="#5856d6" />
        <Text>{JSON.stringify(form, null, 2)}</Text>
        {/* <Text>{tempUri || ''}</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
