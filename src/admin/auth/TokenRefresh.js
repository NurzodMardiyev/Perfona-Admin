import { useEffect } from "react";
import api from "./api"; // Axios instance
import SecureStorage from "react-secure-storage";
import { useLocation, useNavigate } from "react-router-dom";

const TokenRefresher = () => {
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const refreshToken = SecureStorage.getItem("refreshToken");
      console.log(refreshToken);
      console.log(location.pathname);
      if (!refreshToken) {
        if (location.pathname !== "/") {
          navigate("/");
        }
        return;
      }

      try {
        const response = await api.post("api/users/token/refresh", {
          refresh: refreshToken,
        });
        console.log(response.data);
        const newAccessToken = response.data.data.access;
        const newRefreshToken = response.data.data.refresh;
        SecureStorage.setItem("accessToken", newAccessToken);
        SecureStorage.setItem("refreshToken", newRefreshToken);
        console.log("Yangi access token:", newAccessToken);
        console.log("Yangi Refresh token:", newRefreshToken);
      } catch (error) {
        console.error("Failed to refresh token:", error);
      }
    }, 15 * 60 * 1000); // 15 minut

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default TokenRefresher;
