import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={ <Contact />}/>      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
