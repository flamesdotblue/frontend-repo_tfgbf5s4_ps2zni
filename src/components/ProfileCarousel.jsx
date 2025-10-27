import { useState, useMemo } from "react";
import { Heart, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sampleProfiles = [
  {
    id: 1,
    name: "Maya, 26",
    bio: "Coffee enthusiast, weekend hiker, and film photography nerd.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    tags: ["Outdoors", "Art", "Brunch"],
  },
  {
    id: 2,
    name: "Jules, 29",
    bio: "Tech product manager who bakes bread on Sundays.",
    image:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1600&auto=format&fit=crop",
    tags: ["Books", "Travel", "Coffee"],
  },
  {
    id: 3,
    name: "Ari, 24",
    bio: "Spin class addict and board game champion.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    tags: ["Fitness", "Games", "Dogs"],
  },
  {
    id: 4,
    name: "Noah, 28",
    bio: "Amateur chef, sunset chaser, and plant parent.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop",
    tags: ["Cooking", "Nature", "Music"],
  },
];

export default function ProfileCarousel() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  const current = useMemo(() => sampleProfiles[index], [index]);

  const like = () => {
    if (!current) return;
    setLiked((prev) => [...prev, current.id]);
    setIndex((i) => Math.min(i + 1, sampleProfiles.length));
  };

  const pass = () => {
    setIndex((i) => Math.min(i + 1, sampleProfiles.length));
  };

  const reset = () => {
    setIndex(0);
    setLiked([]);
  };

  const reachedEnd = index >= sampleProfiles.length;

  return (
    <section id="explore" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-8 md:grid-cols-[1fr_340px] md:gap-10">
        <div>
          <h2 className="text-2xl font-bold">Explore nearby</h2>
          <p className="mt-1 text-slate-600">
            Swipe through curated profiles based on your interests and vibe.
          </p>

          <div className="relative mt-6 h-[520px]">
            <AnimatePresence mode="popLayout">
              {!reachedEnd && current && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 40, rotate: 6 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -40, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-3/5 w-full object-cover"
                    loading="eager"
                  />
                  <div className="flex h-2/5 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-xl font-semibold">{current.name}</h3>
                      <p className="mt-1 text-slate-600">{current.bio}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {current.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        onClick={pass}
                        className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow hover:bg-slate-50"
                        aria-label="Pass"
                      >
                        <X className="h-6 w-6" />
                      </button>
                      <button
                        onClick={like}
                        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:opacity-95"
                        aria-label="Like"
                      >
                        <Heart className="h-7 w-7" />
                      </button>
                      <button
                        onClick={() => alert("Superlike sent! ✨")}
                        className="grid h-12 w-12 place-items-center rounded-full border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
                        aria-label="Super Like"
                      >
                        <Star className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {reachedEnd && (
              <div className="absolute inset-0 grid place-items-center rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold">You're all caught up</h3>
                  <p className="mt-1 text-slate-600">
                    {liked.length > 0
                      ? `You liked ${liked.length} profile${liked.length > 1 ? "s" : ""}.`
                      : "You can reset to explore again."}
                  </p>
                  <button
                    onClick={reset}
                    className="mt-6 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
                  >
                    Reset and reswipe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="order-first md:order-last">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Smart matching</h3>
            <p className="mt-1 text-slate-600">
              We prioritize compatibility based on shared interests, values, and your in-app behavior.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-pink-500" /> Curated daily picks</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Verified profiles</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Safety-first design</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
