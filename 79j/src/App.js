import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Featured from "./Components/Featured/Featured";
import ItemsPage from "./Components/ItemsPage/ItemsPage";
import RingsLong from "./Imgs/ring-long.png";
import NeckLong from "./Imgs/necless-long.png";
import BraLong from "./Imgs/bra-long.png";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route
          path="/rings"
          element={<ItemsPage title="Rings" Img={RingsLong} />}
        />
        <Route
          path="/necklaces"
          element={<ItemsPage title="Necklaces" Img={NeckLong} />}
        />
        <Route
          path="/bracelets"
          element={<ItemsPage title="Bracelets" Img={BraLong} />}
        />
        <Route
          path="/bangles"
          element={<ItemsPage title="Bangles" Img={BraLong} />}
        />
      </Routes>
      <div className="whats-app">
        <a href="https://wa.me/447833960991" target="_blank" rel="noreferrer">
          <IoLogoWhatsapp size={70} className="whats-app-icon" />
        </a>
      </div>
    </Router>
  );
}

export default App;
