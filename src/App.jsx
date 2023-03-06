import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Vandetails from "./pages/Vans/Vandetails";
import "./server";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Vanshost from "./pages/Host/Vanshost";
import Vanhostdetail from "./pages/Host/Vanhostdetail";
import VanshostInfo from "./pages/Host/VanshostInfo";
import VanhostPricing from "./pages/Host/VanhostPricing";
import VanhostPhoto from "./pages/Host/VanhostPhoto";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<Vandetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="review" element={<Reviews />} />
              <Route path="vans" element={<Vanshost />}/>
              <Route path="vans/:id" element={<Vanhostdetail />}>
                <Route index element={<VanshostInfo />}/>
                <Route path="pricing" element={<VanhostPricing />}/>
                <Route path="photos" element={<VanhostPhoto/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
