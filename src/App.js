import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Dog from "./Components/Dog";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";
import DogDescription from "./Components/DogDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/dog/:name" element={<DogDescription />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
