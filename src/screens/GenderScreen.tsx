import React from "react";
import {View, ScrollView, ImageBackground, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const GenderScreen =  () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/u3pccgb5_expires_30_days.png"}}
          resizeMode = {'stretch'}
        >
          <View style={styles.row}>
            <Text style={styles.text}>
              {"9:41"}
            </Text>
            <View style={styles.box}>
            </View>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/tnha518d_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/p30xth51_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image2}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/k2r7zy8k_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image3}
            />
          </View>
          <View style={styles.row2}>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/berf50dp_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image4}
            />
            <View style={styles.view}>
              <View style={styles.box2}>
              </View>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text2}>
              {"What’s Your Gender?"}
            </Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text3}>
              {"Tell us about your gender"}
            </Text>
          </View>
          <View style={styles.view4}>
            <View >
              <ImageBackground
                source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/zbp0inpz_expires_30_days.png"}}
                resizeMode = {'stretch'}
                style={styles.column}
              >
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/v6wtuyxh_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text4}>
                  {"Male"}
                </Text>
              </ImageBackground>
              <ImageBackground
                source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/yvf0vaos_expires_30_days.png"}}
                resizeMode = {'stretch'}
                style={styles.column2}
              >
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/0skzp0l1_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text5}>
                  {"Female"}
                </Text>
              </ImageBackground>
            </View>
          </View>
          <ImageBackground
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/vqga2kpn_expires_30_days.png"}}
            resizeMode = {'stretch'}
            style={styles.view5}
          >
            <TouchableOpacity style={styles.button} onPress={()=>console.log('Pressed!')}>
              <Text style={styles.text6}>
                {"Continue"}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
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
    width: 112,
    height: 8,
    backgroundColor: "#FF5069",
    borderRadius: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0088FF",
    borderRadius: 50,
    paddingVertical: 17,
    marginTop: 112,
    marginBottom: 30,
  },
  column: {
    alignSelf: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 46,
    marginBottom: 48,
  },
  column2: {
    alignSelf: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 44,
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
    width: 59,
    height: 59,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 25,
    marginLeft: 34,
    marginRight: 14,
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
  },
  text3: {
    color: "#333333",
    fontSize: 14,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
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
  },
  view2: {
    alignItems: "center",
    marginBottom: 14,
  },
  view3: {
    alignItems: "center",
    marginBottom: 28,
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
  }
  })