import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 10,
  },

  text: {
    color: "black",
    fontWeight: "bold",
    padding: "2%",
    fontSize: 16,
  },
  box: {
    paddingLeft: "2%",
  },
  image: {
    height: 20,
    width: 20,
    marginRight: "5%",
    alignSelf: "center",
    borderRadius: 4,
    tintColor: "#888",
  },
  detailBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailText: { color: "#888", fontSize: 16 },
});

export function DetailHeader() {
  return (
    <>{Platform.OS === "ios" ? <DetailIosHeader /> : <DetailAndriodHeader />}</>
  );
}
function DetailAndriodHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.detailBox} onPress={navigation.goBack}>
        <Image
          source={require("../../assets/backCaret.png")}
          style={styles.image}
        />
        <Text style={styles.detailText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function DetailIosHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.detailBox} onPress={navigation.goBack}>
        <Image
          source={require("../../assets/backCaret.png")}
          style={styles.image}
        />
        <Text style={styles.detailText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
