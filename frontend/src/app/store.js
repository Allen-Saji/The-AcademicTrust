import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import resultReducer from "../features/result/resultSlice";
import institutionReducer from "../features/institution/institutionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    result: resultReducer,
    institution: institutionReducer,
  },
});
