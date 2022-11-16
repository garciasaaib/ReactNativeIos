/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Btn from '../components/Btn';
import CustomSwitch from '../components/CustomSwitch';
import FormScreenLogics from '../utils/FormScreenLogics';
import HeadScreen from '../components/HeadScreen';
import {useTheme} from '@react-navigation/native';

const ios = Platform.OS === 'ios';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'FormScreen'> {}
export default function FormScreen({navigation}: Props) {
  const {colors} = useTheme();
  const {values, handleChangeField, handleSubmit, errors} = FormScreenLogics();
  const inputStyle = [
    styles.input,
    {borderColor: colors.border, color: colors.text},
  ];
  /**
   * Para poder hacer scroll cuando aparece un keyboard en la pantalla se utiliza
   * KeyboardAvoidingView con el behavior, y debe contener un Scrollview dentro
   * Ademas de expacio disponible al final del componente para hacer el scroll
   * por ello se agrega <View style={{height: 50}}/>
   * En el caso que el keyboard no se cierre automatico, se debe generar el cierre con
   * un TouchableWithoutFeedback y un onPress que lo cierre
   * */
  return (
    <KeyboardAvoidingView behavior={ios ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <HeadScreen
              onPress={() => navigation.popToTop()}
              title="value Inputs"
            />
            <View>
              <TextInput
                style={inputStyle}
                onChangeText={e => handleChangeField(e, 'name')}
                value={values.name}
                placeholder="Full name"
                keyboardType="default"
                autoCapitalize="words"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor={colors.border}
              />
              <View>
                {errors.name && (
                  <Text style={styles.textError}>{errors.name}</Text>
                )}
              </View>
            </View>

            <View>
              <TextInput
                style={inputStyle}
                onChangeText={e => handleChangeField(e, 'email')}
                value={values.email}
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor={colors.border}
              />
              <View>
                {errors.name && (
                  <Text style={styles.textError}>{errors.name}</Text>
                )}
              </View>
            </View>

            <View>
              <TextInput
                style={inputStyle}
                value={values.phone}
                placeholder="Phone number"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoComplete="off"
                onChangeText={e => handleChangeField(e, 'phone')}
                autoCorrect={false}
                placeholderTextColor={colors.border}
              />
              <View>
                {errors.phone && (
                  <Text style={styles.textError}>{errors.phone}</Text>
                )}
              </View>
            </View>

            <View>
              <TextInput
                style={inputStyle}
                onChangeText={e => handleChangeField(e, 'password')}
                value={values.password}
                placeholder="Password"
                keyboardType="default"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor={colors.border}
              />
              <View>
                {errors.password && (
                  <Text style={styles.textError}>{errors.password}</Text>
                )}
              </View>
            </View>

            <View style={{margin: 10}}>
              <View style={[styles.switchRow, {borderColor: colors.border}]}>
                <Text style={[styles.text, {color: colors.text}]}>
                  {' '}
                  isHungry
                </Text>
                <CustomSwitch
                  isOn={values.subscribe}
                  onChange={e => handleChangeField(e, 'subscribe')}
                />
              </View>
              <Text style={{color: colors.text}}>
                {JSON.stringify(values, null, 2)}
              </Text>
              <Btn title="Submit" onPress={() => handleSubmit()} />
              <View style={styles.bottomKbrd} />
            </View>
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    // borderColor: 'iris',
    // backgroundColor: 'iris',
  },
  bottomKbrd: {height: ios ? 100 : 30},
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    paddingVertical: ios ? 5 : 0,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  textError: {
    color: 'tomato',
    position: 'absolute',
    top: -10,
    left: 15,
    fontSize: 10,
  },
  textLabel: {
    backgroundColor: 'white',
    position: 'absolute',
    paddingHorizontal: 4,
  },
});
