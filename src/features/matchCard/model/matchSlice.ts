import { createSlice } from "@reduxjs/toolkit";
import { fetchMatches } from "./matchAction";
import { IMatchState } from "./types/IMatchStoreState";

const initialState: IMatchState = {
  matches: [],
  isLoading: false,
  error: "",
  lastUpdated: null,
};

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.matches = action.payload;
        state.isLoading = false;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export default matchSlice.reducer;
