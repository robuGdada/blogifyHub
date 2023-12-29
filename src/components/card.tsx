import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CardProps {
  image: string;
  category: string;
  title: string;
  onPress?: () => void;
  user?: string;
  description: string;
}

const { width: windowWidth } = Dimensions.get("window");
export function Card({
  title,
  description,
  image,
  category,
  user,
  onPress,
}: CardProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.category}>
          <Text style={{ color: "white", fontSize: 16 }}>b/{user}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={{ color: "white", fontSize: 16 }}>{category}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white" }}>...</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={{ color: "white", fontSize: 18 }}>{title}</Text>
        <Text style={{ color: "white", paddingBottom: 10, fontSize: 15 }}>
          {description}
        </Text>
        <Image style={styles.image} source={{ uri: `${image}` }} />
        <View style={styles.voteSection}>
          <TouchableOpacity>
            <Text
              style={{ color: "white", width: 50, fontSize: 16, height: 20 }}
            >
              upvote
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{ color: "white", width: 80, fontSize: 16, height: 20 }}
            >
              downvote
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#272727e6",
    padding: 5,
    width: windowWidth,
    borderWidth: 1,
    gap: 10,
    borderColor: "#272727",
    paddingBottom: 12,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },

  cardContent: { gap: 4 },
  image: {
    height: 300,
    width: 390,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  voteSection: {
    flexDirection: "row",
    gap: 20,
  },
  category: {
    flexDirection: "row",
    gap: 20,
  },
});
