import { Download, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "Unity",
    "C#",
    "C++",
    "Godot",
    "GodotScript",
    "Game Design",
    "Level Design",
    "Object Oriented Programming",
    "Lua",
    "Python",
    "Java",
    "Visual Studio",
    "Git",
    "Github",
    "3D Modeling",
    "Basic 3D Animation",
    "Autodesk Maya",
    "Public Speaking"
]

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src="/psp-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        
        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-auto">
            {[...Array(30)].map((_,i) => 
                (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            background: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                        key={i}
                    />
                )
                               )
            }
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - Text content */}
                <div className="space-y-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> 
                            Game Developer
                        </span>
                    </div>

                    {/* Headline - we'll change this lol */}
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                            Making <span className="text-primary glow-text"> games </span>
                            <br/>
                            is my
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                            passion.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi, my name is Darcy Mazloum and this paragraph is a brief on who I am. There is enough space
                            for this paragraph to be three to four lines.  
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>    
                        </Button>
                        <AnimatedBorderButton> <Download className="w-5 h-5"/> Download CV </AnimatedBorderButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400 border-12 border-transparent">
                        <span className="text-sm text-muted-foreground"> Socials: </span>
                        
                        <a className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" href="https://www.github.com/darcyMaz/"> 
                            <img alt="GitHub logo, black on transparent" src="/github.svg" style={{width:50, height:'auto'}}/>
                        </a>

                        <a className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 animate-fade-in" href="https://www.linkedin.com/in/darcy-mazloum/"> 
                            <img alt="Linked In logo, black on transparent" src="/linkedin.svg" style={{width:50, height:'auto'}}/>
                        </a>
                        
                    </div>

                </div>
            </div>

            {/* Right column - Profile Image */}
            <div className="relative animate-fade-in animation-delay-300">
                {/* Profile Image */}
                <div className="relative max-w-md mx-auto">
                    <div className="relative glass rounded-3xl p-2 glow-border">
                        <img src="/dm_profile.jpg" alt="Darcy Mazloum" className="w-full aspect-4/5 object-cover rounded-2xl"/>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-5 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"> </div>
                                <span className="text-sm font-medium"> Available For Work </span>
                            </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute -top-4 -right-4 flass rounded-xl px-4 py-3 animate-float animation-delay-500 bg-card">
                            <div className="text-2xl font-bold text-primary">5+</div>
                            <div className="text-xs text-muted-foreground">Years Exp.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */} 
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center"> 
                    Technologies I work with 
                </p>
                
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill,index) =>
                        {
                            skill = " " + skill + " >";
                            return (
                            <div key={index} className="shrink-0 px8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"> 
                                    {skill} 
                                </span>
                                <span> </span>
                            </div>
                        );})}
                    </div>
                </div>
            </div>

        </div>

    </section>
    );
}