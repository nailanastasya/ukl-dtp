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

      <View ></View>
      
      <View style={styles.row}>
      <Image source={require('../../assets/berita.png')} style={styles.img}/>
      <Text style={styles.title}>SeeMeNow</Text>
      </View>
      <Text style={styles.subTitle}>News</Text>
     <Image source={require('../../assets/Mpu.png')} style={styles.displayImg} ></Image>
     <View style={styles.listItem}>
      <Text style={styles.textList}>
        <Text>Papua - Tradisi Buka Sasi Laut digelar,</Text>
        
      </Text>
      <Image source={require('../../assets/raja.png')} style={styles.imgList}></Image>
      
     </View>
     
     

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
  listItem:{
    marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  textList:{
    fontSize:10,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  imgList:{
    marginRight:200,
    width:180,
    height:100,
    borderRadius:10,
  },
  subTitle:{
    justifyContent:"center",
    alignItems:"center",
    fontSize:25,
    marginLeft:140,
  },
  img:{
    marginLeft:13,
    marginTop:40,
    width:40,
    height:40,
  },
  btnT:{
    marginTop:15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    
  },
  textBtn:{
    color: '#121212',
    fontSize: 16,
  
  },
  title: {
    marginTop:15,
    fontSize: 20,
    position:"relative",
    alignItems: "center",
    justifyContent: "center",
    
    marginTop: 30,
  },
  // subtitle: {
  //   fontSize: 20,
  //   color: "#474747",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 10,
    
  // },
  // text: {
    
  //   alignItems: "center",
  //   justifyContent: "center",
  //   fontSize: 18,
  //   paddingRight: 80,
  //   lineHeight: 25,
  // },
//   btn: {
//     backgroundColor: "#E2443B",
//     // alignItems: "center",
//     // justifyContent: "center",
    
//     borderRadius: 30,
//   },
  btnText: {
   
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#FFF",
  },
  // cont1: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%",
  //   justifyContent: "space-between",
  //   marginTop: 40,
  // },
  // c3: {
  //   height: 20,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: 20,
  //   borderRadius: 15,
  //   backgroundColor: "#529CC0",
  // },
  // c2: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 15,
  //   backgroundColor: "#529C47",
  //   marginHorizontal:10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // c1: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 15,
  //   backgroundColor: "#E2443B",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // selected: {
  //   borderColor: "#E2443B",
  //   height: 30,
  //   width: 30,
  //   borderRadius: 24,
  //   borderWidth: 2,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // cont2: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%",
  //   marginVertical: 25,
  // },
  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   width: "100%",
  //   paddingHorizontal: 20,
  //   paddingTop: 50,
  // },
  // img: {
  //   height: "45%",
  //   width: "50%",
  // },
  // cont3: {
  //   flex: 1,
  //   backgroundColor: "#FFF",
  //   width: "100%",
  //   borderRadius: 50,
  //   paddingHorizontal: 20,
  // },
  buttonImage: {
    height:30,
    width:30,
    marginTop:1000,
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
    marginTop:20,
    marginLeft:5,
    width:350,
    paddingLeft:100,
    borderRadius:15,
  },
  btnImage1:{
    backgroundColor:''
  }
});
