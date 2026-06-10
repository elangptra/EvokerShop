import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 backdrop-blur-md bg-background/70 border-b border-primary/30" />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 hex-clip gradient-electric grid place-items-center shadow-electric">
            <span className="font-impact text-ink text-lg">S</span>
          </div>
          <div className="leading-none">
            <div className="font-impact text-xl tracking-tight text-foreground">
              EVOKER<span className="text-primary">SHOP</span>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
              S.E.E.S — digital storefront
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1 font-impact text-sm uppercase tracking-wider">
          {[
            { href: "#features", label: "Features" },
            { href: "#editions", label: "Editions" },
            { href: "#checkout", label: "Checkout" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 tag-clip text-foreground/80 hover:text-primary-foreground hover:bg-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#checkout"
          className="hidden md:inline-flex font-impact uppercase tracking-wider text-sm px-5 py-2 jagged-clip gradient-electric text-primary-foreground shadow-electric hover:scale-105 transition-transform"
        >
          Pay Now
        </a>
      </motion.nav>
    </header>
  );
}

export default Navbar;
