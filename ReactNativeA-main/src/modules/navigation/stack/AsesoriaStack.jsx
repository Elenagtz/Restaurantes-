import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Asesoria from '../../asesoria/Asesoria';
import AsesoriaDetail from '../../asesoria/AsesoriaDetail';
const Stack = createStackNavigator();
export default function AsesoriaStack() {
  return (
    <Stack.Navigator initialRouteName="UserLogged">
      <Stack.Screen
        name="Asesoria"
        component={Asesoria}
        options={{ title: "Asesoria" }}
      />
      <Stack.Screen
        name="AsesoriaDetail"
        component={AsesoriaDetail}
        options={{ title: "Asesoria detalle" }}
      />
      </Stack.Navigator>
  )
}