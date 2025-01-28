import React from "react";
import "../styles/leftPanel.css";

const LeftPanel = ({ setCurrentSection }) => {
  return (
    <div className="left_panel">
      <button onClick={() => setCurrentSection('gerer-velos')}>Gérer les vélos</button>
      <button onClick={() => setCurrentSection('etat-velos')}>État des vélos</button>
      <button onClick={() => setCurrentSection('map')}>Afficher la map</button>
    
    </div>
  );
};

export default LeftPanel;
