import React from "react";
import {View, ScrollView, ImageBackground, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const LabelScreen  = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/hx2hszps_expires_30_days.png"}}
          resizeMode = {'stretch'}
        >
          <View style={styles.row}>
            <Text style={styles.text}>
              {"9:41"}
            </Text>
            <View style={styles.box}>
            </View>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/impqx5vp_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/2352a9ep_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image2}
            />
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/b0gzh9w6_expires_30_days.png"}}
              resizeMode = {"stretch"}
              style={styles.image3}
            />
          </View>
          <View style={styles.row2}>
            <Image
              source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/j9oku9ru_expires_30_days.png"}}
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
              {"Select up to 3 interest"}
            </Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text3}>
              {"Tell us what piques your curiosity and passions"}
            </Text>
          </View>
          <View style={styles.view4}>
            <View style={styles.row3}>
              <TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/xyy2qgob_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text4}>
                  {"Reading"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/y6jils4r_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text5}>
                  {"Photography"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row4}>
            <TouchableOpacity style={styles.buttonRow3} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/a40gvnla_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text5}>
                {"Gaming"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/keym8ofz_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text4}>
                {"Music"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow2} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/xrfpatnn_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text5}>
                {"Travel"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view4}>
            <View style={styles.row3}>
              <TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/jhod50ma_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text4}>
                  {"Painting"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/nhxbspbt_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text5}>
                  {"Politics"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row5}>
            <TouchableOpacity style={styles.buttonRow4} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/pyrd43d0_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text5}>
                {"Charity"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow4} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/eosyzynk_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text5}>
                {"Cooking"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow2} onPress={()=>alert('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/l5g7lz7f_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image5}
              />
              <Text style={styles.text5}>
                {"Pets"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view5}>
            <View style={styles.row3}>
              <TouchableOpacity style={styles.buttonRow} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/sqdfumil_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text4}>
                  {"Sports"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={()=>alert('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/lcxt5hqp_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text5}>
                  {"Fashion"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box3}>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
            <Text style={styles.text6}>
              {"Continue"}
            </Text>
          </TouchableOpacity>
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