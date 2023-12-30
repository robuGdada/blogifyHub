import { useMutation } from "@tanstack/react-query";
import { API } from "../../../API/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ISignInData {
  password: string;
  email: string;
  id?: number;
}

const signin = async (data: ISignInData) => {
  try {
    const jwtToken = await AsyncStorage.getItem("jwtToken");
    if (jwtToken) {
      const response = await API.post(`/user/signin`, data, {
        headers: { token: jwtToken },
      });
      return response.data;
    } else {
      throw new Error("jwtToken not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error in signin:", error);
    throw error;
  }
};

const useSignInMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: any;
  onError?: any;
}) => {
  return useMutation({
    mutationFn: signin,
    onSuccess,
    onError,
  });
};

export { useSignInMutation };
