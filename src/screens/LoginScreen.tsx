import React, { useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountryPicker } from 'react-native-country-picker-modal/lib/CountryPicker';
import { Country, CountryCode } from 'react-native-country-picker-modal';
import { Button, ProgressBar } from '@ui-kitten/components';
export const LoginScreen = ({navigation}) => {

  const [countryCode, setCountryCode] = useState<CountryCode>('CN');
  const [callingCode, setCallingCode] = useState('86');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryVisible, setCountryVisible] = useState(false);
  const [country, setCountry] = useState<Country>();


  const onSelect = (country: Country) => {
    setCountry(country);
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const getFlagEmoji = (countryCode?: string) => {
    if (!countryCode) return '🇺🇸';
    return countryCode
      .toUpperCase()
      .split('')
      .map(c => 127397 + c.charCodeAt(0))
      .reduce((s, cp) => s + String.fromCodePoint(cp), '');
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground resizeMode = {'stretch'}>
          <View style={styles.row2}>
            <ProgressBar style={styles.box2} progress={0.1} />
          </View>
          <Text style={styles.text2}>
            {"验证码登录"}
          </Text>
          <Text style={styles.text3}>
            {"请输入您的手机号"}
          </Text>
          <View style={styles.inputContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withFlag={true}
              withCallingCode
              withEmoji={true}
              onSelect={onSelect}
              onClose={() => setCountryVisible(false)}
              visible={countryVisible}
            />

            <Text style={styles.flag}>
              {country?.cca2 ? getFlagEmoji(country.cca2) : '🇺🇸'}
            </Text>
            <Text style={styles.callingCode} onPress={() => setCountryVisible(true)}>
              +{callingCode} ▼
            </Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.text4}
              placeholder="输入手机号"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber} />
          </View>
          <Button style={styles.view2} onPress={() => navigation.navigate('VerifyCodeScreen')}>
            <Text style={styles.text6}>
              {"下一步"}
            </Text>
          </Button>
          <Image
            source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/1nwot3y5_expires_30_days.png"}}
            resizeMode = {"stretch"}
            style={styles.image7}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    flex: 1,
  },
  box2: {
    height: 5,
    borderRadius: 20,
  },
  box3: {
    width: 1,
    height: 30,
    backgroundColor: "#D8D8D8",
    marginRight: 10,
  },
  image: {
    width: 17,
    height: 10,
    marginRight: 5,
  },
  image2: {
    width: 15,
    height: 11,
    marginRight: 5,
  },
  flag: {
    fontSize: 28,
  },
  image3: {
    width: 24,
    height: 11,
  },
  image4: {
    width: 24,
    height: 24,
    marginRight: 53,
  },
  image5: {
    borderRadius: 50,
    width: 38,
    height: 38,
    marginRight: 5,
  },
  image6: {
    borderRadius: 50,
    width: 7,
    height: 3,
    marginRight: 11,
  },
  image7: {
    height: 341,
  },
  callingCode: {
    fontSize: 18,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 25,
    marginHorizontal: 21,
  },
  row2: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 42,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginBottom: 32,
    marginHorizontal: 25,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 1,
  },
  text: {
    color: "#000000",
    fontSize: 15,
  },
  text2: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
    marginHorizontal: 48,
  },
  text3: {
    color: "#333333",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 28,
    marginHorizontal: 48,
  },
  text4: {
    color: "#000000",
    fontSize: 18,
    marginRight: 9,
  },
  text5: {
    color: "#888888",
    fontSize: 15,
  },
  text6: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  view: {
    backgroundColor: "#FFE9F1",
    borderRadius: 50,
    paddingRight: 158,
  },
  view2: {
    backgroundColor: "#354bd5",
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginBottom: 96,
    marginHorizontal: 25,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 40,
    marginBottom: 20,
    height: 56,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#ddd',
  },
});