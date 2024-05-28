import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
// import {
//   useFonts,
//   Montserrat_400Regular,
//   Montserrat_600SemiBold,
//   Montserrat_700Bold,
// } from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";
import Category from "./Category";

const Home = (props) => {
//   let [fontsLoaded] = useFonts({
//     Montserrat_400Regular,
//     Montserrat_600SemiBold,
//     Montserrat_700Bold,
//   });
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/berita.png')} style={styles.img}/>
      <Text style={styles.title}>SeeMeNow</Text>
      <Text style={styles.detail}>
      See News For Some Information</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate(Category)}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  img: {
    height: 185,
    width: 185,
    resizeMode: "contain",
  },
  title: {
    color: "#121212",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#121212",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#5AB2FF",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});
