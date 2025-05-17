// types/IMatch/IMatchState.ts
import { IMatch } from "./IMatch";

export interface IMatchState {
  matches: IMatch[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}
