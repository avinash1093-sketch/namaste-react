import React from "react";
import ReactDOM from "react-dom/client";

//  React Element/ react.createElement --> Object==> Html Element when we rendor to dom

const heading = React.createElement('h1', {id:'heading'}, "Namaste!");
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);