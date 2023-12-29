import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>hello </Text>
      <Text style={{ color: "white" }}>hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
});
