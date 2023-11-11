import Navbar from "./Navbar/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Pricing from "./pricing/pricing";
import Shop from "./Shops/Shop";
import Form from "./Form/Form";
import Book from "./Book/Book";
import Gallery from "./Gallery/Gallery";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
       {/* <Home/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="Shop" element={<Shop/>} />
        <Route path="form" element={<Form/>} />
        <Route path="book" element={<Book/>} />
        <Route path="gallery" element={<Gallery/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
