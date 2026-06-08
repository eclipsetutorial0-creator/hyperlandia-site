import { Shield, Zap, Users, Server, Gamepad2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  { icon: Shield, title: 'Anti-Cheat', desc: 'Sistema avançado de detecção para manter o jogo justo.' },
  { icon: Zap, title: 'Alta Performance', desc: 'Servidores otimizados para máxima velocidade e baixo ping.' },
  { icon: Users, title: 'Comunidade Ativa', desc: 'Milhares de jogadores online todos os dias.' },
  { icon: Server, title: 'Uptime 99.9%', desc: 'Servidores estáveis 24/7 com manutenção programada.' },
  { icon: Gamepad2, title: 'Eventos Semanais', desc: 'Raids, torneios e eventos exclusivos toda semana.' },
  { icon: Clock, title: 'Wipes Regulares', desc: 'Wipes programados para manter o jogo sempre fresco.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">Recursos</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
            Por que <span className="text-primary">HyperLandia</span>?
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            A melhor experiência de Rust do Brasil com infraestrutura de ponta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}