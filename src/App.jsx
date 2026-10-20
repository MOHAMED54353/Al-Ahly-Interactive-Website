import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./Layout/Default";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
