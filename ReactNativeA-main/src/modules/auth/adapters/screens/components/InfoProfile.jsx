import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UsuarioAvatar from "../../../../../../assets/usuario.png";
import { Avatar } from "@rneui/base";
import { auth, storage } from "../../../../../config/util/firebaseConnection";
import { updateProfile } from "firebase/auth";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Loading from "../../../../../kernel/components/Loading";
export default function InfoProfile(props) {
  const {
    infoUser: { photoURL, displayName, email, uid },
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  const uploadPhotoUrl = async () => {
    getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
      const response = updateProfile(auth.currentUser, { photoURL: url });
      alert("Foto de perfil actualizada");
    });
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, `avatar/${uid}`);
      return uploadBytes(storageRef, blob);
    } catch (error) {
      console.log("error", error);
    }
  };

  const changeAvatar = async () => {
    const resultPermission = await MediaLibrary.requestPermissionsAsync();
    if (resultPermission.status !== "denied") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        //base64: true,
      });
      if (!result.canceled) {
        setIsVisible(true);
        try {
          await uploadImage(result.assets[0].uri);
          await uploadPhotoUrl();
          alert("Foto de perfil actualizada");
        } catch (error) {
          alert("Error al subir la imagen");
        } finally {
          setIsVisible(false);
        }
      } else {
        alert("Es necesario aceptar los permisos de la galería");
      }
    }

    return (
      <View style={styles.row}>
        <Avatar
          size={64}
          rounded
          source={photoURL ? { uri: photoURL } : UsuarioAvatar}
        >
          <Avatar.Accessory size={23} />
        </Avatar>
        <View style={{ flexDirection: "column", marginLeft: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {displayName || "Anónimo"}
          </Text>
          <Text style={{ fontSize: 12 }}>
            {email || "No hay correo electrónico"}
          </Text>
        </View>
        <Loading visible={isVisible} title="Cambiando foto de perfil" />
      </View>
    );
  };
  return (
    <View style={styles.row}>
      <Avatar
        size={64}
        rounded
        source={photoURL ? { uri: photoURL } : UsuarioPhoto}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View style={styles.colum}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {displayName || "Anónimo"}
        </Text>
        <Text>{email || ""}</Text>
      </View>
      <Loading visible={isVisible} title="Cambiando foto de perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 16,
  },
});
