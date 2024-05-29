import { View, Text, Image, FastImage, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Place() {
  const [places, setPlaces] = useState([]);
  
  const getPlaces = async () => {
    const response = await fetch("https://dewalaravel.com/api/places");
    const placesData = await response.json();

    console.log(placesData);
    setPlaces(placesData);


  };
  useEffect(() => {
    getPlaces();
  }, []);
return(
 <ScrollView>
  <View >
    {places.data ? (
      places.data.map((place, index) => (
        <View key={index} style={styles.placeView}>
          
          <Text style={styles.namePlace}>{place.name}</Text>
          <Image source={{ uri: place.photo}} style={styles.image} />
          <Text style={styles.descPlace}>{place.description}</Text>
          <Image ></Image>
         
        </View>
      ))
    ) : (
      <Text>Loading</Text>
    )}
  </View>
  </ScrollView>
);
};
const styles = StyleSheet.create({
  image: {
    width:300,
    height:150,
    borderRadius:10,
    marginLeft:20,
  },
  namePlace:{
    marginLeft:20,
    marginTop:10,
  },
  placeView:{
    marginTop:50,
  },
  descPlace:{
    marginLeft:20,
    marginTop:10,
    marginRight:20,
  },
});
