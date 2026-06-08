const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Trophy, Send, Star } from 'lucide-react';

const TOP_DONORS = [
  { pos: 1, name: 'V4mp_Kirito', amount: 'R$ 500,00', badge: '👑' },
  { pos: 2, name: 'SoaresxRs', amount: 'R$ 250,00', badge: '🥈' },
  { pos: 3, name: 'RustFan123', amount: 'R$ 150,00', badge: '🥉' },
  { pos: 4, name: 'NightRaider', amount: 'R$ 80,00', badge: '💜' },
  { pos: 5, name: 'StormBreaker', amount: 'R$ 50,00', badge: '💜' },
];

export default function DoacaoSection() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!amount || !name) return;
    setLoading(true);
    try {
      await db.integrations.Core.SendEmail({
        to: 'hyperlandia@gmail.com',
        subject: `💜 Nova Doação de ${name} — R$ ${amount}`,
        body: `Nome: ${name}\nValor: R$ ${amount}\nMensagem: ${message || '(sem mensagem)'}`,
      });
    } catch (_) {}
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="doacao" className="relative py-20 sm:py-32 px-4 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Apoie o Servidor</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground mb-4">
            Faça uma <span className="text-primary">Doação</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Você gosta do nosso servidor? Ajude o HYPERLANDIA a se manter! Qualquer valor é de belo agrado
            e nos ajuda a manter os servidores no ar pra vocês. 💜
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Donation form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            {!sent ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-black text-foreground">Apoiar o Servidor</h3>
                    <p className="font-body text-xs text-muted-foreground">Qualquer valor faz a diferença!</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Seu Nome/Nick</label>
                    <input
                      type="text"
                      placeholder="Ex: V4mp_Kirito"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Quantidade para Doar (R$)</label>
                    <input
                      type="text"
                      placeholder="Ex: 10,00"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Deixe Sua Mensagem</label>
                    <textarea
                      placeholder="Obrigado pelo servidor incrível! 💜"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSend}
                    disabled={loading || !amount || !name}
                    className="w-full py-4 rounded-xl bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-body font-black text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_hsl(270_80%_60%/0.2)] hover:shadow-[0_0_40px_hsl(270_80%_60%/0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Enviando...' : 'Enviar Doação'}
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">💜💜</div>
                <h3 className="font-heading text-2xl font-black text-foreground mb-2">Muito Obrigado!</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Sua doação foi registrada! Você é incrível e nos ajuda a manter o servidor funcionando.
                  <br /><span className="text-primary font-bold">💜 Muito Obrigado! 💜</span>
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Placar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-black text-foreground">Placar de Doadores</h3>
                <p className="font-body text-xs text-muted-foreground">TOP 100 maiores apoiadores</p>
              </div>
            </div>

            <div className="space-y-2">
              {TOP_DONORS.map((donor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                    donor.pos <= 3
                      ? 'bg-primary/5 border-primary/20'
                      : 'bg-secondary/40 border-border'
                  }`}
                >
                  <span className="text-lg w-8 text-center">{donor.badge}</span>
                  <span className="font-body text-xs text-muted-foreground w-6 font-bold">#{donor.pos}</span>
                  <span className="font-body text-sm font-bold text-foreground flex-1">{donor.name}</span>
                  <span className={`font-body text-sm font-black ${donor.pos === 1 ? 'text-yellow-400' : donor.pos === 2 ? 'text-slate-300' : donor.pos === 3 ? 'text-amber-600' : 'text-primary'}`}>
                    {donor.amount}
                  </span>
                </motion.div>
              ))}

              <div className="mt-4 p-3 bg-secondary/30 rounded-xl border border-dashed border-border">
                <p className="font-body text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-primary" />
                  Doe e entre para o TOP 100 da história do servidor!
                  <Star className="w-3 h-3 text-primary" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}