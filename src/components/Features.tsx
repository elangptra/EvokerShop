import { motion } from "framer-motion";
import { Zap, Moon, Users, Sword } from "lucide-react";

const FEATURES = [
  {
    icon: Moon,
    title: "The Dark Hour",
    body: "Hidden 25th hour. Every night, Tartarus rises and Shadows roam — only Persona-users can move.",
  },
  {
    icon: Zap,
    title: "Summon by Evoker",
    body: "Pull the trigger. Aim for your head. Your Persona answers — high-fidelity remake of the iconic ritual.",
  },
  {
    icon: Users,
    title: "S.E.E.S. Bonds",
    body: "Forge Social Links with classmates and teammates. Deeper bonds unlock stronger Personas.",
  },
  {
    icon: Sword,
    title: "Tartarus Climb",
    body: "Strategic turn-based combat, redesigned. Exploit weaknesses, chain All-Out Attacks, reach the top.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-vignette-electric opacity-90" />
      <div className="absolute inset-0 bg-speedlines-soft opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-3">
            01 · What you get
          </div>
        <h2 className="font-impact text-5xl md:text-7xl uppercase max-w-3xl">
            <span className="text-foreground">More than a game.</span>{" "}
            <span className="text-stroke-electric">A Pact.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 jagged-clip bg-card border border-primary/30 hover:border-primary hover:-translate-y-1 transition-all"
            >
              <div className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.3em] text-primary/60">0{i + 1}</div>
              <div className="w-12 h-12 mb-5 hex-clip gradient-electric grid place-items-center text-primary-foreground group-hover:animate-pulse-glow">
                <f.icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div className="font-impact text-lg uppercase mb-2">{f.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
