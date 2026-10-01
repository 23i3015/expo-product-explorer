import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index() {
  const [message, setMessage] = useState("Welcome to Product Explorer");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>

      <Text style={styles.info}>Name: Nabeeha Islam</Text>
      <Text style={styles.info}>Roll No: 23i3015</Text>

      <Button
        title="Explore Products"
        onPress={() => setMessage("Products Loaded!")}
      />

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 8,
  },

  message: {
    fontSize: 16,
    marginTop: 20,
  },
});