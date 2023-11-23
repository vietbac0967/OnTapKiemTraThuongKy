import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function EditTask({ navigation, route }) {
  const { item } = route.params;
  const dispatch = useDispatch();
  const [task, setTask] = useState(item.name);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
      ></TextInput>
      <Pressable
        style={{ borderRadius: 5, backgroundColor: "green" }}
        onPress={() => {
          dispatch({
            type: "UPDATE_TASK",
            payload: { id: item.id, name: task },
          });
          navigation.goBack();
        }}
      >
        <Text>Update Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
