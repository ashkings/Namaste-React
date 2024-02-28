import React from "react";

function Ellipses({ text, charLimit = 200 }) {
  const showText = text.substring(0, charLimit) + "...";
  return <div>{showText}</div>;
}

export default Ellipses;
