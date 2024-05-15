import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <Link to="https://github.com/FirstEncounter3">FirstEncounter3</Link>
      </p>
    </footer>
  );
};

export default Footer;
