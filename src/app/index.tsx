import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Index() {
  const [screenText, setScreenText] = useState("Explore Products");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>

      <Text style={styles.info}>Name: Nabeeha Islam</Text>
      <Text style={styles.info}>Roll No: 23i3015</Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => setScreenText("Products Loaded")}
        accessibilityRole="button">
        <Text style={styles.buttonText}>Load Products</Text>
      </Pressable>

      <Text style={styles.message}>{screenText}</Text>
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

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 12,
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
  },
});