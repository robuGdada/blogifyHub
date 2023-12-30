import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSignInMutation } from "../hooks/mutationHook/useSignInHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { modalStore } from "../../store/modalStore";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate } = useSignInMutation({
    onSuccess: async (res: { token: string }) => {
      try {
        if (res.token) {
          AsyncStorage.setItem("jwtToken", res.token);
          navigation.navigate("Main");
          modalStore.setLoggedIn();
          modalStore.signInModal.setOpen(false);
        }
      } catch (E) {
        console.log(E);
      }
    },
    onError: (error: any) => {
      console.log({ error: error.errorType });
      // if (error) {
      //   const { errorType, message } = error;
      //   setErrorMessage(message);

      //   if (errorType === "USER_NOT_FOUND") {
      //     setErrorMessage(" Please sign up.User not found ");
      //   } else if (errorType === "INVALID_CREDENTIALS") {
      //     setErrorMessage("Password doesn't match");
      //   } else if (errorType === "USER_NOT_VERIFIED") {
      //     setErrorMessage("We have sent you a mail.pls,verify your account");
      //   }
      // } else {
      //   setErrorMessage("An unexpected error occurred.");
      // }
    },
  });

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
    mutate({ email, password });
  };

  const handleSignUp = () => {
    console.log("Navigate to sign-up screen or perform sign-up");
    navigation.navigate("signUp");
  };

  const handleForgotPassword = () => {
    console.log("Handle forgot password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.additionalOptions}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.additionalText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.additionalText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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
  additionalOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  additionalText: {
    color: "#007bff",
    fontSize: 16,
    paddingLeft: 4,
  },
});

export { SignInForm };
