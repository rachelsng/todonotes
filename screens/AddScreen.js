import React from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { styles } from "./styles.js";
import { useState } from "react";

export default function AddScreen({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text styles={styles.label}>Add your todo</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
      ></TextInput>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => navigation.navigate("Notes", {text})}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
      <Text style={{ marginTop: 40, color: "grey" }}>
        This is what you typed:
      </Text>
      <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
    </View>
  );
}
