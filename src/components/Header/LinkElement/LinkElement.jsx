import React from "react";
import "./LinkElement.css";

const onClickHandler = (path) => {
  console.log(window.location.href);
  const endUrl = window.location.href.split("/").pop();
  const baseUrl = window.location.href.replace(endUrl, "");

  window.history.pushState(null, null, `${baseUrl}${path}`);
  window.location.reload();
};
const LinkElement = (props) => {
  console.log(`am i selected ${props.isSelected} in ${props.path}`);
  return (
    <div
      onClick={() => onClickHandler(props.path)}
      className="LinkElement__container"
    >
      <p className="LinkElement__text">{props.children}</p>
      <div
        className={
          props.isSelected
            ? "LinkElement__dummy--selected"
            : "LinkElement__dummy"
        }
      >
        <div />
      </div>
    </div>
  );
};

export default LinkElement;
