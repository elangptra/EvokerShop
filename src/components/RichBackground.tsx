import { motion } from "framer-motion";
import { JaggedSlash, InkSplatter, StarBurst } from "./abstract";

type Variant = "hero" | "deep" | "panel" | "inverse";

interface Props {
  variant?: Variant;
  /** Intensity 0-1, default 1 */
  intensity?: number;
}

function RichBackground({ variant = "hero", intensity = 1 }: Props) {
  const isInverse = variant === "inverse";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: gradient vignette (the "color" foundation) */}
      <div
        className={
          variant === "deep"
            ? "absolute inset-0 bg-vignette-deep"
            : variant === "inverse"
              ? "absolute inset-0"
              : variant === "panel"
                ? "absolute inset-0 bg-vignette-deep"
                : "absolute inset-0 bg-vignette-electric"
        }
      />

      {/* Layer 2: speed-lines sweep */}
      <div
        className={`absolute inset-0 ${
          variant === "hero" ? "bg-speedlines" : "bg-speedlines-soft"
        }`}
        style={{ opacity: 0.7 * intensity }}
      />

      {/* Layer 3: halftone dots — denser one corner, sparser opposite */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3"
        style={{
          backgroundImage: `radial-gradient(${
            isInverse ? "oklch(0.55 0.24 255 / 0.25)" : "oklch(0.55 0.24 255 / 0.18)"
          } 1.2px, transparent 1.6px)`,
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(ellipse at top right, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at top right, black 20%, transparent 75%)",
          opacity: 0.9 * intensity,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
        style={{
          backgroundImage: `radial-gradient(${
            isInverse ? "oklch(0.55 0.24 255 / 0.20)" : "oklch(0.15 0.04 255 / 0.08)"
          } 1px, transparent 1.4px)`,
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom left, black 15%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 15%, transparent 70%)",
          opacity: 0.8 * intensity,
        }}
      />

      {/* Layer 4: glowing color blobs — soft chromatic light */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: isInverse
            ? "radial-gradient(circle, oklch(0.55 0.24 255 / 0.20), transparent)"
            : "radial-gradient(circle, oklch(0.55 0.24 255 / 0.15), transparent)",
        }}
      />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: isInverse
            ? "radial-gradient(circle, oklch(0.55 0.24 255 / 0.18), transparent)"
            : "radial-gradient(circle, oklch(0.65 0.20 245 / 0.12), transparent)",
        }}
      />

      {/* Layer 5: corner shards — give a "cracked" frame */}
      <div className="absolute -top-10 -left-10 w-64 h-64" style={{ opacity: 0.18 * intensity }}>
        <JaggedSlash
          className="w-full h-full"
          color={isInverse ? "var(--electric)" : "var(--electric)"}
          rotate={-15}
        />
      </div>
      <div className="absolute -bottom-12 -right-10 w-72 h-72" style={{ opacity: 0.18 * intensity }}>
        <JaggedSlash
          className="w-full h-full"
          color={isInverse ? "var(--electric-glow)" : "var(--electric-glow)"}
          rotate={160}
        />
      </div>

      {/* Layer 6: a few floating stars at random spots */}
      <StarBurst
        className="absolute top-[18%] left-[12%] w-6 h-6 opacity-60"
        color={isInverse ? "var(--electric)" : "var(--electric)"}
      />
      <StarBurst
        className="absolute top-[70%] left-[78%] w-4 h-4 opacity-50"
        color={isInverse ? "var(--electric)" : "var(--electric)"}
      />
      <StarBurst
        className="absolute top-[35%] right-[6%] w-5 h-5 opacity-40"
        color={isInverse ? "var(--electric)" : "var(--electric)"}
      />

      {/* Layer 7: ink splatter — final organic accent */}
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px]" style={{ opacity: 0.10 * intensity }}>
        <InkSplatter
          className="w-full h-full"
          color={isInverse ? "oklch(0.55 0.24 255)" : "oklch(0.55 0.24 255)"}
        />
      </div>

      {/* Vignette overlay to keep edges soft and content readable */}
      <div
        className="absolute inset-0"
        style={{
          background: isInverse
            ? "radial-gradient(ellipse at center, transparent 30%, oklch(0.55 0.24 255 / 0.08) 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, oklch(0.15 0.04 255 / 0.10) 100%)",
        }}
      />
    </div>
  );
}
export default RichBackground;
