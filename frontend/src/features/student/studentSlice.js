import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import studentService from "./studentService";

const initialState = {
  student: null,
};

export const getStudentDetails = createAsyncThunk(
  "student/getStudentDetails",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await studentService.getStudentDetails(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentDetails: (state, action) => {
      state.student = action.payload;
    },
    logout: (state) => {
      state.student = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentDetails.pending, (state) => {
        state.student = null;
      })
      .addCase(getStudentDetails.fulfilled, (state, action) => {
        state.student = action.payload;
      });
  },
});

export default studentSlice.reducer;
