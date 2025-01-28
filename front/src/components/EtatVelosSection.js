import React from 'react';
import "../styles/EtatVelosSection.css";

const EtatVelosSection = () => {
    return (
        <div id="etat-velos-section">
            <h2>État des vélos</h2>
            <div className="button-container">
                <button className="velo-button louable">Vélo louable</button>
                <button className="velo-button non-louable">Vélo non louable</button>
            </div>
        </div>
    );
};

export default EtatVelosSection;
