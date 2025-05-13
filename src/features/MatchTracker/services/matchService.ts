import { Match } from "../types";

const mockData: Match[] = [
  {
    id: "1",
    score1: 0,
    score2: 0,
    status: "live",
    team1: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
    team2: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
  },
  {
    id: "2",
    score1: 10,
    score2: 8,
    status: "finished",
    team1: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
    team2: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
  },
  {
    id: "3",
    score1: 5,
    score2: 5,
    status: "not_started",
    team1: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
    team2: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
  },
  {
    id: "4",
    score1: 1,
    score2: 8,
    status: "finished",
    team1: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
    team2: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
  },
  {
    id: "5",
    score1: 5,
    score2: 4,
    status: "not_started",
    team1: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
    team2: [
      { name: "User 1", kills: 4 },
      { name: "User 2", kills: 4 },
      { name: "User 3", kills: 4 },
    ],
  },
];

const getMatches = async (): Promise<Match[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockData), 500));
};

export default { getMatches };
