import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../@types/state/reducers/authState.type";

const initialAuthState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setLogin: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state: AuthState) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
