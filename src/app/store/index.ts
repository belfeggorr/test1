import { combineReducers, configureStore } from "@reduxjs/toolkit";
import matchReducer from "../../features/matches/model/matchSlice";

export const rootReducer = combineReducers({
  matchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
