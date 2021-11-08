import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import BemVindo from "./pages/BemVindo";
import { Home } from "./pages/Home";
import { AddPlantsForm } from "./components/AddPlantsForm";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        
        <AppStack.Screen name="BemVindo" component={BemVindo} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="add" component={AddPlantsForm} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
