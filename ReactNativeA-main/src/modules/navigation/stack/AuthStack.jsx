import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../auth/adapters/screens/Login";
import CreateAccount from "../../auth/adapters/screens/CreateAccount";
import UserGuest from "../../auth/adapters/screens/UserGuest";
import UserLogged from "../../auth/adapters/screens/UserLogged";
import Profile from '../../auth/adapters/screens/Profile';  
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="UserLogged">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Inicio de sesión" }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Crea tu cuenta" }}
      />
      <Stack.Screen
        name="UserGuest"
        component={UserGuest}
        options={{ title: "Bienvenido" }}
      />
      <Stack.Screen
        name="UserLogged"
        component={UserLogged}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Mi Perfil" }}
      />
    </Stack.Navigator>
  );
}
