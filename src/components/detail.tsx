import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackScreenProps } from "./navigator";
import RenderHTML from "react-native-render-html";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727e6",
  },
  box: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 30,
    gap: 9,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  category: {
    color: "white",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#888",
    backgroundColor: "#888",
    width: 120,
    textAlign: "center",
    marginBottom: 15,
    marginLeft: 15,
  },
  desc: {
    color: "#667",
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 20,
  },
  date: {
    color: "#BFBFBF",
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 20,
  },
  image: {
    height: 480,
    width: 380,
    alignSelf: "center",
    borderRadius: 5,
  },
});

function Details({ route }: RootStackScreenProps<"Details">) {
  const images = {
    uri: `${route.params.thumbImageUrl}`,
  };

  return (
    <ScrollView style={styles.container} key={route.params.id}>
      <View style={styles.box}>
        <Text style={styles.text}>{route.params.title}</Text>
      </View>
      <Text style={styles.category}>{route?.params?.category?.name}</Text>
      <Image style={styles.image} source={images} resizeMode="cover" />
      <RenderHTML
        source={{ html: route.params.description }}
        contentWidth={400}
        baseStyle={{
          color: "white",
          fontSize: 18,
          paddingLeft: 20,
          paddingRight: 10,
        }}
      ></RenderHTML>
    </ScrollView>
  );
}

export { Details };
