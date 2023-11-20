import Navbar from "./Navbar/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Pricing from "./pricing/pricing";
import Shop from "./Shops/Shop";
import Form from "./Form/Form";
import Book from "./Book/Book";
import Gallery from "./Gallery/Gallery";
import Blog from "./Blogs/Blogs";
import Card from "./Shops/Card";
import Cart from "./Shops/Cart";
import Kids from "./Shops/Kids";
import Babies from "./Shops/Babies";
import More from "./Blogs/More";
import Shopitem from "./Shops/Shopitem";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="form" element={<Form />} />
        <Route path="book" element={<Book />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="Card" element={<Card />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Kids" element={<Kids />} />
        <Route path="Babies" element={<Babies />} />
        <Route path="More" element={<More />} />
        <Route path="Shopitem" element={<Shopitem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
