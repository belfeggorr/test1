import { useState } from "react";
import StatusBadge from "../StatusBadge/StatusBadge";
import { Player } from "../../lib/types/types";
import { MatchCardProps } from "../../lib/types/types";
import illustrations_role from "./assets/illustrations_role.png";

const MatchCard = ({ match }: MatchCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div
      className="bg-zinc-800 p-4 rounded-lg shadow-md"
      onClick={toggleExpand}
    >
      <div
        style={{
          color: "white",
          marginTop: "5px",
          background: "#0B0E12",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          minHeight: "40px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            position: "absolute",
            left: "16px",
            display: "flex",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{ marginRight: "20px" }}
            src={illustrations_role}
            alt="icon"
          />
          Команда №1
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "8px 0 ",
          }}
        >
          <p style={{ margin: 0 }}>
            {match.score1} : {match.score2}
          </p>
          <StatusBadge status={match.status} />
        </div>

        <p
          style={{
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            right: "16px",
            fontWeight: "bold",
            alignItems: "center",
            display: "flex",
            margin: 0,
          }}
        >
          Команда №2
          <img
            style={{ marginLeft: "20px" }}
            src={illustrations_role}
            alt="icon"
          />
        </p>
      </div>

      {isExpanded && (
        <div
          style={{ color: "white", backgroundColor: "#0B0E12" }}
          className="mt-4 bg-zinc-700 p-3 rounded"
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              paddingBottom: "40px",
              justifyContent: "space-between",
            }}
            className="grid grid-cols-2 gap-4"
          >
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {match.team1.map((user: Player) => (
                <div
                  style={{
                    backgroundColor: "#101318",
                    width: "286px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                  key={user.name}
                >
                  {user.name} — убийства: {user.kills}
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  backgroundColor: "#101318",
                  padding: "10px 50px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "30px",
                  alignItems: "center",
                  width: "86%",
                }}
              >
                <span>Points: +50</span>
                <span>Место: 7</span>
                <span>Всего убийств: 12</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {match.team2.map((user: Player) => (
                <div
                  style={{
                    backgroundColor: "#101318",
                    width: "286px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                  key={user.name}
                >
                  {user.name} — убийства: {user.kills}
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  backgroundColor: "#101318",
                  padding: "10px 50px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "30px",
                  width: "86%",
                  alignItems: "center",
                }}
              >
                <span>Points: +50</span>
                <span>Место: 7</span>
                <span>Всего убийств: 12</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
