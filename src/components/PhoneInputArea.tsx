import { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const  PhoneInputArea = () => {

  const [phone, setPhone] = useState('');
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


  const phoneInput = useRef<PhoneInput>(null);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          defaultCode="DM"
          layout="first"
          onChangeText={(text) => {
            setPhone(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <TouchableOpacity
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(phone);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}
        >
          <Text>Check</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fcfdfd', // 浅蓝色背景
  },
  button: {
    width: '100%',
    borderRadius: 25,
    paddingVertical: 8,
  },
});