import axios from "axios";
import { Login, Register } from "../@types/services/auth.type";

const login: Login = async (username, password) => {
  const res = await axios.post("https://sharenergy-server-production.up.railway.app/auth/login", {
    username,
    password,
  });

  return res;
};

const register: Register = async (username, email, password) => {
  const res = await axios.post("https://sharenergy-server-production.up.railway.app/auth/register", {
    username,
    email,
    password,
  });

  return res;
};

export { login, register };
