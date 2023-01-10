import axios from "axios";
import {
  GetAllCustomers,
  CreateCustomer,
  EditCustomer,
  DeleteCustomer,
} from "../@types/services/customers.type";

const getAllCustomers: GetAllCustomers = async (localToken, sessionToken) => {
  try {
    if (localToken) {
      const res = await axios.get("http://localhost:3001/customer", {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      });

      if (res) {
        return res;
      }
    } else {
      const res = await axios.get("http://localhost:3001/customer", {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      if (res) {
        return res;
      }
    }
  } catch (error: any) {
    console.log(error);
  }
};

const createCustomer: CreateCustomer = async (
  localToken,
  sessionToken,
  name,
  email,
  phone,
  address,
  cpf
) => {
  try {
    if (localToken) {
      const res = await axios.post(
        "http://localhost:3001/customer",
        {
          name,
          email,
          phone,
          address,
          cpf,
        },
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      return res;
    } else {
      const res = await axios.post(
        "http://localhost:3001/customer",
        {
          name,
          email,
          phone,
          address,
          cpf,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      );
      return res;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const editCustomer: EditCustomer = async (
  localToken,
  sessionToken,
  id,
  name,
  email,
  phone,
  address,
  cpf
) => {
  try {
    if (localToken) {
      const res = await axios.patch(
        `http://localhost:3001/customer/${id}`,
        {
          name,
          email,
          phone,
          address,
          cpf,
        },
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      return res;
    } else {
      const res = await axios.patch(
        `http://localhost:3001/customer/${id}`,
        {
          name,
          email,
          phone,
          address,
          cpf,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      );
      return res;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const deleteCustomer: DeleteCustomer = async (localToken, sessionToken, id) => {
  try {
    if (localToken) {
      const res = await axios.delete(`http://localhost:3001/customer/${id}`, {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      });
      return res;
    } else {
      const res = await axios.delete(`http://localhost:3001/customer/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      return res;
    }
  } catch (error: any) {
    console.log(error);
  }
};

export { getAllCustomers, createCustomer, editCustomer, deleteCustomer };
