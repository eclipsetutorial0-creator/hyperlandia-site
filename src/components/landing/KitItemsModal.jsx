import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BASE = 'https://www.zrserver.online/images/Vips_rustIcones';

const KIT_DATA = {
  'Pé-Rapado': {
    color: 'from-orange-900/40 to-orange-800/20',
    border: 'border-orange-700/50',
    accent: 'text-orange-400',
    main: [
      { img: `${BASE}/Vip-Bronze/Sleeping_Bag_icon.webp`, name: 'Saco de Dormir' },
      { img: `${BASE}/Vip-Bronze/CLOTH.webp`, name: 'Tecido' },
      { img: `${BASE}/Vip-Bronze/5.56.webp`, name: 'Munição 5.56', qty: 100 },
      { img: `${BASE}/Vip-Bronze/SEMI.webp`, name: 'Semi Automático' },
      { img: `${BASE}/Vip-Bronze/SERINGA.webp`, name: 'Seringa', qty: 5 },
      { img: `${BASE}/Vip-Bronze/MEDKIT.webp`, name: 'Kit Médico', qty: 2 },
      { img: `${BASE}/Vip-Bronze/Bandage_icon.webp`, name: 'Bandagem', qty: 10 },
      { img: `${BASE}/Vip-Bronze/barricade.wood.cover.webp`, name: 'Barricada de Madeira', qty: 3 },
      null, null, null, null,
    ],
    wear: [
      { img: `${BASE}/Vip-Bronze/Bandana_Mask_icon.webp`, name: 'Bandana' },
      { img: `${BASE}/Vip-Bronze/Hoodie_icon.webp`, name: 'Moletom' },
      { img: `${BASE}/Vip-Bronze/Jacket_icon.webp`, name: 'Jaqueta' },
      { img: `${BASE}/Vip-Bronze/Pants_icon.webp`, name: 'Calça' },
      { img: `${BASE}/Vip-Bronze/Wood_Armor_Pants_icon.webp`, name: 'Calça de Madeira' },
      { img: `${BASE}/Vip-Bronze/Boots_icon.webp`, name: 'Botas' },
      { img: `${BASE}/Vip-Bronze/Riot_Helmet_icon.webp`, name: 'Capacete Riot' },
    ],
    belt: [],
  },
  'Sobrevivente': {
    color: 'from-slate-700/40 to-slate-600/20',
    border: 'border-slate-500/50',
    accent: 'text-slate-300',
    main: [
      { img: `${BASE}/Vip-Prata/5.56-INCENCIARIA.webp`, name: '5.56 Incendiária', qty: 200 },
      { img: `${BASE}/Vip-Prata/9MM.webp`, name: 'Munição 9mm', qty: 150 },
      { img: `${BASE}/Vip-Prata/MP5.webp`, name: 'MP5' },
      { img: `${BASE}/Vip-Prata/M39_Rifle_icon.webp`, name: 'M39 Rifle' },
      { img: `${BASE}/Vip-Prata/SERINGA.webp`, name: 'Seringa', qty: 10 },
      { img: `${BASE}/Vip-Prata/MEDKIT.webp`, name: 'Kit Médico', qty: 4 },
      { img: `${BASE}/Vip-Prata/Bandage_icon.webp`, name: 'Bandagem', qty: 15 },
      { img: `${BASE}/Vip-Prata/barricade.wood.cover.webp`, name: 'Barricada', qty: 5 },
      null, null, null, null,
    ],
    wear: [
      { img: `${BASE}/Vip-Prata/roadsign.gloves.png`, name: 'Luvas Road Sign' },
      { img: `${BASE}/Vip-Prata/Hoodie_icon.webp`, name: 'Moletom' },
      { img: `${BASE}/Vip-Prata/Jacket_icon.webp`, name: 'Jaqueta' },
      { img: `${BASE}/Vip-Prata/Boots_icon.webp`, name: 'Botas' },
      { img: `${BASE}/Vip-Prata/Road_Sign_Kilt_icon.webp`, name: 'Kilt Road Sign' },
      { img: `${BASE}/Vip-Prata/Coffee_Can_Helmet_icon.webp`, name: 'Capacete Coffee Can' },
      { img: `${BASE}/Vip-Prata/Pants_icon.webp`, name: 'Calça' },
    ],
    belt: [],
  },
  'Rei do Wipe': {
    color: 'from-yellow-900/40 to-yellow-800/20',
    border: 'border-yellow-600/50',
    accent: 'text-yellow-400',
    main: [
      { img: `${BASE}/Vip-Ouro/AK.webp`, name: 'AK-47' },
      { img: `${BASE}/Vip-Ouro/BOLT.webp`, name: 'Bolt Action' },
      { img: `${BASE}/Vip-Ouro/Pumpkin_icon.webp`, name: 'Abóbora', qty: 25 },
      { img: `${BASE}/Vip-Ouro/scraptea.pure.png`, name: 'Scrap Tea' },
      { img: `${BASE}/Vip-Ouro/maxhealthtea.pure.png`, name: 'Max HP Tea' },
      { img: `${BASE}/Vip-Ouro/oretea.pure.png`, name: 'Ore Tea' },
      { img: `${BASE}/Vip-Ouro/wall.external.high.stone.png`, name: 'Muro de Pedra', qty: 10 },
      { img: `${BASE}/Vip-Ouro/Bandage_icon.webp`, name: 'Bandagem', qty: 20 },
      null, null, null, null,
    ],
    wear: [
      { img: `${BASE}/Vip-Apoiador/tactical.gloves.png`, name: 'Luvas Táticas' },
      { img: `${BASE}/Vip-Ouro/AK.webp`, name: 'AK-47' },
      { img: `${BASE}/Vip-Prata/Hoodie_icon.webp`, name: 'Moletom' },
      { img: `${BASE}/Vip-Prata/Pants_icon.webp`, name: 'Calça' },
      { img: `${BASE}/Vip-Prata/Road_Sign_Kilt_icon.webp`, name: 'Kilt Road Sign' },
      { img: `${BASE}/Vip-Bronze/Riot_Helmet_icon.webp`, name: 'Capacete Riot' },
      { img: `${BASE}/Vip-Bronze/Boots_icon.webp`, name: 'Botas' },
    ],
    belt: [],
  },
  'Lenda Hiper': {
    color: 'from-violet-900/40 to-purple-800/20',
    border: 'border-violet-500/50',
    accent: 'text-violet-300',
    main: [
      { img: `${BASE}/Vip-Apoiador/testgenerator.webp`, name: 'Gerador de Teste' },
      { img: `${BASE}/Vip-Apoiador/icethrone.png`, name: 'Trono de Gelo' },
      { img: `${BASE}/Vip-Apoiador/arcade.machine.chippy.png`, name: 'Arcade Chippy' },
      { img: `${BASE}/Vip-Apoiador/Supply_Signal_icon.webp`, name: 'Supply Signal' },
      { img: `${BASE}/Vip-Apoiador/scraptea.pure.png`, name: 'Scrap Tea' },
      { img: `${BASE}/Vip-Apoiador/oretea.pure.png`, name: 'Ore Tea' },
      { img: `${BASE}/Vip-Apoiador/woodtea.pure.png`, name: 'Wood Tea' },
      { img: `${BASE}/Vip-Apoiador/MESA-3.webp`, name: 'Mesa 3' },
      { img: `${BASE}/Vip-Apoiador/SCRAP.webp`, name: 'Scrap', qty: 1000 },
      { img: `${BASE}/Vip-Apoiador/easter.goldegg.png`, name: 'Golden Egg', qty: 50 },
      { img: `${BASE}/Vip-Apoiador/Large_Present_icon.webp`, name: 'Presente Grande', qty: 20 },
      { img: `${BASE}/Vip-Apoiador/Cooked_Chicken_icon.webp`, name: 'Frango Assado', qty: 30 },
      { img: `${BASE}/Vip-Apoiador/GRANADA.webp`, name: 'Granada', qty: 5 },
    ],
    wear: [
      { img: `${BASE}/Vip-Apoiador/tactical.gloves.png`, name: 'Luvas Táticas' },
      { img: `${BASE}/Vip-Apoiador/Ice-Facemask.png`, name: 'Máscara de Gelo' },
      { img: `${BASE}/Vip-Apoiador/Road_Sign_Kilt_icon.webp`, name: 'Kilt Road Sign' },
      { img: `${BASE}/Vip-Apoiador/Ice-Chestplate.png`, name: 'Peitoral de Gelo' },
      { img: `${BASE}/Vip-Apoiador/Hoodie_icon.webp`, name: 'Moletom' },
      { img: `${BASE}/Vip-Apoiador/Boots_icon.webp`, name: 'Botas' },
      { img: `${BASE}/Vip-Apoiador/Pants_icon.webp`, name: 'Calça' },
    ],
    belt: [
      { img: `${BASE}/Vip-Apoiador/L96.webp`, name: 'L96 Sniper' },
      { img: `${BASE}/Vip-Apoiador/Ak-Gelo.png`, name: 'AK Gelo' },
    ],
  },
};

const SLOT_ANIMATIONS = [
  { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] },
  { scale: [1, 1.2, 0.9, 1.1, 1], y: [0, -8, 0] },
  { scale: [1, 1.4, 1], rotate: [0, 360] },
  { scale: [1, 1.2, 1], x: [0, -5, 5, -5, 0] },
  { scale: [1, 1.3, 1], rotate: [0, -20, 20, 0], y: [0, -6, 0] },
  { scale: [1, 1.5, 1] },
];

function ItemSlot({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const anim = SLOT_ANIMATIONS[index % SLOT_ANIMATIONS.length];

  return (
    <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div
        className="relative w-14 h-14 sm:w-16 sm:h-16 bg-black/50 border border-white/10 rounded-lg flex items-center justify-center overflow-visible cursor-pointer"
        whileHover={{ borderColor: 'rgba(168,85,247,0.6)', boxShadow: '0 0 12px rgba(168,85,247,0.3)' }}
        transition={{ duration: 0.15 }}
      >
        {item ? (
          <>
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              animate={hovered ? anim : {}}
              transition={{ duration: 0.5 }}
            />
            {item.qty && (
              <span className="absolute bottom-0.5 right-1 text-[10px] font-body font-bold text-yellow-300">
                x{item.qty}
              </span>
            )}
          </>
        ) : (
          <span className="text-white/20 text-lg font-body">—</span>
        )}
      </motion.div>
      {/* Tooltip */}
      {item && hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 bg-black/90 border border-primary/40 rounded-lg px-3 py-1.5 whitespace-nowrap pointer-events-none"
        >
          <p className="font-body text-xs font-bold text-foreground">{item.name}</p>
          {item.qty && <p className="font-body text-[10px] text-primary text-center">x{item.qty}</p>}
        </motion.div>
      )}
    </div>
  );
}

function CategorySection({ title, items, accent }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px flex-1 bg-white/10" />
        <span className={`font-body font-bold text-xs tracking-[0.2em] uppercase ${accent}`}>{title}</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <ItemSlot key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function KitItemsModal({ open, onClose, tierName }) {
  const kit = KIT_DATA[tierName];
  if (!kit) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`bg-gradient-to-b ${kit.color} bg-card border ${kit.border} rounded-2xl p-5 sm:p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className={`w-4 h-4 ${kit.accent}`} />
                  <p className={`font-body text-xs font-bold uppercase tracking-[0.2em] ${kit.accent}`}>Kit Incluso</p>
                </div>
                <h3 className="font-heading text-2xl font-black text-foreground">VIP {tierName}</h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            </div>

            <CategorySection title="Itens Principais" items={kit.main} accent={kit.accent} />
            <CategorySection title="Roupa (Wear)" items={kit.wear} accent={kit.accent} />
            {kit.belt.length > 0 && (
              <CategorySection title="Cinto (Belt)" items={kit.belt} accent={kit.accent} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}