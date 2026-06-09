import { motion } from "framer-motion";
import RichBackground from "./RichBackground";

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <RichBackground variant="hero" />

      {/* Massive vertical "P3R" mark */}
      <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none">
        <div className="font-impact text-[18rem] leading-none text-primary/10">P3R</div>
      </div>


      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
              Now boarding · Tartarus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-impact text-6xl md:text-8xl leading-[0.85] tracking-tight uppercase"
          >
            <span className="block text-foreground">Persona 3</span>
            <span className="block text-stroke-electric">Reload</span>
            <span
              className="block text-primary glitch-text"
              data-text="// activation"
            >
              // activation
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-base md:text-lg text-muted-foreground"
          >
            Beli digital activation key Persona 3 Reload secara instan. Pilih edisi-mu,
            bayar dengan metode favorit lewat <span className="text-primary font-semibold">Midtrans Snap</span>,
            dan terima serial key di layar — dalam hitungan detik.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#editions"
              className="font-impact uppercase tracking-wider px-7 py-4 jagged-clip gradient-electric text-primary-foreground shadow-electric hover:scale-105 transition-transform"
            >
              Choose Edition →
            </a>
            <a
              href="#features"
              className="font-impact uppercase tracking-wider px-7 py-4 jagged-clip border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              See What&apos;s Inside
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-6 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Sandbox mode
            </div>
            <div>· Instant delivery</div>
            <div>· Steam key</div>
          </motion.div>
        </div>

        {/* Right: stylized key card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-sm hud-bracket">
            <div className="absolute -inset-6 hex-clip gradient-shard opacity-30 blur-2xl" />
            <div className="relative jagged-clip bg-card border border-primary/60 p-8 shadow-electric">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
                <span>S.E.E.S // dorm key</span>
                <span className="hex-clip bg-primary text-primary-foreground px-2 py-0.5">04</span>
              </div>
              <div className="mt-5 font-impact text-3xl uppercase text-foreground">
                Evoker
              </div>
              <div className="mt-1 font-impact text-3xl uppercase text-primary">
                Activated
              </div>
              <div className="my-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-primary/40" />
                <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                <span className="h-px flex-1 bg-primary/40" />
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span>Platform</span>
                  <span className="text-foreground">Steam</span>
                </div>
                <div className="flex justify-between">
                  <span>Region</span>
                  <span className="text-foreground">Global</span>
                </div>
                <div className="flex justify-between">
                  <span>Stock</span>
                  <span className="text-primary">∞ Digital</span>
                </div>
              </div>
              <div className="mt-6 font-mono text-xs tracking-widest text-foreground/80 bg-secondary/60 p-3 border-l-2 border-primary">
                XXXX-XXXX-XXXX-XXXX
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
