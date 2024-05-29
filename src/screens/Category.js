import React from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import { FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";
import HomePage from "./Place";
import Place from "./Place";
import Categories from "./Categories";

const Category = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
     
      />
    
     <Image source={require('../../assets/Mpu.png')} style={styles.displayImg} ></Image>
     <TouchableOpacity style={styles.btnT} onPress={() => props.navigation.navigate(Place)}>
        <Text style={styles.textBtn}>Place</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btnT} onPress={() => props.navigation.navigate(Categories)}>
        <Text style={styles.textBtn}>Category</Text>
     </TouchableOpacity>
     

    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
  btnT:{
    marginTop:15,
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 10,
    
  },
  textBtn:{
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    
  },
  text: {
    
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    paddingRight: 80,
    lineHeight: 25,
  },
    searchBar:{
      marginTop:60,
    },
  btnText: {
   
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
    marginRight:150,
  },
  button1: {
    height:30,
    width:30,
    marginTop:700,
    marginLeft:80,
  },
  displayImg:{
    // position:'absolute',
    height:175,
    marginLeft:5,
    marginTop: 100,
    width:350,
    paddingLeft:100,
    borderRadius:25,
  },
  btnImage1:{
    backgroundColor:''
  }
});
