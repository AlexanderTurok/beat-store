
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Beats from './pages/Beats';
import SoundKits from './pages/SoundKits';
import Contact from './pages/Contact';
import CheckOut from './pages/CheckOut';
import VisualizationSection from './components/visualization/VisualizationSection';

function App() {
  return (
    <Router>
      <NavBar price={0.00} />
      <VisualizationSection />
      <Routes>
        <Route path='/' 
               element={<Home />} />
        <Route path='/about'
               element={<About />} />
        <Route path='/beats'
               element={<Beats />} />
        <Route path='/sound-kits'
               element={<SoundKits />} />
        <Route path='/contact'
               element={<Contact />} />
        <Route path='/checkout'
               element={<CheckOut />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
