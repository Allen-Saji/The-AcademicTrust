import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import resultReducer from "../features/result/resultSlice";
import institutionReducer from "../features/institution/institutionSlice";
import courseReducer from "../features/course/courseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    results: resultReducer,
    institutions: institutionReducer,
    courses: courseReducer,
  },
});
