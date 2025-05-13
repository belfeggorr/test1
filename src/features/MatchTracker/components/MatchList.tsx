import MatchCard from "./MatchCard";
import { Match } from "../types";
import useMatch from "../hooks/useMatches";

const MatchList = () => {
  const { matches, isLoading, error } = useMatch();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке данных</div>;

  return (
    <div style={{ margin: "0 auto", padding:'0 15px 10px'}} className="space-y-4">
      {matches.map((match: Match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
