import { ArrowUpRight } from "lucide-react";

export const Projects = () => {

    const projects = [
        {
            title: "Mendacity",
            description: "A Unity 3D prototype. A grotesque horror game. You must keep the creature alive or risk endangering the whole world.",
            image: "/mendacity/mainmenu.png",
            tags: ["Unity", "C#", "3D"],
            link: "https://github.com/EmilM358/AwesomeHorrorGame/tree/main"
        },
        {
            title: "Gigi's Gone Missing... Again.",
            description: "A Unity 2D prototype. A noir mystery game. Your cousin Gigi has gone missing... again. Who did he get involved with this time? It's up to you to find out.",
            image: "/gigi/mainmenu.png",
            tags: ["Unity", "C#", "2D"],
            link: "https://github.com/darcyMaz/Gigis_Gone_Missing..._Again"
        },
        {
            title: "RoboHacks 2023",
            description: "Organized a robotics hackathon with over 150 participants as a member of McGill Robotics.",
            image: "/robohacks23.png",
            tags: ["Leadership", "Event Planning", "Organization", "Public Speaking"],
            link: "https://mcgillrobotics.com/2023-2024-team",
        },
        {
            title: "Square Maze Generator",
            description: "Generate a Random Square Maze and build it in Unity 3D.",
            image: "/Maze Gen.png",
            tags: ["Unity", "C#", "3D",  "Algorithm Design", "Search Algorithms"],
            link: "https://github.com/darcyMaz/Maze-Generator"
        },
        {
            title: "This website!",
            description: "I made this website following a tutorial by PedroTech on YouTube. However, I changed a handful of features to better suit my needs.",
            image: "/site github.png",
            tags: ["React", "HTML", "CSS", "Javascript", "JS"],
            link: "https://github.com/darcyMaz/portfolio_site_0.2"
        },
        {
            title: "YTtoPSP",
            description: "Python script that takes as input YouTube playlists and outputs music files that are compatible with any PSP (mine pictured).",
            image: "/psp.jpg",
            tags: ["Python", "Scripting"],
            link: "https://github.com/darcyMaz/YTtoPSP",
        },
        {
            title: "Farming",
            description: "I'm also a farmer. My family grows and sells garlic and blueberries here in the Eastern Townships, Quebec.",
            image: "/farming.jpg",
            tags: ["Planting", "Harvesting", "Workin' Hard", "Havin' Fun"],
            link: "#",
        }
        
    ]

    return (
    <section id="projects" className="py-16 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3x1"/> 
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10"> 
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl fo nt-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects
                    <span className="font-serif italic font-normal text-white"> and experiences. </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-400">
                    Games I've prototyped and experiences I've had that I believe are relevant if you want to get to know me.
                </p>
            </div>

            {/* Projects */}
            <div className="grid md:grid-cols-2 gap-8">
                {
                    projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx+1) * 100}ms`}}>
                            
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"> <ArrowUpRight className="w-5 h-5"/> </a>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
    );
}