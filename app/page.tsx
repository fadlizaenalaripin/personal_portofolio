import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import SequenceScroll from "./components/SequenceScroll";
import About from "./components/About";
import BentoSkills from "./components/BentoSkills";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />

        {/* ── Hero: sticky canvas with text overlays ── */}
        <div id="home">
          <SequenceScroll />
        </div>

        {/* ── Content sections: pull up so they start right after the canvas ── */}
        <div className="-mt-[100vh] relative z-10">
          <About />
          <Stats />
          <BentoSkills />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
