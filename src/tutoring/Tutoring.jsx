import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Tutoring = () => {

    return(
        <div className="relative min-h-screen items-center overflow-hidden mt-48">
            
            {/** Gives background a cool blur with a slightly coloured center to it. */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-auto">
                {[...Array(60)].map((_,i) => 
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

            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> PYTHON TUTORING </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Learn the basics {' '} <span className="font-serif italic font-normal text-white"> from an expert. </span> </h2>
            </div>

            {/* Content - Take the box format from Education section. */}
            <div className="items-center min-h-screen mx-auto lg:w-2/3 w-4/5">
                

                
                <div className="relative">

                    <div className="text-center">

                        <div className="glass p-6 rounded-2xl border  border-primary/30 hover:border-primary/50 transition-all duration-200">
                            
                            
                            
                            <span className="text-xl text-white font-medium italic">
                                Montreal, Quebec
                            </span>
                            <h3 className="text-2xl font-semibold mt-2"> <span className="text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in"> Python Beginner Course </span> </h3>
                            
                            <div className="bg-gray-900 rounded-3xl m-8 border-2 border-emerald-800"> 
                                <p className="font-serif font-normal text-secondary-foreground text-3xl text-wrap px-8 py-8">
                                    In just six lessons, you or your child can <span className="font-bold italic text-secondary-foreground-1">learn the basics</span> of the <span className="font-bold text-secondary-foreground-2">Python Programming language</span>.                    
                                </p>
                            </div>

                            {/** Increase margins and text size above screen sizes */}

                        </div>
                    </div>

                    {/** Add some space here!
                     * I wouldn't mind if the other block below looks a little more glassy
                     * 
                     * grid md:grid-cols-2
                     * 
                     * <div className="relative grid grid-cols-3 glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"> 
                        <div className="text-right font-serif italic font-normal text-secondary-foreground"> The main language used for creating and training AI models. </div>
                        <img src="/python_logo.png" alt="Python Logo" className=""/>    
                        <div className="font-serif italic font-normal text-secondary-foreground"> One of the most popular programming languages on Earth. </div>
                    </div>
                     * 
                     */}

                    
                </div>

            </div>
        </div>
    );
}