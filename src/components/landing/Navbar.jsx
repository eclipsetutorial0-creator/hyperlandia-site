const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO = 'https://media.db.com/images/public/6a19c5ea6c0ff0a930640516/bb8a6c88e_image-removebg-preview.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inicioOpen, setInicioOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const inicioRef = useRef(null);
  const produtosRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (inicioRef.current && !inicioRef.current.contains(e.target)) setInicioOpen(false);
      if (produtosRef.current && !produtosRef.current.contains(e.target)) setProdutosOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setInicioOpen(false);
    setProdutosOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src={LOGO} alt="HyperLandia" className="w-9 h-9 object-contain" />
            <div className="flex items-center gap-0.5">
              <span className="font-heading text-base sm:text-lg font-black text-foreground tracking-widest">HYPER</span>
              <span className="font-heading text-base sm:text-lg font-black text-primary tracking-widest">LANDIA</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">

            {/* INÍCIO dropdown */}
            <div className="relative" ref={inicioRef}>
              <button
                onClick={() => { setInicioOpen(!inicioOpen); setProdutosOpen(false); }}
                className="flex items-center gap-1 font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-secondary/50"
              >
                Início <ChevronDown className={`w-3 h-3 transition-transform ${inicioOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {inicioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-44 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden"
                  >
                    {[
                      { label: 'Sobre', id: 'sobre' },
                      { label: 'Como Jogar', id: 'como-jogar' },
                      { label: 'Equipe', id: 'equipe' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="block w-full text-left px-4 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRODUTOS dropdown */}
            <div className="relative" ref={produtosRef}>
              <button
                onClick={() => { setProdutosOpen(!produtosOpen); setInicioOpen(false); }}
                className="flex items-center gap-1 font-body text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all tracking-wider uppercase px-4 py-2 rounded-lg border border-primary/30"
              >
                Produtos <ChevronDown className={`w-3 h-3 transition-transform ${produtosOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {produtosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden"
                  >
                    {[
                      { label: 'VIPs', id: 'vips' },
                      { label: 'VIP Patrocinador', id: 'patrocinador' },
                      { label: 'Kits Únicos', id: 'kits' },
                      { label: 'Como Comprar', id: 'como-comprar' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="block w-full text-left px-4 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollTo('doacao')}
              className="font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase px-3 py-2 rounded-lg hover:bg-secondary/50"
            >
              Doação
            </button>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1e9W4H4rhyWz4CGGRp54BLx4E7NHIQ16x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-body font-bold tracking-wider text-sm rounded-lg px-5 py-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD
            </a>
            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground px-2 pt-1 pb-2">Início</p>
              {[
                { label: 'Sobre', id: 'sobre' },
                { label: 'Como Jogar', id: 'como-jogar' },
                { label: 'Equipe', id: 'equipe' },
              ].map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors px-2 py-2">{item.label}</button>
              ))}
              <div className="border-t border-border my-2" />
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary px-2 pt-1 pb-2">Produtos</p>
              {[
                { label: 'VIPs', id: 'vips' },
                { label: 'VIP Patrocinador', id: 'patrocinador' },
                { label: 'Kits Únicos', id: 'kits' },
                { label: 'Como Comprar', id: 'como-comprar' },
              ].map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors px-2 py-2">{item.label}</button>
              ))}
              <div className="border-t border-border my-2" />
              <button onClick={() => scrollTo('doacao')} className="block w-full text-left font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors px-2 py-2">Doação</button>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1e9W4H4rhyWz4CGGRp54BLx4E7NHIQ16x/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-body font-bold tracking-wider text-sm rounded-lg py-2 transition-colors"
                >
                  <Download className="w-4 h-4" /> DOWNLOAD
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}