import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import studentService from "./studentService";

const initialState = {
  student: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getStudentDetails = createAsyncThunk(
  "student/getStudentDetails",
  async (_, thunkAPI) => {
    try {
      return await studentService.getStudentDetails();
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
        state.isLoading = true;
      })
      .addCase(getStudentDetails.fulfilled, (state, action) => {
        state.student = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudentDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default studentSlice.reducer;
