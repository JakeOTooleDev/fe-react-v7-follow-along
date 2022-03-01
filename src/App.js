import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Peny" animal="dog" breed="Havaneese" />
      <Pet name="Wren" animal="cat" breed="kitty" />
      <Pet name="Riot" animal="cat" breed="kitty" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
