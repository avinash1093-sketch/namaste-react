import React from "react";
import ReactDOM from "react-dom/client";

//  React Element/ react.createElement --> Object==> Html Element when we rendor to dom

const heading = React.createElement("h1", { id: "heading" }, "Namaste!");
console.log(heading);

// H1 tag using JSX:
const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>;

console.log(jsxHeading);

const number = 10000;

// React Component
const HeadingComponent = () => {
  return (
    <div>
        {number}
      <h1 id="heading">Hello I am React Component</h1>
    </div>
  );
};

// const HeadingComponent = () => (<h1 id="heading">Hello I am React Component</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
