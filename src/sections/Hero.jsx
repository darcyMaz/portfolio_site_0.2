

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
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
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> 
                                Game Developer
                        </span>
                    </div>

                    {/* Headline - we'll change this lol */}
                    <div>
                        <h1>
                            Making <span className="text-primary glow-text"> games </span>
                            <br/>
                            is my
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                            passion.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                            Hi, my name is Darcy Mazloum and this paragraph is a brief on who I am. There is enough space
                            for this paragraph to be three to four lines.  
                        </p>
                    </div>
                </div>
            </div>

            {/* Right column - Profile Image */}
            
        </div>

    </section>
    );
}