import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import AddScreen from "./screens/AddScreen";
import NotesStack from "./screens/NotesStack";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import NotesScreen from "./screens/NotesScreen";




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false, headerMode: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
