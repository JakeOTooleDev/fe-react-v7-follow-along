import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Penny",
      animal: "Dog",
      breed: "Pit/Cattle",
    }),
    React.createElement(Pet, {
      name: "Bowie",
      animal: "Dog",
      breed: "Cattle",
    }),
    React.createElement(Pet, {
      name: "Riot",
      animal: "Cat",
      breed: "Cat?",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
