import { createContext } from "react";
import axios from "axios";
const baseurl = "http://localhost:8080/";

export const ApiContext = createContext([]);

export function ApiProvider({ children }) {
  const createUser = (data) => {
    axios
      .post(baseurl + "usuarios/registro", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const login = (data) => {
    axios
      .post(baseurl + "usuarios/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ApiContext.Provider value={{ createUser, login }}>
      {children}
    </ApiContext.Provider>
  );
}
