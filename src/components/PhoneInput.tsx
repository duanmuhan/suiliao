import { useState } from 'react';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { Text, TextInput, View } from 'react-native';
import { CountryPicker } from 'react-native-country-picker-modal/lib/CountryPicker';

export  const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('CN');
  const [callingCode, setCallingCode] = useState('86');
  const [phoneNumber, setPhoneNumber] = useState('');


  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    </View>
    )
}