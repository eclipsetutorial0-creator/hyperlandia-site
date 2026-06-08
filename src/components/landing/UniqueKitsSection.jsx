import { motion } from 'framer-motion';
import { Backpack, Pickaxe, Crosshair, Package, Rocket, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KITS = [
  {
    icon: Backpack,
    tag: 'Compra Única',
    name: 'Kit Start',
    desc: 'Arranca forte no wipe',
    price: '7,90',
    oldPrice: '15,90',
    items: ['Arco + 50 flechas', 'Machado + Picareta', 'Roupa de couro completa', '500 madeira · 250 pedra'],
    featured: false,
  },
  {
    icon: Pickaxe,
    tag: 'Compra Única',
    name: 'Kit Farm',
    desc: 'Acelera a coleta de recursos',
    price: '10,90',
    oldPrice: '20,90',
    items: ['Jackhammer', 'Chainsaw', 'Large Furnace x1', 'Research Table'],
    featured: false,
  },
  {
    icon: Crosshair,
    tag: 'Compra Única',
    name: 'Kit PVP',
    desc: 'Prepara-te para o combate',
    price: '24,90',
    oldPrice: '44,90',
    items: ['AK-47 + 120 munições', 'Metal Facemask + Chest', '4 MedSyringe · 2 Bandages', 'Granada F1 x3'],
    featured: false,
  },
  {
    icon: Package,
    tag: 'Compra Única',
    name: 'Kit Base',
    desc: 'Essencial para a primeira noite',
    price: '30,90',
    oldPrice: '50,90',
    items: ['Rifle semiautomático + munições', 'Kit médico e bandagens', 'Barricadas e saco de dormir', 'Recursos básicos (madeira / pedra)'],
    featured: false,
  },
  {
    icon: Rocket,
    tag: 'Compra Única',
    name: 'Kit Raid',
    desc: 'Ferramentas para a destruição',
    price: '39,90',
    oldPrice: '60,90',
    items: ['C4 x4', 'Rocket x6 + Launcher', 'Satchel Charge x8', 'Explosive Ammo x40'],
    featured: false,
  },
  {
    icon: Crown,
    tag: 'Compra Única',
    name: 'Kit Boss',
    desc: 'O kit mais completo',
    price: '59,90',
    oldPrice: '100,90',
    items: ['Tudo do Kit PVP + Raid', 'Armor Roadsign completa', 'Auto Turret x1', 'Sleeping Bag x2'],
    featured: true,
    badge: 'COMPLETO',
  },
];

export default function UniqueKitsSection() {
  return (
    <section id="kits" className="relative py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">Kits de Compra Única</h2>
              <span className="px-3 py-1 bg-secondary border border-border rounded-full text-[10px] font-body font-bold tracking-widest uppercase text-muted-foreground">Em desenvolvimento</span>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-lg">
              Pagamento único, uso imediato. Receba seu kit in-game logo após a confirmação do Pix.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KITS.map((kit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative bg-card border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                kit.featured ? 'border-primary/40 shadow-[0_0_30px_hsl(270_80%_60%/0.1)]' : 'border-border'
              }`}
            >
              {kit.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary/20 border border-primary/40 rounded-full text-[9px] font-body font-black tracking-widest uppercase text-primary">
                  {kit.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <kit.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Compra Única</span>
              <h3 className="font-heading text-xl font-black text-foreground mb-1">{kit.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{kit.desc}</p>

              <ul className="space-y-1.5 mb-6 flex-1">
                {kit.items.map((item, j) => (
                  <li key={j} className="font-body text-sm text-secondary-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between">
                <div>
                  <span className="font-body text-xs text-muted-foreground line-through block">R$ {kit.oldPrice}</span>
                  <span className="font-body text-xs font-semibold text-muted-foreground">PROMOÇÃO</span>
                  <div className="font-heading text-2xl font-black text-primary mt-0.5">R$ {kit.price}</div>
                </div>
                <Button className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary font-body font-bold text-sm tracking-wider px-5 py-4 rounded-xl transition-all duration-300">
                  Comprar
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}