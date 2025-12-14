import React from "react";
import { View, ScrollView, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export const LabelScreen =  () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <ImageBackground
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/glfi4lun_expires_30_days.png"}}
          resizeMode = {'stretch'}
        >
          <View style={styles.box2}>
          </View>
          <View style={styles.view}>
            <View style={styles.row2}>
              <TouchableOpacity style={styles.buttonRow} onPress={()=>console.log('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/o07f8swh_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text}>
                  {"Reading"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={()=>console.log('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/wr6t2by7_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>
                  {"Photography"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity style={styles.buttonRow3} onPress={()=>console.log('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/qy5lwe2n_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image2}
              />
              <Text style={styles.text2}>
                {"Gaming"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow} onPress={()=>console.log('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/yra6p173_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image2}
              />
              <Text style={styles.text}>
                {"Music"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow2} onPress={()=>console.log('Pressed!')}>
              <Image
                source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/qrsqtl1o_expires_30_days.png"}}
                resizeMode = {"stretch"}
                style={styles.image2}
              />
              <Text style={styles.text2}>
                {"Travel"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view}>
            <View style={styles.row2}>
              <TouchableOpacity style={styles.buttonRow} onPress={()=>console.log('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/lm3ac2qd_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text}>
                  {"Painting"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={()=>console.log('Pressed!')}>
                <Image
                  source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/wdfd7p4l_expires_30_days.png"}}
                  resizeMode = {"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>
                  {"Politics"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    flex: 1,
  },
  box2: {
    height: 29,
    marginBottom: 14,
  },
  box3: {
    height: 40,
    marginBottom: 28,
  },
  box4: {
    height: 40,
    flexDirection: 'row',
    marginBottom: 13,
    marginHorizontal: 24,
  },
  box5: {
    width: 108,
    height: 40,
    flexDirection: 'row',
  },
  buttonRow: {
    flexDirection: 'row',
    backgroundColor: '#0a28e8',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 20,
  },
  buttonRow2: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonRow3: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  image: {
    width: 24,
    height: 11,
  },
  image2: {
    borderRadius: 5,
    width: 20,
    height: 20,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 25,
    marginLeft: 34,
    marginRight: 14,
  },
  row2: {
    flexDirection: 'row',
  },
  row3: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginBottom: 13,
    marginHorizontal: 23,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 2,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
  view2: {
    alignItems: "center",
    marginBottom: 14,
  },
  view: {
    backgroundColor: "#FFE9F1",
    borderRadius: 20,
  },
  text2: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});