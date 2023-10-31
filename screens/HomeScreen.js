import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import MainComp from "../components/MainComp";

const HomeScreen = () => {
  return (
    <View>
      <MainComp />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
});

export default HomeScreen;
