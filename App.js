import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}
