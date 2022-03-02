import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { StrictMode } from "react/cjs/react.development";

import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
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
