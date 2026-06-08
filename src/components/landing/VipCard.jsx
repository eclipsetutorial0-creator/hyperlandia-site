import { useState } from 'react';
import { Check, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import KitItemsModal from './KitItemsModal';

const TIER_STYLES = {
  'Pé-Rapado': {
    glow: 'shadow-orange-900/30',
    border: 'border-orange-800/60 hover:border-orange-600/60',
    featuredBorder: '',
    badge: 'bg-orange-900/80 text-orange-300 border-orange-700/50',
    btnClass: 'bg-orange-700 hover:bg-orange-600 text-white shadow-orange-900/40',
    toggleActive: 'bg-orange-700 text-white',
    priceColor: 'text-orange-300',
    checkColor: 'text-orange-400',
    accentLine: 'from-orange-600 via-orange-400 to-orange-600',
  },
  'Sobrevivente': {
    glow: 'shadow-slate-500/20',
    border: 'border-slate-600/60 hover:border-slate-400/60',
    featuredBorder: 'border-primary shadow-[0_0_50px_hsl(270_80%_60%/0.25)] scale-[1.02]',
    badge: 'bg-primary/20 text-primary border-primary/40',
    btnClass: 'bg-primary hover:bg-primary/80 text-white shadow-primary/30',
    toggleActive: 'bg-primary text-white',
    priceColor: 'text-foreground',
    checkColor: 'text-primary',
    accentLine: 'from-primary via-accent to-primary',
  },
  'Rei do Wipe': {
    glow: 'shadow-yellow-900/30',
    border: 'border-yellow-800/60 hover:border-yellow-500/60',
    featuredBorder: '',
    badge: 'bg-yellow-900/80 text-yellow-300 border-yellow-700/50',
    btnClass: 'bg-yellow-600 hover:bg-yellow-500 text-black font-black shadow-yellow-900/40',
    toggleActive: 'bg-yellow-600 text-black',
    priceColor: 'text-yellow-300',
    checkColor: 'text-yellow-400',
    accentLine: 'from-yellow-600 via-yellow-400 to-yellow-600',
  },
  'Lenda Hiper': {
    glow: 'shadow-violet-900/40',
    border: 'border-violet-700/60 hover:border-violet-500/60',
    featuredBorder: '',
    badge: 'bg-violet-900/80 text-violet-300 border-violet-700/50',
    btnClass: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-violet-900/50',
    toggleActive: 'bg-violet-600 text-white',
    priceColor: 'text-violet-300',
    checkColor: 'text-violet-400',
    accentLine: 'from-violet-600 via-purple-400 to-violet-600',
  },
};

export default function VipCard({ tier, index, icon }) {
  const [billing, setBilling] = useState('mensal');
  const [showKit, setShowKit] = useState(false);

  const s = TIER_STYLES[tier.name] || TIER_STYLES['Sobrevivente'];
  const price = billing === 'mensal' ? tier.monthlyPrice : tier.weeklyPrice;
  const period = billing === 'mensal' ? 'mês' : 'semana';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        className={`relative flex flex-col bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${s.glow} ${tier.featured ? s.featuredBorder : s.border}`}
      >
        {tier.featured && (
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.accentLine}`} />
        )}
        {tier.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-body text-[10px] font-black bg-primary text-white px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
              <Zap className="w-3 h-3" /> Mais Popular
            </span>
          </div>
        )}

        <div className="p-6 pb-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-14 h-14 rounded-xl border flex items-center justify-center p-1.5 ${s.badge}`}>
              {icon ? (
                <img src={icon} alt={tier.name} className="w-full h-full object-contain" />
              ) : (
                <span className="text-2xl">⚔️</span>
              )}
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="font-body text-xs text-muted-foreground italic">{tier.subtitle}</p>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex bg-secondary rounded-full p-1 mb-5">
            {['semanal', 'mensal'].map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`flex-1 font-body text-xs font-bold tracking-wider py-2 rounded-full transition-all duration-300 ${billing === b ? s.toggleActive : 'text-muted-foreground hover:text-foreground'}`}
              >
                {b.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="mb-1">
            <span className="font-body text-sm text-muted-foreground">R$ </span>
            <span className={`font-heading text-4xl font-black ${s.priceColor}`}>{price}</span>
          </div>
          <p className="font-body text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-5">por {period}</p>

          {/* Benefits */}
          <div className="mb-5">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">Benefícios</p>
            <div className="space-y-2">
              {tier.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="flex items-start gap-2.5"
                >
                  <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${s.checkColor}`} />
                  <span className="font-body text-sm text-secondary-foreground leading-snug">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto p-6 pt-0 space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowKit(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-secondary/50 hover:bg-secondary transition-colors font-body text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <Eye className="w-4 h-4" />
            Ver itens do kit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 rounded-xl font-body font-bold text-sm tracking-wider transition-all duration-300 ${s.btnClass}`}
          >
            Assinar {tier.name}
          </motion.button>
        </div>
      </motion.div>

      <KitItemsModal open={showKit} onClose={() => setShowKit(false)} tierName={tier.name} />
    </>
  );
}