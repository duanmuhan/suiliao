import React from "react";
import {View, ScrollView, ImageBackground, Text, Image, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/yh4df273_expires_30_days.png"}} resizeMode = {'stretch'}>
          <View style={styles.row2}>
            <View style={styles.view}>
              <View style={styles.box2} />
            </View>
          </View>
          <Text style={styles.text2}>
            {"验证码登录"}
          </Text>
          <Text style={styles.text3}>
            {"We'll need your phone number to send an OTP for verification."}
          </Text>
          <View style={styles.row3}>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/u9zaqxvy_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image5}
            />
            <Text style={styles.text4}>
              {"+91"}
            </Text>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/lju305iz_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image6}
            />
            <View style={styles.box3} />
            <Text style={styles.text5}>
              {"Enter phone number"}
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text6}>
              {"Continue"}
            </Text>
          </View>
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
    width: 22,
    height: 8,
    backgroundColor: "#0088FF",
    borderRadius: 50,
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
    marginBottom: 14,
    marginLeft: 54,
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
    fontSize: 14,
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
    backgroundColor: "#FF5069",
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginBottom: 96,
    marginHorizontal: 25,
    alignItems: "center",
  },
});