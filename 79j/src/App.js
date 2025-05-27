import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Featured from "./Components/Featured/Featured";
import ItemsPage from "./Components/ItemsPage/ItemsPage";
import RingsLong from "./Imgs/ring-long.png";
import NeckLong from "./Imgs/longOne.jpeg";
import BraLong from "./Imgs/bra-long.png";
import { IoLogoWhatsapp } from "react-icons/io";
import PaymentRequired from "./Components/Other/PaymentFailed";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaymentRequired />} />
        {/* <Route path="/featured" element={<Featured />} />
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
        /> */}
      </Routes>
      {/* <div className="whats-app">
        <a
          href="https://api.whatsapp.com/send?phone=447833960991"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={70} className="whats-app-icon" />
        </a>
      </div> */}
    </Router>
  );
}

export default App;
