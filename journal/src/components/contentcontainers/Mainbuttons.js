import React from "react";

function MainButton(props) {
  return (
    <>
      <h2 className="btnTitle">{props.title}</h2>
      <p className="homeBtnText">{props.content}</p>
      <p className="arrow">{props.arrow}</p>
    </>
  );
}

export default MainButton;