import { useMutation } from "@tanstack/react-query";
import { API } from "../../../API/api";

interface IUserData {
  username: string;
  password: string;
  email: string;
}

const createUser = async (newUser: IUserData) => {
  const response = await API.post("/user/signup", newUser);
  return response.data;
};
const useSignUpHook = ({
  onSuccess,
  onError,
}: {
  onSuccess?: any;
  onError?: any;
}) => {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
};
export { useSignUpHook };
