import axios from "axios";
import SecureStorage from "react-secure-storage";

const api = "http://95.46.210.69";

export const PerfonaAdmin = {
  authRegister: async (obj) => {
    const response = await axios.post(`${api}/api/account/register/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const { access, refresh } = response.data;
    console.log(response);
    SecureStorage.setItem("accessToken", access);
    SecureStorage.setItem("refreshToken", refresh);
    return response.status;
  },

  authLogin: async (obj) => {
    const response = await axios.post(`${api}/api/account/token/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const { access, refresh } = response.data;
    console.log("accessToken", response.data);
    SecureStorage.setItem("accessToken", access);
    SecureStorage.setItem("refreshToken", refresh);

    //axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    return response.data;
  },
};
