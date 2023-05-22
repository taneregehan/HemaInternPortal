import { useState } from "react";
import Navbar from "../Components/Navbar";
import Anasayfa from "../Components/Anasayfa";
import Projeler from "../Components/Projeler";
import Stajyerler from "../Components/Stajyerler";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DijitalTeam from "../Components/DijitalTeam"
import Project from "../Components/Project";
import ProjelerDetay from "../Components/ProjelerDetay";
import "../index.css";
function App() {
  return (
    <Router>
      <Navbar>
        <div >
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/projeler" element={<Projeler />} />
            <Route path="/projeler/:id" element={<ProjelerDetay />} />
            <Route path="/stajyerler" element={<Stajyerler />} />
            <Route path="/dijitalteam" element={<DijitalTeam />} />
            <Route path="/proje_ekle" element={<Project />} />
          </Routes>
        </div>
      </Navbar>
    </Router>
  );
}

export default App;
