import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Page/Layout';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Contact from './Page/Contact';
import Footer from './Page/Footer';

function App() {
  return (
   <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

<Footer />


   </>
  );
}

export default App;
