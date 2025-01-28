import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import LeftPanel from "../components/LeftPanel";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <div>
      <Header />
      <div
        className="page_content"
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 160px)",
        }}
      >
        <LeftPanel />
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
