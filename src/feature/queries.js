import axios from "axios";

const api = "https://perfonabackend.pythonanywhere.com";

export const PerfonaAdmin = {
  authRegister: async (obj) => {
    const response = await axios.post(`${api}/account/api/register/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    return response.data;
  },

  authLogin: async (obj) => {
    const response = await axios.post(`${api}/account/api/token/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    return response.data;
  },
};
