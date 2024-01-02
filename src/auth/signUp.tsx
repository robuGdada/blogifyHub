import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSignUpHook } from "../hooks/mutationHook/useSignUpHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { modalStore } from "../../store/modalStore";
import { RootStackParamList } from "../components/navigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SignUpForm = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSignUpHook({
    onSuccess: async (res: { token: string }) => {
      console.log(res.token);

      try {
        if (res.token) {
          AsyncStorage.setItem("jwtToken", res.token);
          modalStore.setLoggedIn();
        }
      } catch (E) {
        console.log(E);
      }
    },
    onError: (res: string) => {
      console.log({ res });
    },
  });

  const handleSignUp = () => {
    console.log("Signing up with:", username, email, password);
    mutate({ username, email, password });
    navigation.navigate("otpVerify", { email });
  };

  const handleBackToSignIn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBackToSignIn}>
        <Text style={styles.backToSignInText}>Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backToSignInText: {
    marginTop: 10,
    color: "#007bff",
    fontSize: 16,
  },
});

export { SignUpForm };
