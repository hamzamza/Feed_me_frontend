import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nopage from "./components/Nopage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";



function App() {
  return (
   <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
      </Routes>
     </div>
  
  );
}

export default App;
