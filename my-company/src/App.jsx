import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const companyInfo = {
    name: "TechNova Ltd.",
    tagline: "Innovating the Future",
    description: "We are a software company building modern web solutions.",
    services: ["Web Development", "Mobile Apps", "UI/UX Design"],
    contact: {
      email: "info@technova.com",
      phone: "+254 700 000 000"
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Compome companyName={companyInfo.name} tagline={companyInfo.tagline} />} />
        <Route path="/about" element={<About description={companyInfo.description} />} />
        <Route path="/services" element={<Services services={companyInfo.services} />} />
        <Route path="/contact" element={<Contact email={companyInfo.contact.email} phone={companyInfo.contact.phone} />} />
      </Routes>
    </Router>
  );
}

export default App;
