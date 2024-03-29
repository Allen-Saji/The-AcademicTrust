import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import institutionService from "./institutionService";

const initialState = {
  institutions: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const fetchInstitutions = createAsyncThunk(
  "institutions/fetchInstitutions",
  async () => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      const data = await institutionService.getInstitutions();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch institutions");
    }
  }
);

export const addInstitution = createAsyncThunk(
  "institutions/addInstitution",
  async (data, thunkAPI) => {
    try {
      const response = await institutionService.addInstitution(data);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const institutionSlice = createSlice({
  name: "institutions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstitutions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchInstitutions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.institutions = action.payload;
      })
      .addCase(fetchInstitutions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(addInstitution.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(addInstitution.fulfilled, (state, action) => {
        state.isLoading = false;
        state.institutions.push(action.payload);
      })
      .addCase(addInstitution.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const {} = institutionSlice.actions;

export default institutionSlice.reducer;
