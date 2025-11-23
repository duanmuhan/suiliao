import WheelPicker from 'react-native-wheel-pick';
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressBar } from '@ui-kitten/components';
const AgeScreen = () => {
  const age = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);


  // 新版 items 类型
  const items = Array.from({ length: 83 }, (_, i) => ({
    label: `${i + 18}`,
    value: i + 18,
  }));

  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/tdqcj5xa_expires_30_days.png',
        }}
        resizeMode={'stretch'}
      >
        <View style={styles.row2}>
          <ProgressBar style={styles.box2} progress={0.2} />
        </View>
        <Text style={styles.text2}>{'请输入您的年龄'}</Text>
        <View style={{ height: 200 }}>
          <WheelPicker
            data={items}
            value={age}
            selectedIndex={selectedIndex}
            onValueChanged={(value, index) => setSelectedIndex(index)}
            enableScrollByTapOnItem={true}
          />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text6}>{'下一步'}</Text>
        </View>
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
    </SafeAreaView>
  );
};
export default AgeScreen
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
    height: 5,
    borderRadius: 20,
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
    width: '90%',
    alignSelf: 'center',
    marginBottom: 42,
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
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#354bd5",
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginBottom: 96,
    marginHorizontal: 25,
    alignItems: "center",
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
