import { View, Text, Image, FastImage, StyleSheet } from 'react-native'
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
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>
    {places.data ? (
      places.data.map((place, index) => (
        <View key={index}>
          
          <Text>{place.name}</Text>
        </View>
      ))
    ) : (
      <Text>Loading</Text>
    )}
  </View>
);
};
const styles = StyleSheet.create({
  image: {
    width:150,
    height:150,
  },

});
