import MatchCard from "../MatchCard/MatchCard";
import { Match } from "../../lib/types/types";
import useMatch from "../../lib/hooks/useMatches";

const MatchList = () => {
  const { error, isLoading, matches } = useMatch();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return (
      <div>
        Ошибка: {typeof error === "string" ? error : JSON.stringify(error)}
      </div>
    );
  }

  console.log({
    matches,
  });

  return (
    <div
      style={{ margin: "0 auto", padding: "0 15px 10px" }}
      className="space-y-4"
    >
      {Array.isArray(matches) &&
        matches.map((match: Match) => (
          <MatchCard key={match.id} match={match} />
        ))}
    </div>
  );
};

export default MatchList;
