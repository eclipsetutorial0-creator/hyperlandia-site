import { LogIn, QrCode, MessageSquare, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    icon: LogIn,
    title: 'Entra com Discord + SteamID',
    desc: 'Loga com seu Discord e coloca seu SteamID no perfil HyperLandia (obrigatório).',
  },
  {
    num: '02',
    icon: QrCode,
    title: 'Manda o Pix',
    desc: 'Rápido, seguro e em reais. Sem enrolação, só copia e cola.',
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Abre ticket no Discord',
    desc: 'Envia o comprovante e seus dados de jogo no canal de suporte.',
  },
  {
    num: '04',
    icon: Gamepad2,
    title: 'Recebe in-game',
    desc: 'Admin aplica seus benefícios na hora. Vai jogar, noob.',
  },
];

export default function HowToBuySection() {
  return (
    <section id="como-comprar" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Processo Simples</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Como <span className="text-primary">Comprar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-card border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-heading text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">{step.num}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-[2px] bg-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}