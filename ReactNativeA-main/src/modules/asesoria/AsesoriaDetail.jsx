import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image } from "@rneui/base";
export default function AsesoriaDetail(props) {
  const { params } = props.route;
  console.log(params);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: params.img }}
        style={{ width: 200, height: 200, borderRadius: 16, marginBottom: 16 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 16 }}>
            {params.name}
          </Text>
          <Text style={{ fontSize: 12 }}>{params.description}</Text>
        </View>
        <Text style={{ color: "blue" }}>{params.price}</Text>
      </View>
      <Text>Colores</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.color}></View>
        <View style={styles.color2}></View>
      </View>
      <Text>Cantidad</Text>
      <Button size="sm" color="primary" title="Agregar al carrito" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
    marginRight: 16,
  },
  color2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "green",
    marginRight: 16,
  },
});
