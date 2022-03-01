const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
