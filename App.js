import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logo = require("./assets/favicon.png");
export default function App() {
  return (
    <View style={{ backgroundColor: "pink", flex: 1, padding: 30 }}>
      <ScrollView>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 300, height: 300 }}
        ></Image>
        <Text>
          1) Create an Interface that is easy to learn and use :- The design of
          the interface is considered as the most fundamental key. The interface
          should be easy to learn and use. 2) Provide users with help and
          feedback :- Feedbacks and helps enhances user experience and helps in
          error recovery. 3) Enhance user productivity :- User’s productivity is
          one of the most important and crucial step for positive user
          experience. 4) Focus on data entry screens :- Data entry screens are
          the screens through which the users mostly communicate with the
          system. Hence, it is consider an important key point. 5) Use
          validation rules :- Data integrity and accuracy can be maintained
          using validation rules. 6) Manage data effectively :- Data should be
          managed properly to ensure well functioning interface. 7) Provide
          flexibility :- Offering flexibility to the users can help enhance the
          usability of the users. 8) Enhance the interface :- Once the interface
          is already developed, the next step is to continuously enhance the
          user experience by updating and improving the interface. 9) Create an
          attractive layout and design :- Creating attractive user friendly
          layout can be important but functionality is more important. 10)
          Reduce input volumes :- Input volumes can be helpful and beneficia to
          the system, however other guidelines can be ranked above with higher
          priority as usability and feedbacks are more important.
        </Text>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 300, height: 300 }}
        ></Image>
      </ScrollView>
    </View>
  );
}
