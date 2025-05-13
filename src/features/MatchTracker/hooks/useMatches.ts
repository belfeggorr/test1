import { useEffect, useState } from "react";
import { Match } from "../types";
import matchService from "../services/matchService";

const useMatch = (): {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
} => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await matchService.getMatches();
        setMatches(data);
      } catch (err) {
        setError("Ошибка при загрузке матчей");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { matches, isLoading, error };
};
export default useMatch;
