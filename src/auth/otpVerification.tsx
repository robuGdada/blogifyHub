import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useVerification } from "../hooks/mutationHook/useVerification";
import { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { modalStore } from "../../store/modalStore";
import { RootStackParamList } from "../components/navigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  numberPad: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 5,
  },
});
export const OtpVerifcation = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "otpVerify">>();
  const [otpValue, setOtpValue] = useState("");
  const email = params?.email;
  const token = params?.token;

  const { mutate } = useVerification({
    onSuccess: async () => {
      console.log({ token, email });
      AsyncStorage.setItem("jwtToken", token);
      modalStore.setToken(token);
    },
  });
  function onHandleSubmit() {
    mutate({ otp: otpValue, email: email });
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Verify Your Otp</Text>

        <Text>Otp</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.numberPad}
          value={otpValue}
          onChangeText={(text) => setOtpValue(text)}
        ></TextInput>
        <Button title="submit" onPress={onHandleSubmit} />
      </View>
      <Button
        title="back to signup"
        onPress={() => navigation.navigate("signUp")}
      />
    </View>
  );
};
