import { useMutation } from "@tanstack/react-query";
import { API } from "../../../API/api";

interface IOtpData {
  otp: string;
  email: string;
}
const verifyUserOtp = async (otpData: IOtpData) => {
  const response = await API.post(`/user/otp-verify`, otpData);
  return response.data;
};
const useVerification = ({ onSuccess }: { onSuccess: any }) => {
  return useMutation({
    mutationFn: verifyUserOtp,
    onSuccess: onSuccess,
  });
};
export { useVerification };
