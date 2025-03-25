import axios from "axios";
import SecureStorage from "react-secure-storage";

const api = "https://perfonabackend.pythonanywhere.com";

export const PerfonaAdmin = {
  authRegister: async (obj) => {
    try {
      const response = await axios.post(`${api}/account/api/register/`, obj, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      console.log("access ok");
      const { access, refresh } = response.data;
      SecureStorage.setItem("accessToken", access);
      SecureStorage.setItem("refreshToken", refresh);

      axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
    } catch (error) {
      console.log("Login Failed", error);
    }
  },

  authLogin: async (obj) => {
    const response = await axios.post(`${api}/account/api/token/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const { access, refresh } = response.data;
    console.log("accessToken", response.data);
    SecureStorage.setItem("accessToken", access);
    SecureStorage.setItem("refreshToken", refresh);

    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    return response.data;
  },
};
