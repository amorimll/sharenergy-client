import axios from "axios";
import { Login, Register } from "../@types/services/auth.type";

const login: Login = async (username, password) => {
  const res = await axios.post("http://localhost:3001/auth/login", {
    username,
    password,
  });

  return res;
};

const register: Register = async (username, email, password) => {
  const res = await axios.post("http://localhost:3001/auth/register", {
    username,
    email,
    password,
  });

  return res;
};

export { login, register };
