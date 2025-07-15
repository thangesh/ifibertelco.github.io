
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Network, Zap, Wifi, Cable, Router, ShieldCheck, HardHat, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

const FiberLogo = ({ className = "w-12 h-12" }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
        <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 opacity-30 blur-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 p-px shadow-lg">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Network className="w-1/2 h-1/2 text-cyan-400" />
            </div>
        </div>
    </div>
);

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${className}`}>
    <div className="container mx-auto max-w-7xl">
      {children}
    </div>
  </section>
);

function App() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const handleFeatureClick = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const services = [
    { icon: Cable, title: "Structured Cabling", description: "Designing and installing scalable, organized cabling systems for optimal data flow and reliability." },
    { icon: Wifi, title: "Fiber Optics", description: "High-speed fiber optic solutions for superior performance, bandwidth, and future-proofing your network." },
    { icon: Router, title: "Network Solutions", description: "Comprehensive network setup, configuration, and management for seamless, secure connectivity." },
  ];

  const whyUsItems = [
    { icon: Zap, title: "15 Years of Experience", description: "A decade and a half of expertise ensures your project is handled with professionalism and skill." },
    { icon: ShieldCheck, title: "Reliability & Quality", description: "We use top-tier materials and best practices to deliver robust, long-lasting network infrastructure." },
    { icon: HardHat, title: "Certified Professionals", description: "Our team of certified technicians guarantees industry-standard installations and support." },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-slate-900 text-slate-300 antialiased">
      <Helmet>
        <title>iFiber Telco | Reliable Network & Cabling Services</title>
        <meta name="description" content="Your expert partner for structured cabling, fiber optics, and network solutions. 15 years of proven excellence." />
      </Helmet>

      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
              <FiberLogo className="w-10 h-10" />
              <span className="text-xl font-bold text-white">iFiber Telco</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <a href="https://wa.me/60174848407?text=Hi%20IFiber%2C%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer">
             <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold mt-2">Get a Quote</Button>
            </div>
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900/95 pb-4"
          >
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-300 hover:text-cyan-400 transition-colors py-2">
                  {link.label}
                </a>
              ))}
              <Button onClick={handleFeatureClick} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold mt-2">Get a Quote</Button>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        <Section id="home" className="pt-40 md:pt-48 min-h-screen flex items-center bg-grid-pattern">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              <motion.div variants={itemVariants}>
                <FiberLogo className="w-24 h-24 md:w-32 md:h-32 mb-6" />
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                Reliable Network & Cabling Services
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                Your expert partner for structured cabling, fiber optics, and complete network solutions.
                Built on 15 years of proven excellence.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button size="lg" onClick={handleFeatureClick} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg">
                  Explore Our Services <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Section>
        
        <Section id="services" className="bg-slate-950/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Services</h2>
            <p className="text-slate-400 mt-2">Powering your business with state-of-the-art connectivity.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 mb-6">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Trusted Partner in Connectivity</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                For 15 years, iFiber Telco has been at the forefront of network infrastructure. We're dedicated to building robust, high-performance networks that our clients can depend on. Our mission is to provide seamless connectivity solutions that empower businesses to thrive in the digital age.
              </p>
              <Button onClick={handleFeatureClick} variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
                <img  className="rounded-xl shadow-2xl" alt="Team of network engineers working in a server room" src="https://images.unsplash.com/photo-1577332215047-3712edf14808" />
            </motion.div>
          </div>
        </Section>

        <Section id="why-us" className="bg-slate-950/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose iFiber Telco?</h2>
            <p className="text-slate-400 mt-2">The advantages of partnering with a true industry leader.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {whyUsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-6 mx-auto border-2 border-slate-700">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="contact">
          <div className="bg-gradient-to-r from-blue-600/80 via-cyan-500/80 to-teal-400/80 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Network?</h2>
            <p className="text-slate-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss your project. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8 text-white">
                <div className="flex items-center gap-3">
                    <Phone />
                    <span>04-484 3451</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail />
                    <span>contact@ifibertelco.com</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin />
                    <span>No 6 first floor Jalan Saujana 3 Lunas, 09600 Kulim, Kedah</span>
                </div>
            </div>
            <Button size="lg" onClick={handleFeatureClick} className="bg-white text-blue-600 hover:bg-slate-200 font-bold text-lg shadow-lg">
              Get Your Free Quote
            </Button>
          </div>
        </Section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} iFiber Telco. All Rights Reserved.</p>
            <p className="text-sm mt-2">Your Partner for Reliable Network & Cabling Services.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
