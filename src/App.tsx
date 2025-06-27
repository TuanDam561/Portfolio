import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import BackgroundMusic from "./components/GeneralComponent/MusicComponent";
import BackGroud from "./components/GeneralComponent/Background";
import Navbar from "./components/GeneralComponent/Tab";

import HomeView from "./views/HomeViews";
import SkillView from "./views/SkillViews";
import MessageForm from "./components/MessageForm";
function App() {
  return (
    <>
      <BackgroundMusic />
      <Navbar />
      <BackGroud />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/skill" element={<SkillView />} />
        <Route path="/mess" element={<MessageForm />} />
      </Routes>
    </>
  );
}

export default App;
