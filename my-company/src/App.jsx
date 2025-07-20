import Compome from './components/Compome';
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
    <div>
      <Compome companyName={companyInfo.name} tagline={companyInfo.tagline} />
      <About description={companyInfo.description} />
      <Services services={companyInfo.services} />
      <Contact email={companyInfo.contact.email} phone={companyInfo.contact.phone} />
    </div>
  );
}

export default App;
