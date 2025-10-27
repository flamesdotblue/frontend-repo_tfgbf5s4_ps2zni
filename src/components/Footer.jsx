import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-pink-500" />
            <span>Made with care for genuine connections</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
            <a href="#support" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
