import React, { useState, useEffect } from "react";
import "./Header.css";
import { routeNames } from "../../constants";
import { LinkElement } from "./LinkElement";
import TwitterLogo from "react-ionicons/lib/LogoTwitter";
import FacebookLogo from "react-ionicons/lib/LogoFacebook";

const { beaches, byLaws, directors, gallery, home, meetings } = routeNames;
const links = [
  { label: "Home", path: home },
  { label: "Beaches", path: beaches },
  { label: "Photo Gallery", path: gallery },
  { label: "Board of Directors", path: directors },
  { label: "Events", path: meetings },
  { label: "Association By-laws", path: byLaws },
];

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("");
  useEffect(() => {
    setSelectedPage(window.location.href.split("/").pop());
  });

  return (
    <div className="Header__container">
      {links.map((link) => (
        <LinkElement isSelected={link.path === selectedPage} path={link.path}>
          {link.label}
        </LinkElement>
      ))}
      <TwitterLogo color="#e1d7bc" />
      <FacebookLogo color="#e1d7bc" />
    </div>
  );
};

export default Header;
