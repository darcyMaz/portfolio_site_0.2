import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Projects } from "@/sections/Projects";
import { Navbar } from "@/layout/Navbar";
import { Education } from "@/sections/Education";
import { Footer } from "@/layout/Footer";

function App() {
    return (
    <div className="min-h-screen overflow-x-hidden">

      <Navbar />
      <main> 
          <Hero />
          <Projects />
          <Education />
          <Contacts />
      </main>
      <Footer />

    </div>  );
}

export default App
