const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { Bell, HeadphonesIcon, CalendarDays, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const PERKS = [
  { icon: Bell, label: 'Avisos de wipe' },
  { icon: HeadphonesIcon, label: 'Suporte por ticket' },
  { icon: CalendarDays, label: 'Eventos e updates' },
  { icon: Users, label: 'Comunidade ativa' },
];

export default function CommunitySection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <img
          src="https://media.db.com/images/public/6a19c5ea6c0ff0a930640516/bb8a6c88e_image-removebg-preview.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">Comunidade</p>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
              Entra na<br />
              <span className="text-primary">Comunidade</span> HyperLandia
            </h2>
            <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
              Fique por dentro dos wipes, receba suporte, participe dos eventos e acompanhe todas as novidades do servidor. A galera tá esperando você.
            </p>
            <motion.a
              href="https://discord.gg/maMd7996Fj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(88,101,242,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-body font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.012.043.029.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Entrar no Discord
            </motion.a>
          </motion.div>

          {/* Right - perks grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-4 w-full"
          >
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-card border border-border hover:border-primary/30 rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm font-semibold text-foreground">{perk.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}