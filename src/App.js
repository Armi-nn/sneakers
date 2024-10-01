import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Detail from "./Pages/Detail";
import ShoppingCart from "./Pages/ShoppingCart";
import { ThemeProvider } from "@emotion/react";
import theme from "./Utils/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id/:name" element={<Detail/>}/>
        <Route path="/shoppingcart" element={<ShoppingCart/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
