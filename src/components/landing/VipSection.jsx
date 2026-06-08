const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from 'framer-motion';
import VipCard from './VipCard';
import SponsorVipCard from './SponsorVipCard';

const LOGO = 'https://media.db.com/images/public/6a19c5ea6c0ff0a930640516/bb8a6c88e_image-removebg-preview.png';

const RUST_ICONS = {
  'Pé-Rapado': 'https://www.zrserver.online/images/Vips_rustIcones/Vip-Bronze/Sleeping_Bag_icon.webp',
  'Sobrevivente': 'https://www.zrserver.online/images/Vips_rustIcones/Vip-Prata/M39_Rifle_icon.webp',
  'Rei do Wipe': 'https://www.zrserver.online/images/Vips_rustIcones/Vip-Ouro/AK.webp',
  'Lenda Hiper': 'https://www.zrserver.online/images/Vips_rustIcones/Vip-Apoiador/L96.webp',
};

const TIERS = [
  {
    name: 'Pé-Rapado',
    subtitle: '"acabou de spawnar no mapa irmão"',
    monthlyPrice: '19,90',
    weeklyPrice: '7,90',
    featured: false,
    benefits: [
      'Kit Pé-Rapado (igual você)',
      'Backpack 12 de espaço',
      'Sem cooldown de cama — dorme onde quer',
      'Tag [Pé-Rapado] no chat',
      'Farme automático (farma em geral)',
      'Sentinelas e anti-aérea sem energia',
      'Acesso ao sistema de XP e coins VIP',
    ],
  },
  {
    name: 'Sobrevivente',
    subtitle: '"já morreu, já aprendeu, tá de volta"',
    monthlyPrice: '29,90',
    weeklyPrice: '11,90',
    featured: true,
    benefits: [
      'Kit Sobrevivente (acima da média)',
      'Backpack 24 de espaço',
      'Sem cooldown de cama',
      'Tag [Sobrevivente] no chat',
      'Farme automático (farma em geral)',
      'Sentinelas e anti-aérea sem energia',
      'Acesso ao sistema de XP e coins VIP',
    ],
  },
  {
    name: 'Rei do Wipe',
    subtitle: '"você que o noob tem medo de encontrar"',
    monthlyPrice: '39,90',
    weeklyPrice: '14,90',
    featured: false,
    benefits: [
      'Kit Rei do Wipe (absurdo)',
      'Backpack 36 de espaço',
      'Sem cooldown de cama',
      'Tag [Rei do Wipe] no chat',
      'Farme automático (farma em geral)',
      'Sentinelas e anti-aérea sem energia',
      'Acesso ao sistema de XP e coins VIP',
    ],
  },
  {
    name: 'Lenda Hiper',
    subtitle: '"o cara que o servidor todo conhece"',
    monthlyPrice: '59,90',
    weeklyPrice: '19,90',
    featured: false,
    benefits: [
      'Kit Lenda Hiper (ridiculamente bom)',
      'Kit Bônus incluso',
      'Backpack 48 de espaço (máximo!)',
      'Farme automático (tudo)',
      'Sentinelas e anti-aérea sem energia',
      'Recicladora na sua própria base!',
      'Acesso ao sistema de XP e coins VIP',
      'Acesso ao HiperAI no Discord 🤖',
    ],
  },
];

export default function VipSection() {
  return (
    <section id="vips" className="relative py-20 sm:py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/6 rounded-full blur-[250px] pointer-events-none" />
      {/* Logo watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-4 pointer-events-none">
        <img src={LOGO} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Planos VIP</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
            Qual é o seu <span className="text-primary">nível?</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            Do noob ao intocável. Escolha seu plano, pegue seu kit e vai dominar o servidor antes que o wipe acabe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {TIERS.map((tier, i) => (
            <VipCard key={tier.name} tier={tier} index={i} icon={RUST_ICONS[tier.name]} />
          ))}
        </div>

        {/* VIP Patrocinador */}
        <SponsorVipCard />
      </div>
    </section>
  );
}