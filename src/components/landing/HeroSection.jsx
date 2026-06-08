const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { Download, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HERO_BG = 'https://media.db.com/images/public/6a19c5ea6c0ff0a930640516/5513d77fc_generated_67dd382d.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Rust game background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>

      {/* Animated glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full px-5 py-2 mb-8"
        >
          <Monitor className="w-4 h-4 text-primary" />
          <span className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Servidor Rust Experimental Brasileiro
          </span>
          <Monitor className="w-4 h-4 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black leading-none mb-6"
        >
          <span className="block text-6xl sm:text-8xl lg:text-[10rem] text-foreground drop-shadow-2xl">HYPER</span>
          <span className="block text-6xl sm:text-8xl lg:text-[10rem] text-primary drop-shadow-2xl" style={{ textShadow: '0 0 60px hsl(270 80% 60% / 0.4)' }}>LANDIA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          O servidor Rust com a comunidade mais intensa do Brasil.<br />
          Baixe o launcher e domine o mapa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button
            size="lg"
            onClick={() => window.open('https://drive.google.com/file/d/1e9W4H4rhyWz4CGGRp54BLx4E7NHIQ16x/view?usp=sharing', '_blank')}
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-body font-bold text-base sm:text-lg tracking-wider gap-3 rounded-xl px-8 sm:px-10 py-6 shadow-[0_0_40px_hsl(270_80%_60%/0.3)] hover:shadow-[0_0_60px_hsl(270_80%_60%/0.5)] transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            BAIXAR LAUNCHER
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}