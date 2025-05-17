export type Player = {
  name: string;
  kills: number;
};

export type Match = {
  id: string;
  score1: number;
  score2: number;
  status: "live" | "finished" | "not_started";
  team1: Player[];
  team2: Player[];
};
export type MatchCardProps = {
  match: Match;
};
