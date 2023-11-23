import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./screens/Screen1";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EditTask from "./screens/EditTask";
import CRUDWithAPI from "./screens/CRUDWithAPI";
import UpdateTaskAPI from "./screens/UpdateTaskAPI";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        {/* //       <Stack.Screen name="Screen1" component={Screen1} /> */}
        {/* //       <Stack.Screen name="Edit" component={EditTask} /> */}
        <Stack.Screen name="CRUD" component={CRUDWithAPI}></Stack.Screen>
        <Stack.Screen name="Update" component={UpdateTaskAPI}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
    // <CRUDWithAPI />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
