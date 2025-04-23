import axios from "axios";
import SecureStorage from "react-secure-storage";
import api from "../admin/auth/api";

const apiBase = "https://api.perfona.uz/";

export const PerfonaAdmin = {
  authRegister: async (obj) => {
    const response = await axios.post(`${apiBase}api/users/register/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    console.log(response);
    return response.status;
  },

  authLogin: async (obj) => {
    const response = await axios.post(`${apiBase}api/users/login/`, obj, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const { access, refresh } = response.data.data;
    console.log("accessToken", response.data);
    SecureStorage.setItem("accessToken", access);
    SecureStorage.setItem("refreshToken", refresh);

    return response.data;
  },

  isHaveContent: async () => {
    const response = await api.get(`api/users/me/`);

    return response.data;
  },

  categoriesList: async () => {
    const response = await api.get(`api/contents/categories/`);

    return response.data;
  },
  createChannal: async (value) => {
    const token = SecureStorage.getItem("accessToken");
    const response = await axios.post(
      `${apiBase}api/contents/channels/`,
      value,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  createCourse: async (value) => {
    const token = SecureStorage.getItem("accessToken");
    const response = await axios.post(`${apiBase}api/courses/courses/`, value, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  addTariff: async (value) => {
    const token = SecureStorage.getItem("accessToken");
    const response = await api.post(`${apiBase}api/payments/tariffs/`, value, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },
};
