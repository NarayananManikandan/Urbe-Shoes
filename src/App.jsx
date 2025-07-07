import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Sneakers } from "./components/shoeproduct/Sneakers";
import { Sports } from "./components/shoeproduct/Sports";
import { SlipOns } from "./components/shoeproduct/Slip Ons";
import { Party } from "./components/shoeproduct/Party";
import { SlidesandSandals } from "./components/shoeproduct/Slides and Sandals";
import { LoafersandOxfords } from "./components/shoeproduct/Loafers and Oxfords";
import { FlipFlops } from "./components/shoeproduct/Flip Flops";
import { Clogs } from "./components/shoeproduct/Clogs";
import { Boots } from "./components/shoeproduct/Boots";
import { Cart } from "./components/Cart";
import './css/App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartdetail, setcartdetails] = useState([]);

  return (

    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/Sneakers" element={<Sneakers cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/Sports" element={<Sports cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/SlipOns" element={<SlipOns cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/SlidesandSandals" element={<SlidesandSandals cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/Party" element={<Party cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/LoafersandOxfords" element={<LoafersandOxfords cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/FlipFlops" element={<FlipFlops cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/Clogs" element={<Clogs cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
        <Route path="/Boots" element={<Boots cartdetail={cartdetail} setcartdetails={setcartdetails} />} />
      </Routes>
    </Router>

  );
}

export default App;
