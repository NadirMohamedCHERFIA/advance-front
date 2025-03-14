import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import Cockies from "./components/copyrights/Copyrights";
import History from "./components/history/History";
import Process from "./components/Process/Process";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/getting-started" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/process" element={<Process />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Cockies />
    </>
  );
}

export default App;
