import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Fetching from "../src/pages/Fetching";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="data" element={<Fetching />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
