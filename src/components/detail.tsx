import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackScreenProps } from "./navigator";
import RenderHTML from "react-native-render-html";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  video: {
    width: 400,
    height: 160,
    alignSelf: "center",
    borderRadius: 5,
  },
  box: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
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

        <Text style={styles.text}>{route?.params?.category?.name}</Text>
      </View>
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
