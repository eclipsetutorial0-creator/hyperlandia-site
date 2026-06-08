import { motion } from 'framer-motion';
import { Download, Users, Code2, ChevronRight, Shield, Gauge, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STEPS = [
  { n: 1, text: 'Desative o Windows Defender temporariamente' },
  { n: 2, text: 'Baixe nosso launcher clicando no botão abaixo' },
  { n: 3, text: 'Extraia o arquivo com o WinRAR ou 7-Zip' },
  { n: 4, text: 'Abra o HYPERLAUNCHER.exe com dois cliques' },
  { n: 5, text: 'Ative o FPS BOOST para melhor otimização' },
  { n: 6, text: 'Clique em Play e aguarde o carregamento...' },
  { n: 7, text: 'Vá em Comunidade → marque "mostrar servidor vazio e cheio"' },
  { n: 8, text: 'Procure por [BR] HYPERLANDIA e clique em Entrar' },
  { n: 9, text: 'Aguarde carregar...' },
  { n: 10, text: 'Agora seja feliz! 🎉' },
];

export default function InicioSection() {
  return (
    <>
      {/* SOBRE */}
      <section id="sobre" className="relative py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Sobre o Servidor</p>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                Bem-Vindos ao<br /><span className="text-primary">HYPERLANDIA</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Aqui você vai encontrar de tudo — pode baixar nosso launcher para jogar Rust de graça,
                criar novas amizades e se divertir sem precisar comprar o jogo. Temos VIPs exclusivos,
                eventos semanais e uma comunidade que só cresce!
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                O que tá esperando? <span className="text-primary font-bold">Vamos nos divertir juntos em HYPERLANDIA!</span> 💜
              </p>
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-body font-bold text-sm tracking-wider gap-2 px-6 py-5 rounded-xl shadow-[0_0_30px_hsl(270_80%_60%/0.3)] hover:shadow-[0_0_50px_hsl(270_80%_60%/0.5)] transition-all duration-300">
                <Download className="w-4 h-4" />
                Baixar Launcher Grátis
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Play, title: 'Rust Gratuito', desc: 'Jogue sem precisar comprar o jogo original' },
                { icon: Users, title: 'Comunidade', desc: 'Amizades reais e jogadores de todo o Brasil' },
                { icon: Shield, title: 'VIPs Exclusivos', desc: 'Kits poderosos e vantagens únicas no servidor' },
                { icon: Gauge, title: 'Alta Performance', desc: 'FPS Boost incluso no launcher para rodar melhor' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMO JOGAR */}
      <section id="como-jogar" className="relative py-20 sm:py-28 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Tutorial</p>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
              Como <span className="text-primary">Jogar</span>
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
              Quer jogar Rust de graça? Então aqui vai o passo a passo de como baixar e entrar no servidor!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative bg-card border rounded-2xl p-5 flex items-start gap-4 hover:border-primary/40 transition-all duration-300 ${
                  step.n === 10 ? 'border-primary/50 shadow-[0_0_20px_hsl(270_80%_60%/0.1)] sm:col-span-2 lg:col-span-1' : 'border-border'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-heading font-black text-sm">
                  {step.n}
                </div>
                <p className="font-body text-sm text-secondary-foreground leading-snug mt-1">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <Button
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1e9W4H4rhyWz4CGGRp54BLx4E7NHIQ16x/view?usp=sharing', '_blank')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-body font-bold text-base tracking-wider gap-3 rounded-xl px-8 py-5 shadow-[0_0_30px_hsl(270_80%_60%/0.3)] hover:shadow-[0_0_50px_hsl(270_80%_60%/0.5)] transition-all duration-300"
              >
              <Download className="w-5 h-5" />
              Baixar Launcher
              </Button>
          </motion.div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Time</p>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
              Nossa <span className="text-primary">Equipe</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'V4mp_Kirito', role: 'Owner · Dev · Design', icon: '👑', highlight: true },
              { name: 'SoaresxRs', role: 'SubOwner', icon: '⚔️', highlight: false },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative bg-card border rounded-2xl p-8 flex flex-col items-center gap-3 w-64 transition-all duration-300 ${
                  member.highlight
                    ? 'border-primary/50 shadow-[0_0_30px_hsl(270_80%_60%/0.15)]'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {member.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-t-2xl" />
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${member.highlight ? 'bg-primary/20 border border-primary/40' : 'bg-secondary border border-border'}`}>
                  {member.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-lg font-black text-foreground">{member.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </div>
                {member.highlight && (
                  <div className="flex items-center gap-1 mt-1">
                    <Code2 className="w-3 h-3 text-primary" />
                    <span className="font-body text-[10px] text-primary font-bold uppercase tracking-widest">Fundador</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}