import axios from "axios";
import { Login, Register } from "../@types/services/auth.type";

const login: Login = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:3001/auth/login", {
      username,
      password,
    });

    return res;
  } catch (error: any) {
    console.log(error);
  }
};

const register: Register = async (username, email, password) => {
  try {
    const res = await axios.post("http://localhost:3001/auth/register", {
      username,
      email,
      password,
    });

    return res;
  } catch (error: any) {
    console.log(error);
  }
};

export { login, register };
