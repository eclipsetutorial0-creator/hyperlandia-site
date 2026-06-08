import { Backpack, Pickaxe, Crosshair, Package, Rocket, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const KITS = [
  {
    icon: Backpack,
    tag: 'Compra Única',
    name: 'Kit Largadão',
    subtitle: 'Começa fraco, termina na frente',
    items: ['Arco + 50 flechas', 'Machado + Picareta', 'Roupa de couro completa', '500 madeira · 250 pedra'],
    originalPrice: '15,90',
    price: '7,90',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-800/40 hover:border-emerald-600/50',
    iconBg: 'bg-emerald-900/50',
  },
  {
    icon: Pickaxe,
    tag: 'Compra Única',
    name: 'Kit Farmazão',
    subtitle: 'Farma igual um robô, sem cansar',
    items: ['Jackhammer', 'Chainsaw', 'Large Furnace ×1', 'Research Table'],
    originalPrice: '20,90',
    price: '10,90',
    color: 'text-blue-400',
    borderColor: 'border-blue-800/40 hover:border-blue-600/50',
    iconBg: 'bg-blue-900/50',
  },
  {
    icon: Crosshair,
    tag: 'Compra Única',
    name: 'Kit PVP Raiz',
    subtitle: 'Mira calibrada, coração frio',
    items: ['AK-47 + 120 munições', 'Metal Facemask + Chest', '4 MedSyringe · 2 Bandages', 'Granada F1 ×3'],
    originalPrice: '44,90',
    price: '24,90',
    color: 'text-red-400',
    borderColor: 'border-red-800/40 hover:border-red-600/50',
    iconBg: 'bg-red-900/50',
  },
  {
    icon: Package,
    tag: 'Compra Única',
    name: 'Kit Primeira Noite',
    subtitle: 'Essencial pra não morrer no spawn',
    items: ['Rifle semi + munições', 'Kit médico e bandagens', 'Barricadas e saco de dormir', 'Recursos básicos (madeira/pedra)'],
    originalPrice: '50,90',
    price: '30,90',
    color: 'text-purple-400',
    borderColor: 'border-purple-800/40 hover:border-purple-600/50',
    iconBg: 'bg-purple-900/50',
  },
  {
    icon: Rocket,
    tag: 'Compra Única',
    name: 'Kit Destruição',
    subtitle: 'Bate, explode, some',
    items: ['C4 ×4', 'Rocket ×6 + Launcher', 'Satchel Charge ×8', 'Explosive Ammo ×40'],
    originalPrice: '60,90',
    price: '39,90',
    color: 'text-orange-400',
    borderColor: 'border-orange-800/40 hover:border-orange-600/50',
    iconBg: 'bg-orange-900/50',
  },
  {
    icon: Crown,
    tag: 'Compra Única',
    name: 'Kit Completo',
    subtitle: 'Tudo o que um rei precisa',
    badge: 'COMPLETO',
    items: ['Tudo do Kit PVP + Raid', 'Armor Roadsign completa', 'Auto Turret ×1', 'Sleeping Bag ×2'],
    originalPrice: '100,90',
    price: '59,90',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-700/50 hover:border-yellow-500/60',
    iconBg: 'bg-yellow-900/50',
  },
];

export default function UnicoKitsSection() {
  return (
    <section id="unico" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
              VIP <span className="text-primary">Único</span>
            </h2>
            <span className="inline-flex items-center font-body text-xs font-bold text-muted-foreground border border-border rounded-full px-3 py-1 uppercase tracking-widest">
              Em Desenvolvimento
            </span>
          </div>
          <p className="font-body text-base text-muted-foreground max-w-xl">
            Pagamento único, uso imediato. Recebe seu kit in-game logo após confirmar o Pix. Sem assinar, sem renovar — só entrar e farmar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KITS.map((kit, i) => (
            <motion.div
              key={kit.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative bg-card border ${kit.borderColor} rounded-2xl p-6 transition-all duration-300 group`}
            >
              {kit.badge && (
                <div className="absolute top-4 right-4">
                  <span className="font-body text-[10px] font-black text-yellow-900 bg-yellow-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {kit.badge}
                  </span>
                </div>
              )}

              <div className={`w-11 h-11 rounded-xl ${kit.iconBg} flex items-center justify-center mb-4`}>
                <kit.icon className={`w-5 h-5 ${kit.color}`} />
              </div>

              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">{kit.tag}</p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{kit.name}</h3>
              <p className="font-body text-sm text-muted-foreground italic mb-4">{kit.subtitle}</p>

              <ul className="space-y-1.5 mb-6">
                {kit.items.map((item, j) => (
                  <li key={j} className="font-body text-sm text-secondary-foreground flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${kit.color.replace('text-', 'bg-')} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground line-through">R$ {kit.originalPrice}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-body text-sm text-muted-foreground">R$</span>
                    <span className={`font-heading text-2xl font-black ${kit.color}`}>{kit.price}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-body text-sm font-bold px-5 py-2.5 rounded-xl transition-all ${kit.iconBg} ${kit.color} border ${kit.borderColor} hover:border-opacity-80`}
                >
                  Comprar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}