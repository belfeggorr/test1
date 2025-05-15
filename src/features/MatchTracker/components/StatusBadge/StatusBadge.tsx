import React from "react";

type Status = "live" | "finished" | "not_started";

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    const baseStyle = {
      color: "#ffffff",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px",
      lineHeight: "1.25",
      display: "inline-block",
      fontFamily: "Inter, sans-serif",
    };

    switch (status) {
      case "live":
        return {
          ...baseStyle,
          backgroundColor: "#22c55e", // green-500
        };
      case "finished":
        return {
          ...baseStyle,
          backgroundColor: "#ef4444", // red-500
        };
      case "not_started":
        return {
          ...baseStyle,
          backgroundColor: "#6b7280", // gray-500
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: "#71717a", // zinc-500
        };
    }
  };

  const getLabel = () => {
    switch (status) {
      case "live":
        return "Live";
      case "finished":
        return "Finished";
      case "not_started":
        return "Not Started";
      default:
        return "Unknown";
    }
  };

  return <span style={getStatusStyles()}>{getLabel()}</span>;
};

export default StatusBadge;