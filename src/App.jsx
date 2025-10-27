import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileCarousel from "./components/ProfileCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 text-slate-900">
      <Navbar />
      <main className="space-y-14 md:space-y-20">
        <Hero />
        <ProfileCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
