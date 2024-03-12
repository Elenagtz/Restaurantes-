import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBqIkj8303b7OfndO6_zvrQTThVYzV0jWA",
  authDomain: "restaurantea-7a932.firebaseapp.com",
  projectId: "restaurantea-7a932",
  storageBucket: "restaurantea-7a932.appspot.com",
  messagingSenderId: "397657361032",
  appId: "1:397657361032:web:a434a91324342833ba6d3d",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
