import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { Projects } from "@/sections/Projects";
import { Navbar } from "@/layout/Navbar";
import { Education } from "@/sections/Education";
import { Footer } from "@/layout/Footer";
import { Helmet } from "react-helmet";

function App() {
    return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Helmet>
        <title>Darcy Mazloum</title>
        <meta name="description" content="Darcy Mazloum's portfolio site. See my projects, experiences, and education. Wanna get in touch? Contact me!"/>
        <meta name="keywords" content="coding,game dev,game developer, game development, c#, unity, python, javascript, montreal, unity 3d, unity 2d, javascript, c++, c, game, gaming, gamer, coder, tutor, tutoring"/>
      </Helmet>

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
