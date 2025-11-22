import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import React, {useState} from "react";
import {View, ScrollView, Text, Image, TextInput, TouchableOpacity} from "react-native";
import { ProgressBar } from '@ui-kitten/components';
export const NameScreen = () => {
  const [textInput1, onChangeTextInput1] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
        <View style={styles.row2}>
          <ProgressBar style={styles.box2} progress={0.2} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text2}>
            {"请输入您的名称"}
          </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text3}>
          </Text>
        </View>
        <TextInput
          placeholder={""}
          value={textInput1}
          onChangeText={onChangeTextInput1}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text4}>
            {"下一步"}
          </Text>
        </TouchableOpacity>
        <Image
          source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fWoXVVRMdp/4m7f3ru8_expires_30_days.png"}}
          resizeMode = {"stretch"}
          style={styles.image5}
        />
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
  button: {
    alignItems: "center",
    backgroundColor: "#1d42d3",
    borderRadius: 50,
    paddingVertical: 17,
    marginBottom: 96,
    marginHorizontal: 25,
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
    height: 361,
  },
  input: {
    color: "#000000",
    fontSize: 15,
    marginBottom: 32,
    marginHorizontal: 25,
    backgroundColor: "#FFFFFF",
    borderColor: "#1531e1",
    borderRadius: 50,
    borderWidth: 1,
    padding: 18,
  },
  row2: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 42,
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
    fontWeight: "bold",
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
});