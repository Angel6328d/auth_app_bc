import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Main() {
  const router = useRouter();

  const handleLogout = () => {
    
    console.log("User logged out");
    
    router.replace('/sign-in');
  };

  return (
    <View>
      <Text>Auth App</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}