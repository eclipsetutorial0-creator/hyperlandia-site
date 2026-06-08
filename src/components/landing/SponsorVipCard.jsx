import { Check, Crown, Heart, Star, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const BENEFITS_LEFT = [
  'Tag [PATROCINADOR] em vermelho no chat',
  'Tempo de TPR e Home reduzido',
  'Mochila 48 de espaço (máximo!)',
  'InstaKraft ativado',
  'MyMini a cada 20 minutos',
  'Spawn com 100% Vida, Fome e Sede',
  '5 Set Homes disponíveis',
  'Teleportes homes ilimitados',
  'Comando /Up liberado',
  'Destruir barris e farmar com 1 hit',
];

const BENEFITS_RIGHT = [
  'Bancada de Trabalho em todo TC',
  'Pesquisa e Mistura Instantâneos',
  'Torretas e SAM Site sem energia',
  'Recicladora na sua base',
  'Carro blindado de alta qualidade',
  'Cavalo a cada 30 minutos',
  'Acesso a logs de Kill',
  'Modo de reparo avançado /br',
  'Suporte ultra-prioritário',
  'Hall da Fama — lenda do servidor',
  'Chat exclusivo com admins no Discord',
];

export default function SponsorVipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id="patrocinador"
      className="relative max-w-5xl mx-auto mt-16"
    >
      {/* Red glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-800/30 via-red-600/20 to-red-800/30 rounded-3xl blur-xl" />

      <div className="relative bg-gradient-to-br from-card via-red-950/30 to-card border border-red-700/50 rounded-2xl overflow-hidden">
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

        <div className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left - Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-red-900/50 border border-red-700/60 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-red-400 bg-red-900/50 border border-red-700/50 px-2 py-0.5 rounded-full">
                      VIP Exclusivo
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl font-black text-foreground">Patrocinador</h3>
                  <p className="font-body text-sm text-muted-foreground italic mt-0.5">
                    Porque você não joga, você patrocina 😂
                  </p>
                </div>
              </div>

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                Você já foi além do VIP comum. Virou um <span className="text-red-400 font-bold">lendário</span> do servidor.
                Com o Patrocinador você tem acesso a tudo — e ainda entra no Hall da Fama.
                Não é pra qualquer um, é pra quem quer <span className="text-red-400 font-bold">reinar de verdade</span>.
              </p>

              {/* Price block */}
              <div className="bg-red-950/40 border border-red-800/40 rounded-2xl p-6 mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-body text-lg text-red-400/70 line-through">R$ 500,00</span>
                  <span className="font-body text-xs font-bold text-green-400 bg-green-900/30 px-2 py-0.5 rounded-full">50% OFF</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-body text-base text-red-300">R$</span>
                  <span className="font-heading text-5xl font-black text-red-400">250</span>
                  <span className="font-body text-base text-muted-foreground">,00</span>
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                  pagamento único — acesso permanente no wipe
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(220,38,38,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-body font-black text-base tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Quero Patrocinar o Servidor
              </motion.button>
            </div>

            {/* Right - Benefits grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold mb-3 flex items-center gap-1">
                    <Star className="w-3 h-3" /> Benefícios Exclusivos
                  </p>
                  <div className="space-y-2">
                    {BENEFITS_LEFT.map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-xs text-secondary-foreground leading-snug">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold mb-3 flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Privilégios Premium
                  </p>
                  <div className="space-y-2">
                    {BENEFITS_RIGHT.map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-xs text-secondary-foreground leading-snug">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-950/30 border border-red-800/30 rounded-xl">
                <p className="font-body text-xs text-muted-foreground text-center italic">
                  <span className="text-red-400 font-bold">⚠️ Atenção:</span> O kit deste VIP é ultra-secreto e entregue diretamente por admin no jogo. <br />Sem spoilers. Só sofrimento pra quem te encontrar 💀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}