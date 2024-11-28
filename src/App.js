import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages:
import Home from "./Pages/Home";
import About from "./Pages/About";
import Properties from "./Pages/Properties/Properties";
import Services from "./Pages/Services";
import PropertyDetail from "./Pages/Properties/PropertyDetail";
import Contact from "./Pages/Contact";

// Components:
import Header from "./Components/Global/Header/Header";
import Explore from "./Components/Global/Explore/Explore";
import Footer from "./Components/Global/Footer/Footer";

function App() {
  return (
    <div className="App bg-grey-color-8 text-white min-h-screen">
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties/:propertyDetail" element={<PropertyDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Explore */}
      <Explore />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
