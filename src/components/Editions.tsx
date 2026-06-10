import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EDITIONS, formatIDR, type Edition } from "./types";

interface Props {
  selectedId: Edition["id"];
  onSelect: (id: Edition["id"]) => void;
}

function Editions({ selectedId, onSelect }: Props) {
  return (
    <section id="editions" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-vignette-deep" />
      <div className="absolute inset-0 bg-grid-electric opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-3">
              02 · Select your edition
            </div>
            <h2 className="font-impact text-5xl md:text-7xl uppercase">
              <span className="text-foreground">Choose your</span>{" "}
              <span className="text-primary">SEES Kit</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tiga edisi — masing-masing membuka bonus digital berbeda.
            Pilih satu untuk lanjut ke checkout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {EDITIONS.map((ed, i) => {
            const active = selectedId === ed.id;
            return (
              <motion.button
                key={ed.id}
                type="button"
                onClick={() => onSelect(ed.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative text-left jagged-clip p-8 transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-electric"
                    : "bg-card border-2 border-primary/40 hover:border-primary"
                }`}
              >
                {ed.highlight && !active && (
                  <div className="absolute -top-3 right-6 px-3 py-1 tag-clip bg-accent text-accent-foreground font-impact text-[10px] uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.35em] ${
                    active ? "text-primary-foreground/70" : "text-primary"
                  }`}
                >
                  Edition · 0{i + 1}
                </div>

                <div className="mt-3 font-impact text-2xl uppercase">
                  {ed.name}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    active ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {ed.tagline}
                </p>

                <div className="my-6 h-px bg-current opacity-30" />

                <ul className="space-y-3 mb-8">
                  {ed.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 w-5 h-5 grid place-items-center hex-clip ${
                          active ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline justify-between">
                  <div>
                    <div
                      className={`font-mono text-[10px] uppercase tracking-widest ${
                        active ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      Price
                    </div>
                    <div className="font-impact text-3xl">
                      {formatIDR(ed.price)}
                    </div>
                  </div>
                  <div
                    className={`font-impact uppercase tracking-wider text-sm px-4 py-2 tag-clip ${
                      active
                        ? "bg-primary-foreground text-primary"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {active ? "Selected ✓" : "Select"}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Editions;
