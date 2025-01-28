import React from "react";
import "../styles/leftPanel.css";

const LeftPanel = () => {
  return (
    <div className="left_panel">
      <button id="disconnect">gerer les vélos </button>
      <button id="disconnect">états des vélos </button>
      <button id="disconnect">afficher la map </button>
    </div>
  );
};

export default LeftPanel;