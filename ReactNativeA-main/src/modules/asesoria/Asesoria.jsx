import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AsesoriaRow from "./components/AsesoriaRow";

export default function Asesoria(props) {
  const { navigation } = props;
  const data = [
    {
      id: 1,
      name: "Silla",
      description: "Silla de oficina",
      price: "$100.00",
      img: "https://cdn-icons-png.flaticon.com/512/2944/2944135.png",
      badge: "Nuevo",
      action: () =>
        navigation.navigate("AsesoriaDetail", {
          id: 1,
          name: "Silla",
          description: "Silla de oficina",
          price: "$100.00",
          img: "https://cdn-icons-png.flaticon.com/512/2944/2944135.png",
          badge: "Nuevo",
        }),
    },
    {
      id: 2,
      name: "PlayStation",
      description: "Consola de video juegos",
      price: "$1000.00",
      img: "https://cdn-icons-png.flaticon.com/512/1694/1694712.png",
      badge: "Nuevo",
      action: () =>
        navigation.navigate("AsesoriaDetail", {
          id: 2,
          name: "PlayStation",
          description: "Consola de video juegos",
          price: "$1000.00",
          img: "https://cdn-icons-png.flaticon.com/512/1694/1694712.png",
          badge: "Nuevo",
        }),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <AsesoriaRow
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.img}
            badge={item.badge}
            action={item.action}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
