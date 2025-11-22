import React from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ProgressBar } from '@ui-kitten/components';

export const VerifyCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.row2}>
            <ProgressBar style={styles.box2} progress={0.2} />
          </View>
          <Text style={styles.text2}>{'请输入验证码'}</Text>
          <View style={styles.box3}>
            <Text style={styles.text4}>
              验证码已经发送至您的手机
              +91 99292 77633
            </Text>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity style={styles.button}>
              <TextInput style={styles.text3}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <TextInput style={styles.text3}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <TextInput style={styles.text3}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <TextInput style={styles.text3}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}/>
          <Button style={styles.view3}>
            <Text style={styles.text5}>{'Verify'}</Text>
          </Button>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/2bbjxe2g_expires_30_days.png',
            }}
            resizeMode={'stretch'}
            style={styles.image5}
          />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    flex: 1,
  },
  box2: {
    height: 5,
    borderRadius: 20,
  },
  box3: {
    height: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 16,
    marginRight: 20,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 16,
  },
  column: {
    justifyContent: 'flex-end',
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
    height: 327,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    marginBottom: 28,
    marginHorizontal: 45,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 1,
  },
  text: {
    color: '#000000',
    fontSize: 15,
  },
  text2: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text3: {
    color: '#000000',
    fontSize: 20,
  },
  text4: {
    color: '#333333',
    fontSize: 14,
    textAlign: 'center',
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  view: {
    backgroundColor: '#FFE9F1',
    borderRadius: 50,
    paddingRight: 158,
  },
  view2: {
    alignItems: 'center',
    marginBottom: 40,
  },
  view3: {
    backgroundColor: '#1531e1',
    borderRadius: 50,
    alignItems: 'center',
    paddingVertical: 17,
    paddingLeft: 30,
    marginBottom: 26,
    marginHorizontal: 25,
  },
});
