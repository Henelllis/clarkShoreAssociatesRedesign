import React from "react";
import { LinkElement } from "../Header/LinkElement";
import "./SideDrawer.css";
import { routeNames } from "../../constants";
const { beaches, byLaws, directors, gallery, home, meetings } = routeNames;

const links = [
  { label: "Home", path: home },
  { label: "Beaches", path: beaches },
  { label: "Photo Gallery", path: gallery },
  { label: "Board of Directors", path: directors },
  { label: "Events", path: meetings },
  { label: "Association By-laws", path: byLaws },
];

const SideDrawer = () => {
  return (
    <div className="SideDrawer__container">
      {links.map((link) => (
        <LinkElement path={link.path}>{link.label}</LinkElement>
      ))}
    </div>
  );
};

export default SideDrawer;
