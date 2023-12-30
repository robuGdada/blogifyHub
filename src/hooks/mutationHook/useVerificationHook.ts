import { useMutation } from "@tanstack/react-query";
import { API } from "../../../API/api";

const verifyUserToken = async (token: string) => {
  const response = await API.post(`/user/email-confirm`, null, {
    headers: { token: token },
  });
  return response.data;
};
const useEmailVerify = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: verifyUserToken,
    onSuccess: onSuccess,
  });
};
export { useEmailVerify };
