import React from "react";
import { MeetingSelectionMenu } from "./MeetingSelectionMenu";
import "./Meetings.css";

const Meetings = () => {
  return (
    <div className={"Meeting"}>
      <div className={"Meeting_image"}>
        <p className="Meeting_image__text">Meetings</p>
      </div>
      <MeetingSelectionMenu />
    </div>
  );
};

export default Meetings;
