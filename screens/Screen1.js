import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Screen1({ navigation }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // lay tasks from store
  // set tasks from store
  //
  const Item = ({ task }) => (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>{task.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{ borderRadius: 5 }}
          onPress={() => navigation.navigate("Edit", { item: task })}
        >
          <Text style={{ fontSize: 12, color: "green" }}>EDIT</Text>
        </Pressable>
        <Pressable
          style={{}}
          onPress={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
        >
          <Text style={{ fontSize: 12, color: "red" }}>DELETE</Text>
        </Pressable>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        TODO APP
      </Text>
      <TextInput
        value={task}
        style={styles.textInput}
        placeholder="Enter task"
        onChangeText={(text) => setTask(text)}
      ></TextInput>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch({
            type: "ADD_TASK",
            payload: { id: tasks.length + 1, name: task },
          });
          setTask("");
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "center",
            padding: 10,
          }}
        >
          ADD TASK
        </Text>
      </Pressable>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Item task={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "green",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
    marginVertical: 5,
  },
});
