import { combineReducers } from "redux";
import authReducer from "./reducers/authState";
import userReducer from "./reducers/customerState";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
