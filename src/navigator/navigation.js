import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Place from "../screens/Place";
import Categories from "../screens/Categories";


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
