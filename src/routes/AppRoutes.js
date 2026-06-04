import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import Finances from "../components/pages/Finances";
import NewProduct from "../components/pages/NewProduct";

import Navbar from "../components/Layout/Navbar";
import Container from "../components/Layout/Container";
import Footer from "../components/Layout/Footer";
import styles from "./AppRoutes.module.css"

export default function AppRoutes() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.content}>
          <Container>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/finances" element={<Finances />} />
                  <Route path="/newProduct" element={<NewProduct />} />
              </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
