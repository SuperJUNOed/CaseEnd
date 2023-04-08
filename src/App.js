import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import MarketPlaceDetail from "./pages/MarketPlaceDetail";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MarketPlace />} />
        <Route exact path="/detail" element={<MarketPlaceDetail />} />
        <Route exact path="/detail/:id" element={<MarketPlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
