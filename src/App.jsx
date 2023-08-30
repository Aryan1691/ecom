import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contacts from "./Components/Contacts";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Header from "./Components/Header";

import { ThemeProvider } from "styled-components";
function App() {
  const arr =[1,2,3,4];
  const theme = {
    colors:{
      bg: "#000"
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart data={arr} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
