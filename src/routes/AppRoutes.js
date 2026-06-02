import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import Home from "../components/pages/Home";
import Estoque from "../components/pages/Estoque";
import Financeiro from "../components/pages/Financeiro";

export default function AppRoutes() {
  return (
    <Router>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/financeiro" element={<Financeiro />} />
        </Routes>
    </Router>
  )
}
