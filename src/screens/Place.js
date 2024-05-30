<<<<<<< HEAD
import { View, Text, Image, FastImage, StyleSheet, ScrollView,TextInput, FlatList, TouchableOpacity } from 'react-native'
=======
import { View, Text, Image, FastImage, StyleSheet, FlatList, ScrollView } from 'react-native'
>>>>>>> 4f9e590c464ed1520b781a858c6a1959134b48e4
import React, { useEffect, useState } from 'react'


const Place = () => {
  
  const [places, setPlaces] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  
  const getPlaces = async () => {
    const response = await fetch("https://dewalaravel.com/api/places");
    const placesData = await response.json();

    console.log(placesData);
    setPlaces(placesData);


  };
  useEffect(() => {
    getPlaces();
  }, []);

  const handleSearch = (text) => {
    setQuery(text);
    if (text) {
      const filtered = data.filter(place => place.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  
  const handleCancel = () => {
    setQuery('');
    setFilteredData(data);
  };
return(
<<<<<<< HEAD
  <ScrollView>
     <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(place) => place.id.toString()}
        renderItem={({ place }) => (
          <TouchableOpacity style={styles.placeContainer} onPress={() => router.push(`/place/${place.slug}`)}>
            <Image source={{ uri: place.photo }} style={styles.placeImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{place.name}</Text>
              <Text style={styles.itemCategory}>{item.category.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
   < TextInput
        style={styles.searchBar}
        placeholder="Search..." value={query}
        onChangeText={handleSearch}
     
      />
       <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}></TouchableOpacity>
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>
  
    {places.data ? (
      places.data.map((place, index) => (
        <View key={index}>
        <TouchableOpacity>
          <Text style={styles.placeName}>{place.name}</Text>
          <Image source={{ uri: place.photo}} style={styles.image} />
          {/* <Text>{place.description}</Text> */}
          </TouchableOpacity>
=======
 <ScrollView>
  <View >
    {places.data ? (
      places.data.map((place, index) => (
        <View key={index} style={styles.placeView}>
          
          <Text style={styles.namePlace}>{place.name}</Text>
          <Image source={{ uri: place.photo}} style={styles.image} />
          <Text style={styles.descPlace}>{place.description}</Text>
          <Image ></Image>
         
>>>>>>> 4f9e590c464ed1520b781a858c6a1959134b48e4
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
<<<<<<< HEAD
    marginLeft:5,
    width:300,
    height:150,
    borderRadius:10,
  },
 searchBar:{
  margin:40,
 },
 placeName:{
  marginLeft:10,

 },


=======
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
>>>>>>> 4f9e590c464ed1520b781a858c6a1959134b48e4
});

export default Place;