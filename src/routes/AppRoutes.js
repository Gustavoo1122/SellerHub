import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../components/pages/Home";
import Estoque from "../components/pages/Estoque";
import Financeiro from "../components/pages/Financeiro";

import Navbar from "../components/Layout/Navbar";
import Container from "../components/Layout/Container";
import Footer from "../components/Layout/Footer";

export default function AppRoutes() {
  return (
    <Router>
        <Navbar />
        <Container customClass="min-height">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estoque" element={<Estoque />} />
                <Route path="/financeiro" element={<Financeiro />} />
            </Routes>
        </Container>
        <Footer />
    </Router>
  )
}
