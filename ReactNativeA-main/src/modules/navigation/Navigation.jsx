import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./stack/AuthStack";
import HomeStack from "./stack/HomeStack";
import FavoritesStack from "./stack/FavoritesStack";
import AsesoriaStack from "./stack/AsesoriaStack";
import { Icon } from "@rneui/base";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="AsesoriaStack"
          component={AsesoriaStack}
          options={{ title: "Asesoria" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material-community";

  switch (routeName) {
    case "HomeStack":
      iconName = focused ? "home" : "home-outline";
      break;
    case "FavoritesStack":
      iconName = focused ? "heart" : "heart-outline";
      break;
    case "AuthStack":
      iconName = focused ? "account" : "account-outline";
      break;
      case "AsesoriaStack":
      iconName = focused ? "pen" : "pencil-outline";
      break;
  }
  return { iconName, iconType };
};
