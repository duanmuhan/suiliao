import WheelPicker from '@quidone/react-native-wheel-picker';
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ItemType } from 'react-native-wheel-picker-expo/src/types.ts';
export const AgeScreen = () => {
  const age = useState(0);

  // 新版 items 类型
  const items: ItemType[] = Array.from({ length: 83 }, (_, i) => ({
    label: `${i + 18}`,
    value: i + 18,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={{
            uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/tdqcj5xa_expires_30_days.png',
          }}
          resizeMode={'stretch'}
        >
          <View style={styles.row2}>
            <View style={styles.view}>
              <View style={styles.box2} />
            </View>
          </View>
          <Text style={styles.text2}>{'请输入您的年龄'}</Text>
          <WheelPicker
            data={items}
            value={age}
            onValueChanged={({ item: { value } }) => console.log(value)}
            enableScrollByTapOnItem={true}
          />
          <View style={styles.column}>
            <ImageBackground
              source={{
                uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/iv0vcqr9_expires_30_days.png',
              }}
              resizeMode={'stretch'}
              style={styles.view4}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  absoluteBox: {
    position: 'absolute',
    top: 2,
    right: -27,
    left: -27,
    height: 3,
    backgroundColor: '#FF5069',
  },
  box: {
    flex: 1,
  },
  box2: {
    width: 90,
    height: 8,
    backgroundColor: '#FF5069',
    borderRadius: 50,
  },
  box3: {
    width: 137,
    height: 3,
    backgroundColor: '#FF5069',
  },
  column: {
    alignItems: 'center',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 25,
    marginHorizontal: 21,
  },
  row2: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 42,
    marginLeft: 20,
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
    marginBottom: 100,
    textAlign: 'center',
  },
  text3: {
    color: '#000000',
    fontSize: 32,
  },
  text4: {
    color: '#000000',
    fontSize: 40,
  },
  text5: {
    color: '#000000',
    fontSize: 48,
    marginBottom: 5,
    marginLeft: 161,
  },
  text6: {
    color: '#0088FF',
    fontSize: 64,
    fontWeight: 'bold',
  },
  text7: {
    color: '#000000',
    fontSize: 48,
  },
  text8: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    backgroundColor: '#FFE9F1',
    borderRadius: 50,
    paddingRight: 90,
  },
  view2: {
    alignItems: 'center',
  },
  view3: {
    alignItems: 'center',
    marginBottom: 2,
  },
  view4: {
    paddingHorizontal: 25,
  },
  view5: {
    backgroundColor: '#0088FF',
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginTop: 133,
    marginBottom: 30,
  },
});
