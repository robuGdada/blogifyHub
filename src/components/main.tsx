import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { Card } from "./card";
import { Iblog, useBlogQuery } from "../hooks/queryHook/useBlogQuery";
import { RootStackScreenProps } from "./navigator";
import { useNavigation } from "@react-navigation/native";
import { HeaderBlog } from "./headerBlog";

export function BlogData() {
  const {
    data: blogData,
    isLoading,
    isError: noData,
    error,
    fetchNextPage,
  } = useBlogQuery("");

  const blogFlatData = blogData?.pages?.flatMap((a) => a);

  const navigation =
    useNavigation<RootStackScreenProps<"Main">["navigation"]>();

  const renderBlogData: ListRenderItem<Iblog> = ({ item: blog }) => {
    return (
      <View style={styles.container}>
        <Card
          onPress={() =>
            navigation.navigate("Details", {
              id: blog.id,
              title: blog.title,
              description: blog.description,
              thumbImageUrl: blog.thumbImageUrl,
              category: blog?.category,
              user: blog?.user.username,
            })
          }
          key={blog.id}
          title={blog?.title}
          description={blog?.description}
          image={blog?.thumbImageUrl as string}
          category={blog?.category?.name}
          user={blog?.user.username}
        />
      </View>
    );
  };
  return (
    <View>
      {isLoading ? (
        <Text style={{ color: "white" }}>isLoading....</Text>
      ) : noData ? (
        <Text
          style={{ color: "white", justifyContent: "center", fontSize: 18 }}
        >
          {`error sir ${error.message}`}
        </Text>
      ) : blogData ? (
        <FlatList
          data={blogFlatData}
          renderItem={renderBlogData}
          onEndReached={() => {
            console.log("end......");
            fetchNextPage();
          }}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={<HeaderBlog />}
          keyExtractor={(blog: Iblog) => blog.id.toString()}
        />
      ) : (
        ""
      )}
    </View>
  );
}

export function Main() {
  return (
    <View style={styles.container}>
      <BlogData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141624",
    flexDirection: "column",
    paddingTop: 10,
    gap: 10,
  },
});
