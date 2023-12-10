import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const baseurl = "http://localhost:8080/";

export const ApiContext = createContext([]);

export function ApiProvider({ children }) {
  const [user, setUser] = useState({ nome: "", id: "", papel: "", email: "" });

  useEffect(() => {
    let userStore = localStorage.getItem("user");
    if (userStore !== null) {
      setUser(JSON.parse(userStore));
    }
  }, []);

  const createUser = async (data) => {
    try {
      await axios.post(baseurl + "usuarios/registro", data);
      return "success";
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  const getProducts = async () => {
    try {
      let resp = await axios.get(baseurl + "anuncios/listar");
      return resp.data;
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  const createProduct = async (data) => {
    try {
      await axios.post(baseurl + "anuncios/criar", data);
      return "success";
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  const login = async (data) => {
    try {
      let response = await axios.post(baseurl + "usuarios/login", data);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return "success";
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  return (
    <ApiContext.Provider
      value={{ createUser, login, user, createProduct, getProducts }}
    >
      {children}
    </ApiContext.Provider>
  );
}
