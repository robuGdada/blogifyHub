import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727e6",
    width: windowWidth,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    paddingBottom: 20,
  },
  image: { width: 60, height: 60, borderRadius: 60 },
  uploadImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

export function HeaderBlog() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("createblog")}
    >
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          source={require("../../assets/dummyImage.jpg")}
          style={styles.image}
        />
        <TextInput
          style={{ fontSize: 20, alignSelf: "center" }}
          placeholder="Let's start crafting"
          placeholderTextColor={"#888"}
          editable={false}
        ></TextInput>
      </View>
      <Image
        source={require("../../assets/dummyImage.jpg")}
        style={styles.uploadImage}
      />
    </Pressable>
  );
}
