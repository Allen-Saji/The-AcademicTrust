import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import resultReducer from "../features/result/resultSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    result: resultReducer,
  },
});
