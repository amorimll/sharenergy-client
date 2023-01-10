import axios from "axios";
import { GetUsers } from "../@types/services/users.type";

const getUsers: GetUsers = async (search, page, rowsPerPage) => {
  try {
    if (search == "") {
      const res = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=${rowsPerPage}&seed=abc`
      );
      return res.data.results;
    } else if (search != "") {
      const res = await axios.get(
        `https://randomuser.me/api/?page=${1}&results=1000&seed=abc`
      );
      return res.data.results;
    }
  } catch (error: any) {
    console.log(error);
  }
};

export { getUsers };
