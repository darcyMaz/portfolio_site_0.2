import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Homepage } from "@/homepage/Homepage";
import { Tutoring } from "@/tutoring/Tutoring";
import { Helmet } from "react-helmet";


function App() {
    return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Helmet>
        <title>Darcy Mazloum</title>
        <meta name="description" content="Darcy Mazloum's portfolio site. See my projects, experiences, and education."/>
        <meta name="keywords" content="coding,game dev,game developer, game development, c#, unity, python, javascript, montreal, unity 3d, unity 2d, javascript, c++, c, game, gaming, gamer, coder, tutor, tutoring"/>
      </Helmet>

      <Navbar />

      <main> 
          <Tutoring />
      </main>

      <Footer />

    </div>  );
}

export default App
