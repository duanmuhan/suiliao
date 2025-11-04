import React from "react";
import { View, ScrollView, ImageBackground, Text, Image, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const AgeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/tdqcj5xa_expires_30_days.png"}}
          resizeMode = {'stretch'}
        >
          <View style={styles.row}>
            <Text style={styles.text}>
              {"9:41"}
            </Text>
            <View style={styles.box} />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/166romfc_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/hekgxuhc_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image2}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/3k8dtixq_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image3}
            />
          </View>
          <View style={styles.row2}>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/707ts0qi_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image4}
            />
            <View style={styles.view}>
              <View style={styles.box2} />
            </View>
          </View>
          <Text style={styles.text2}>
            {"请输入您的年龄"}
          </Text>
          <View style={styles.view2}>
            <Text style={styles.text3}>
              {"29"}
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text4}>
              {"30"}
            </Text>
          </View>
          <Text style={styles.text5}>
            {"31"}
          </Text>
          <View style={styles.view3}>
            <View >
              <Text style={styles.text6}>
                {"32"}
              </Text>
              <View style={styles.absoluteBox} />
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.box3} />
          </View>
          <View style={styles.view2}>
            <Text style={styles.text7}>
              {"33"}
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text4}>
              {"34"}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text3}>
              {"35"}
            </Text>
            <ImageBackground
              source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/iv0vcqr9_expires_30_days.png"}}
              resizeMode = {'stretch'}
              style={styles.view4}
            >
              <View style={styles.view5}>
                <Text style={styles.text8}>
                  {"Continue"}
                </Text>
              </View>
            </ImageBackground>
          </View>
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
  absoluteBox: {
    position: "absolute",
    top: 2,
    right: -27,
    left: -27,
    height: 3,
    backgroundColor: "#FF5069",
  },
  box: {
    flex: 1,
  },
  box2: {
    width: 90,
    height: 8,
    backgroundColor: "#FF5069",
    borderRadius: 50,
  },
  box3: {
    width: 137,
    height: 3,
    backgroundColor: "#FF5069",
  },
  column: {
    alignItems: "center",
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
    marginBottom: 100,
    marginLeft: 54,
  },
  text3: {
    color: "#000000",
    fontSize: 32,
  },
  text4: {
    color: "#000000",
    fontSize: 40,
  },
  text5: {
    color: "#000000",
    fontSize: 48,
    marginBottom: 5,
    marginLeft: 161,
  },
  text6: {
    color: "#0088FF",
    fontSize: 64,
    fontWeight: "bold",
  },
  text7: {
    color: "#000000",
    fontSize: 48,
  },
  text8: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  view: {
    backgroundColor: "#FFE9F1",
    borderRadius: 50,
    paddingRight: 90,
  },
  view2: {
    alignItems: "center",
  },
  view3: {
    alignItems: "center",
    marginBottom: 2,
  },
  view4: {
    paddingHorizontal: 25,
  },
  view5: {
    backgroundColor: "#0088FF",
    borderRadius: 50,
    paddingVertical: 17,
    paddingLeft: 30,
    marginTop: 133,
    marginBottom: 30,
  },
});