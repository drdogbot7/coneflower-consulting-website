import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 p-8 text-center text-sm">
    © 
    {' '}
    {new Date().getFullYear()}
    {' '}
    Coneflower Consulting
  </footer>
);

export default Footer;
