import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(244,63,94,0.25),rgba(244,114,182,0.15)_40%,transparent_80%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700">
              <Sparkles className="h-3.5 w-3.5" /> Meet your match with intention
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Real connections, modern dating
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Swipe through vibrant profiles, spark conversations, and find people who vibe with you. Designed for safety, speed, and genuine chemistry.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#explore"
                className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Start exploring
              </a>
              <a
                href="#learn"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
