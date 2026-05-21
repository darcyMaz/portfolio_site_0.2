import { Download, ArrowRight, Bot, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import Marquee from "react-fast-marquee";

const technologies = [
    "Autodesk Maya", "Substance Painter", "Unity", "C#","Python", "Java", "GitHub", "Git", "Visual Studio"
]
const skills = [
    "Game Design",
    "Level Design",
    "Object Oriented Programming",
    "3D Modeling",
    "Basic 3D Animation",
    "Public Speaking",
]
const leisure = [
    "Watching The Habs", "Farming", "Video Games (duh)", "Hanging Out with Friends", "Coding", "Arts and Crafts", "Reading"
]

export const Hero = () => {

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src="/psp-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
        
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

                    {/* Headline */}
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                            Darcy  Mazloum
                        </h1>

                        <div className="py-1"></div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight animate-fade-in animation-delay-100"> 
                            Making <span className="text-primary glow-text"> games </span>
                            and building
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                            memories.
                            </span>
                        </h2>

                        <div className="py-4"></div>

                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi, my name is Darcy Mazloum. Welcome to my website! Check out the awesome games I've made and the varied (and at times eccentric) experience I have.
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
                
                {/* Right column - Profile Image */}
                <div className="space-y-8">
                    <div className="relative animate-fade-in animation-delay-300">

                        {/* Profile Image */}
                                                        {/*}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/dm_profile.jpg" alt="Darcy Mazloum, professional headshot" className="w-full aspect-4/5 object-cover rounded-2xl"/>
                                                        */}
                                {/* Floating Badge */}  {/*
                                <div className="absolute -bottom-5 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"> </div>
                                        <span className="text-sm font-medium"> Available For Work </span>
                                    </div>
                                </div>                   */}

                                {/* Stats Badge */}      {/*
                                <div className="absolute -top-4 -right-4 flass rounded-xl px-4 py-3 animate-float animation-delay-500 bg-card">
                                    <div className="text-2xl font-bold text-primary">5+</div>
                                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                                </div>
                            </div>
                        </div>                            */}

                        

                        <div className="overflow-hidden">
                            <div className="flex animate-marqueeOne">
                                
                                <img src="/gigi/at the bar.png" className="w-lg object-cover rounded-2xl" alt="Black and white 2d profile video game, in a bar, main character center and bartender behind bar" />
                                <div className="px-3"/>
                                <img src="/mendacity/lab1.png" className="w-lg object-cover rounded-2xl" alt="Strange flesh like creature in a dirty lab"/>
                                <div className="px-3"/>
                                <img src="/robohacks23.JPG" className="w-lg object-cover rounded-2xl" alt="Darcy gives a speech at the front of a full classroom"/>
                                <div className="px-3"/>
                                <img src="/gigi/gigiFriend.png" className="w-lg object-cover rounded-2xl" alt="Two characters in a black and white 2d game, profile view"/>
                                <div className="px-3"/>
                                <img src="/mendacity/baby_scissors.png" className="w-lg object-cover rounded-2xl" alt="Floating white hand in a flesh tunnel, teeth and globs blocking the way"/>
                                <div className="px-3"/>
                                <img src="/maze-assignment/keys-maze.png" className="w-lg object-cover rounded-2xl" alt="Three keys, each a different color, each with a number in the center 1, 2, and 3"/>

                            </div>

                            <div className="relative mx-auto lg:max-w-1/12 lg:bottom-13 lg:left-64 sm:max-w-1/6 sm:bottom-16 sm:left-44 ">
                                <div className="absolute -bottom-12 -right-16 glass rounded-xl px-4 py-3 animate-float">
                                    <img src="/dm_profile.jpg" alt="Darcy Mazloum, professional headshot" className="aspect-4/5 object-cover rounded-2xl"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Skills Section */} 
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-1 text-center"> 
                    Technologies I work with 
                </p>
                
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...technologies, ...technologies].map((tech,index) =>
                        {
                            return (
                            <div key={index} className="shrink-0 px-6 py-2">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"> 
                                    {tech} 
                                </span>
                            </div>
                        );})}
                    </div>
                </div>
            </div>

            

        </div>

        {/* Scoll down chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-xs uppercase tracking-wider">
                    Scroll
                </span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>

    </section>
    );
}