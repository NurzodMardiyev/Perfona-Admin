import axios from "axios";
import SecureStorage from "react-secure-storage";

const api = axios.create({
  baseURL: "https://perfonabackend.pythonanywhere.com",
});

// Har bir so‘rovga access token qo‘shish
api.interceptors.request.use(
  async (config) => {
    const token = SecureStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Agar 401 (Unauthorized) bo'lsa, tokenni yangilash
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Access token eskirgan, yangilanmoqda...");

      const refreshToken = SecureStorage.getItem("refreshToken");

      if (!refreshToken) {
        console.log("Refresh token yo‘q, login sahifasiga yo‘naltirilmoqda...");
        window.location.href = "/";
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          "https://perfonabackend.pythonanywhere.com/account/api/token/refresh/",
          { refresh: refreshToken }
        );

        const newAccessToken = response.data.access;
        SecureStorage.setItem("accessToken", newAccessToken);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;

        // Oldingi so‘rovni qayta yuborish
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (refreshError) {
        console.error("Refresh token eskirgan yoki noto‘g‘ri:", refreshError);
        SecureStorage.removeItem("accessToken");
        SecureStorage.removeItem("refreshToken");
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
