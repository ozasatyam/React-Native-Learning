import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  Touchable,
  View,
} from "react-native";

const logo = require("./assets/favicon.png");
export default function App() {
  const [module, setModule] = useState(false);
  return (
    <View style={{ backgroundColor: "pink", flex: 1, padding: 30 }}>
      <Button title="Click Me" onPress={() => console.log("click")} />
      <Pressable onPress={() => setModule(!module)}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 100, height: 100 }}
        />
      </Pressable>
      <Modal
        visible={module}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModule(false)}
      >
        <View style={{ backgroundColor: "white", flex: 1, padding: 30 }}>
          <Text>Hello World!</Text>
          <Button title="Close" onPress={() => setModule(false)} />
        </View>
      </Modal>
    </View>
  );
}
