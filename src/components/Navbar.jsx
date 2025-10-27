import { Heart, MessageCircle, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500 grid place-items-center text-white shadow">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Flames Dating</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#explore" className="hover:text-slate-900">Explore</a>
            <a href="#stories" className="hover:text-slate-900">Stories</a>
            <a href="#safety" className="hover:text-slate-900">Safety</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
              <MessageCircle className="h-4 w-4" /> Get the app
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
