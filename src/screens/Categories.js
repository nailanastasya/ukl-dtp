import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Categories() {
    const [categories, setCategories] = useState([]);
  
  const getCategories = async () => {
    const response = await fetch("https://dewalaravel.com/api/categories");
    const categoriesData = await response.json();

    console.log(categoriesData);
    setCategories(categoriesData);


  };
  useEffect(() => {
    getCategories();
  }, []);
return(
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>
    {categories.data ? (
      categories.data.map((category, index) => (
        <View key={index}>
          
          <Text>{category.name}</Text>
        </View>
      ))
    ) : (
      <Text>Loading</Text>
    )}
  </View>
);
};