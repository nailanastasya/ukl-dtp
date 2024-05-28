import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";

const Category = (props) => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/museum.jpg')} style={styles.displayImg}></Image>
       <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)">
        <Image
          source={require('../../assets/home.png')}
          style={styles.buttonImage}
        />
         {/* <Image
          source={require('../../assets/categories.png')}
          style={styles.button1}
        /> */}
      </TouchableHighlight>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    // fontFamily: "Montserrat_400Regular",
  },
  text: {
    // fontFamily: "Montserrat_400Regular",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: "#E2443B",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    // fontFamily: "Montserrat_600SemiBold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
  },
  c3: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529C47",
    marginHorizontal:10,
    alignItems: "center",
    justifyContent: "center",
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#E2443B",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "45%",
    width: "50%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  buttonImage: {
    height:30,
    width:30,
    marginTop:700,
    marginLeft:80,
  },
  button1: {
    height:30,
    width:30,
    marginTop:700,
    marginRight:80,
  },
  displayImg:{
    height:100,
    width:250,
  },
});
