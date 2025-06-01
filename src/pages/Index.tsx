import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Index = () => {
  return (
    <div>
      <Header isHome={true} />
      <Hero />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
