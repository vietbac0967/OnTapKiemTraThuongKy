import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function UpdateTaskAPI({ navigation, route }) {
  const { item } = route.params;
  const [task, setTask] = useState(item.name);
  const updateTask = async (id) => {
    try {
      // Update the task in the API
      await fetch(`https://653f4b7b9e8bd3be29e02fc1.mockapi.io/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: task }),
      });

      // Update the UI
      // (setState is asynchronous, but using await ensures it has completed)
      setTask("");
      // Navigate to the next page
      navigation.navigate("CRUD"); // Replace "NextPage" with the name of your next page
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle error if needed
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
      ></TextInput>
      <Pressable
        style={{ borderRadius: 5, backgroundColor: "green" }}
        onPress={() => {
          updateTask(item.id);
        }}
      >
        <Text>Update Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
