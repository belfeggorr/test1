// types/IMatch.ts
export interface Player {
  name: string;
  kills: number;
}

export interface IMatch {
  id: string;
  score1: number;
  score2: number;
  status: 'not_started' | 'live' | 'finished';
  team1: Player[];  // Соответствует вашему Match.team1
  team2: Player[];  // Соответствует вашему Match.team2
}