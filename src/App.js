import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react/cjs/react.development";

import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <h1>lol</h1>
      <BrowserRouter>
        <div>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
