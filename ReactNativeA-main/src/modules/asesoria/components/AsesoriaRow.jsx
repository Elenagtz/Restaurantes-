import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
export default function AsesoriaRow(props) {
  const { id, name, description, price, action, img, badge } = props;
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.container}>
        <Image
          source={
            img ? { uri: img } : require("../../../../assets/usuario.png")
          }
          style={{ width: 50, height: 50, borderRadius: 50, marginRight: 16 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 12 }}>{description}</Text>
          <Text>{badge}</Text>
        </View>
        <Text style={{ color: "blue" }}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#dde7f3",
    padding: 16,
    opacity: 0.8,
    borderRadius: 12,
    marginBottom: 16,
  },
});
