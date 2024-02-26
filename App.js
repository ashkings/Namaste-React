import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React.createElement => Object => Render => HTML ELEMENT

const title = React.createElement("h1", { id: "title" }, "Hi title");

// JSX is not HTML in JS -> It is HTML like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => Object => Render => HTML ELEMENT
const JsxHeading = () => <h1 id="heading">Namaste React</h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <JsxHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
