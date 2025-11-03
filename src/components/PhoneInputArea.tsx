import { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { Text } from 'react-native';

export const  PhoneInputArea = () => {

  const [phone, setPhone] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <Text>测试</Text>
  )
}