import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CRUDWithAPI({ navigation }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    await fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/tasks")
      .then((response) => response.json())
      .then((json) => {
        setTasks(json);
      });
  };
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const addTask = () => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: task }),
    })
      .then((response) => response.json())
      .then((json) => {
        setTasks([...tasks, json]);
        setTask("");
      });
  };
  const deleteTask = (id) => {
    fetch(`https://653f4b7b9e8bd3be29e02fc1.mockapi.io/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setTasks(tasks.filter((task) => task.id !== id));
      });
  };

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
          style={{ borderRadius: 5, marginHorizontal: 5 }}
          onPress={() => navigation.navigate("Update", { item: task })}
        >
          <Text style={{ fontSize: 12, color: "green" }}>EDIT</Text>
        </Pressable>
        <Pressable onPress={() => deleteTask(task.id)}>
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
      <Pressable style={styles.button} onPress={() => addTask()}>
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
        renderItem={({ item }) => <Item task={item}></Item>}
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
    borderWidth: 1,
    borderColor: "green",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 4,
    marginVertical: 2,
  },
});
