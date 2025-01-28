import React, { useState } from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import GererVelosSection from "../components/GererVelosSection";
import EtatVelosSection from "../components/EtatVelosSection";
import MapSection from "../components/Map";
import Footer from "../components/Footer";

const Admin = () => {
  const [currentSection, setCurrentSection] = useState('map');

  const renderSection = () => {
    switch (currentSection) {
      case 'gerer-velos':
        return <GererVelosSection />;
      case 'etat-velos':
        return <EtatVelosSection />;
      case 'map':
        return <MapSection />;
      default:
        return <MapSection />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftPanel setCurrentSection={setCurrentSection} />
        <div className="content" style={{ flex: 1, overflow: 'auto', width: '100%' }}>
          {renderSection()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
