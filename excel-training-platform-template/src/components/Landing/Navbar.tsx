import { useState, useEffect } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 h-16 flex justify-between items-center transition-all duration-400 ${scrolled ? 'bg-[var(--bg2)] backdrop-blur-3xl border-b border-[var(--bdr)]' : ''}`}>
      <a className="font-syne text-[1.05rem] font-extrabold text-[var(--txt)] flex items-center gap-2.5 cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--acc)] to-[var(--acc3)] flex items-center justify-center text-base shadow-[0_0_20px_var(--glow)]">
          👑
        </div>
        Excel Qirolligi
      </a>
      
      <div className="flex gap-8 items-center">
        <a href="#features" className="hidden md:block text-[var(--txt2)] text-[0.85rem] font-medium hover:text-[var(--txt)] transition-colors cursor-pointer">
          Imkoniyatlar
        </a>
        <a href="#courses" className="hidden md:block text-[var(--txt2)] text-[0.85rem] font-medium hover:text-[var(--txt)] transition-colors cursor-pointer">
          Kurslar
        </a>
        <a href="#contact" className="hidden md:block text-[var(--txt2)] text-[0.85rem] font-medium hover:text-[var(--txt)] transition-colors cursor-pointer">
          Aloqa
        </a>
        <button 
          onClick={onLoginClick}
          className="px-5 py-2 bg-transparent border border-[var(--bdr3)] rounded-lg text-[var(--acc3)] text-[0.85rem] font-medium transition-all hover:bg-[var(--glow)] hover:border-[var(--acc)] hover:text-[var(--txt)]"
        >
          Kirish →
        </button>
      </div>
    </nav>
  );
}
