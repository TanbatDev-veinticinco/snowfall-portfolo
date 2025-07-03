import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
// import DarkMode from "./components/DarkMode.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import AlpinePage from "./pages/AlpinePage.jsx";
import NorthernPAge from "./pages/NorthernPage.jsx";
import RockiesPage from "./pages/RockiesPage.jsx";
import WinterPAge from "./pages/WinterPage.jsx"
import SerenityPage from "./pages/SerenityPage.jsx"
// import DestinationPage from "./pages/DestinationPage";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

function App() {
  return (
    <div className="web3">
      {/* Sidebar or Left Nav */}
      <div className="">
        <NavBar />
        {/* <DarkMode/> */}
      </div>
      {/* Main content area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alpinePage" element={<AlpinePage />} />
          <Route path="/northernPAge" element={<NorthernPAge />} />
          <Route path="/rockiesPAge" element={<RockiesPage />} />
          <Route path="/winterPAge" element={<WinterPAge />} />
          <Route path="/serenityPage" element={<SerenityPage />} />
          {/* <Route path="/destination/:slug" element={<DestinationPage />} /> */}
          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
