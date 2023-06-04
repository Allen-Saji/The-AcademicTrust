import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resultService from "./resultService";

const initialState = {
  marksAndGrades: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchMarksAndGrades = createAsyncThunk(
  "result/fetchMarksAndGrades",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await resultService.getMarksandGrades(data, token);
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

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarksAndGrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMarksAndGrades.fulfilled, (state, action) => {
        state.marksAndGrades = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMarksAndGrades.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.isLoading = false;
      });
  },
});

export default resultSlice.reducer;
