import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./site-content/Header/header";
import Intro from "./site-content/Pages/introduction";
import OurProducts from "./site-content/Pages/our-products";
import Beau from "./site-content/Pages/beautiful";
import Tipsinf from "./site-content/Pages/tips";
import Photos from "./site-content/Pages/furniture";
import Footer from "./site-content/Footer/footer";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/furniture" element={<Intro />} />
          <Route index element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/beautiful" element={<Beau />} />
          <Route path="/tips" element={<Tipsinf />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
