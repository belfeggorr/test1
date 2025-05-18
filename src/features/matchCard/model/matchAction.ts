import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMatches } from "../lib/mocks/matchService"; // Импорт мокового сервиса

// Получение списка матчей
export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async (_, { rejectWithValue }) => {
    try {
      // Используем моковый сервис
      const data = await getMatches();
      return data; // Возвращаем данные из мокового сервиса
    } catch (error) {
      return rejectWithValue("Ошибка при загрузке матчей");
    }
  }
);
