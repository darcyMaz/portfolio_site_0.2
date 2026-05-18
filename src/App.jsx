import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Experience } from "@/sections/Experience";
import { Navbar } from "@/layout/Navbar";

function App() {
    return (
    <div className="min-h-screen overflow-x-hidden">

      <Navbar />
      <main> 
          <Hero />
          <About />
          <Contacts />
          <Projects />
          <Testimonials />
          <Experience />

      </main>

    </div>  );
}

export default App
