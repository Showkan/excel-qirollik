import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Marquee from './Marquee';
import Features from './Features';
import Courses from './Courses';
import CTA from './CTA';
import Footer from './Footer';
import LoginModal from './LoginModal';

export default function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);

  // Initialize reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('up');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <Hero onLoginClick={() => setLoginOpen(true)} />
      <Marquee />
      <Features />
      <Courses />
      <CTA onLoginClick={() => setLoginOpen(true)} />
      <Footer />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
