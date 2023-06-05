import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";

export const addCourse = createAsyncThunk(
  "course/addCourse",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await courseService.addCourse(data, token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
