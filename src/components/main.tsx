import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "./card";
import { Iblog, useBlogQuery } from "../hooks/queryHook/useBlogQuery";

export function Main() {
  const { data: blogData, isLoading, isError: noData, error } = useBlogQuery();
  console.log({ blogData });
  console.log({ error });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <Text style={{ color: "white" }}>isLoading....</Text>
      ) : blogData ? (
        blogData.map((blog: Iblog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.thumbImageUrl as string}
            category={blog.category.name}
          />
        ))
      ) : noData ? (
        <Text
          style={{ color: "white", justifyContent: "center", fontSize: 18 }}
        >
          {`error sir ${error.message}`}
        </Text>
      ) : (
        ""
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141624",
    paddingTop: 10,
    gap: 10,
  },
});
