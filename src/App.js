import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Programs from "./components/Programs";
import Batches from "./components/Batches";
import Facilities from "./components/Facilities";
import Coaches from "./components/Coaches";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Contact from "./components/Contact";
import VoiceAssistant from './components/VoiceAssistant';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/batches" element={<Batches />} />
      
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/achievements" element={<Achievements />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>
    <VoiceAssistant />
    </div>
  );
}

export default App;
