import React from "react";
import { View, ScrollView, ImageBackground, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const VerifyCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/ikedng2f_expires_30_days.png"}}
          resizeMode = {'stretch'}
          style={styles.column}
        >
          <View style={styles.row}>
            <Text style={styles.text}>
              {"9:41"}
            </Text>
            <View style={styles.box}/>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/8nc1a8p8_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/777tz8tc_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image2}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/wik17ixs_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image3}
            />
          </View>
          <View style={styles.row2}>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/xz7g4hsb_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image4}
            />
            <View style={styles.view}>
              <View style={styles.box2} />
            </View>
          </View>
          <View style={styles.box3} />
          <View style={styles.box3} />
          <Text style={styles.text2}>
            {"请输入验证码"}
          </Text>
          <View style={styles.box3} />
          <View style={styles.row3}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>
                {"5"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>
                {"1"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>
                {"-"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.text3}>
                {"-"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text4}>
              {"Didn’t receive OTP?\nResend Code"}
            </Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text5}>
              {"Verify"}
            </Text>
          </View>
          <Image
            source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/2bbjxe2g_expires_30_days.png"}}
            resizeMode = {"stretch"}
            style={styles.image5}
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
    width: 22,
    height: 8,
    backgroundColor: "#FF5069",
    borderRadius: 50,
  },
  box3: {
    height: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 16,
    marginRight: 20,
  },
  button2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 16,
  },
  column: {
    justifyContent: "flex-end",
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 25,
    marginHorizontal: 21,
  },
  row2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42,
    marginLeft: 20,
  },
  row3: {
    flexDirection: "row",
    marginBottom: 28,
    marginHorizontal: 45,
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
    marginBottom: 14,
    marginLeft: 54,
  },
  text3: {
    color: "#000000",
    fontSize: 20,
  },
  text4: {
    color: "#333333",
    fontSize: 14,
    textAlign: "center",
    width: 127,
  },
  text5: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  view: {
    backgroundColor: "#FFE9F1",
    borderRadius: 50,
    paddingRight: 158,
  },
  view2: {
    alignItems: "center",
    marginBottom: 40,
  },
  view3: {
    backgroundColor: "#FF5069",
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginBottom: 26,
    marginHorizontal: 25,
  },
});