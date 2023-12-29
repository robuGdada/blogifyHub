import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Main } from "./src/components/main";
import { Header } from "./src/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Main />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727e6",
  },
});
