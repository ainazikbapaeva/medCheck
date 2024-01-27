import React from "react";
import FirstSections from "./components/Section/FirstSections";
import Services from "./components/Section/Services";
import AboutClinic from "./components/Section/AboutClinic";
import Thebestdoctors from "./components/Section/Thebestdoctors";

const Main = () => {
  return (
    <div>
      <FirstSections />
      <Services />
      <AboutClinic />
      <Thebestdoctors/>
    </div>
  );
};

export default Main;
