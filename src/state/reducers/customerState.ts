import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerState } from "../../@types/state/reducers/customerState.type";

const initialCustomerState: CustomerState = {
  id: null,
  name: null,
  email: null,
  phone: null,
  address: null,
  cpf: null,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    setCustomer: (
      state: CustomerState,
      action: PayloadAction<CustomerState>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.cpf = action.payload.cpf;
    },
    clearCustomer: (state: CustomerState) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.phone = null;
      state.address = null;
      state.cpf = null;
    },
  },
});

export const { setCustomer, clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;
