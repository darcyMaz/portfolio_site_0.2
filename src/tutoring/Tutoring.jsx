import { Button } from "@/components/Button"

export const Tutoring = () => {

    return(
        <div className="relative min-h-screen items-center overflow-hidden mt-24 md:mt-32">
            
            {/** BACKGROUND: Gives background a cool blur with a slightly coloured center to it. */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            {/* BACKGROUND: Green Dots */}
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

            {/* First Sections */}
            <div className="items-center mb-4 md:mb-6 mx-auto lg:w-2/3 w-4/5">

                <div className="relative">

                    <div className="text-center">

                        <div className="glass p-6 rounded-2xl border  border-primary/30 hover:border-primary/50 transition-all duration-200">
                            
                            
                            
                            <span className="text-xl text-white font-medium italic">
                                Montreal, Quebec
                            </span>
                            <h3 className="text-xl sm:text-2xl font-semibold mt-2"> <span className="text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in"> Python Beginner Course </span> </h3>
                            
                            <div className="bg-gray-900 rounded-3xl m-8 border-2 border-emerald-800"> 
                                <p className="font-serif font-normal text-secondary-foreground text-lg sm:text-3xl text-wrap px-4 py-4 sm:px-8 sm:py-8">
                                    In just six lessons, you or your child can <span className="font-bold italic text-secondary-foreground-1">learn the basics</span> of the <span className="font-bold text-secondary-foreground-2">Python Programming language</span>.                    
                                </p>
                            </div>

                            {/** Increase margins and text size above screen sizes
                             *   Done: But double check on computer
                             */}

                        </div>
                    </div>
                </div>
            </div>

            {/** Some CTA buttons */}
            <div className="grid md:grid-cols-2 mb-4 md:mb-6 content-center justify-items-center h-48">
                <Button className="md:ml-36 my-4 md:my-6 w-2/5 sm:w-1/3 md:w-1/2 lg:w-2/5 md:h-20 md:text-xl 2xl:w-1/3 2xl:ml-64 bg-secondary-foreground-2 hover:bg-secondary-foreground-2/90"> Meet Your Tutor! </Button>

                <Button className="md:mr-36 my-4 md:my-6 w-2/5 sm:w-1/3 md:w-1/2 lg:w-2/5 md:h-20 md:text-xl 2xl:w-1/3 2xl:mr-64"> Sign Up Now! </Button>
            </div>

            {/* Second Section */}
            <div className="items-center mx-auto lg:w-2/3 w-4/5 mb-8 md:mb-16">

                <div className="relative">

                    <div className="text-center">

                        {/** Small grid */}
                        <div className="glass grid md:grid-cols-3 p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-200">
                            
                            <div className="bg-gray-900 rounded-3xl my-4 mx-16 sm:mx-24 md:mx-2 border-2 border-emerald-800" > 
                                <p className="font-serif font-normal text-secondary-foreground text-xl sm:text-2xl text-wrap px-2 py-2 sm:px-4 sm:py-4">
                                    Six Lessons
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-3xl my-4 mx-16 sm:mx-24 md:mx-2 border-2 border-emerald-800"> 
                                <p className="font-serif font-normal text-secondary-foreground text-xl sm:text-2xl text-wrap px-2 py-2 sm:px-4 sm:py-4">
                                    Eight Hours
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-3xl my-4 mx-16 sm:mx-24 md:mx-2 border-2 border-emerald-800"> 
                                <p className="font-serif font-normal text-secondary-foreground text-xl sm:text-2xl md:text-lg txbp2:text-2xl lg:text-xl txbp1:text-2xl text-wrap px-2 py-2 sm:px-4 sm:py-4">
                                    Reasonable Price
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            
            <div className="items-center mx-auto w-5/6">
                <div className="relative">
                    <div className="text-center">

                        <div className="glass grid lg:grid-cols-2 p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-200">
                            {/** Meet your tutor 
                             * Title
                             * Pic - Bio
                             * More Bio
                            */}
                            <div className="mx-6 xl:mx-6 lg:mx-0 justify-items-center">

                                {/** Title */}
                                <div className="bg-gray-900 rounded-3xl my-4 mx-4 sm:mx-18 md:mx-24 lg:mx-16 xl:mx-24 2xl:mx-28 border-2 border-emerald-800">
                                    <p className="font-serif font-normal text-secondary-foreground text-xl sm:text-2xl text-wrap px-2 py-2 sm:px-4 sm:py-4">
                                        Meet Your Tutor!
                                    </p>
                                </div>

                                {/** Bio - Pic */}
                                <div className="grid md:grid-cols-2">

                                    {/** Bio */}
                                    <div className="grid bg-gray-900 rounded-2xl border-3 border-emerald-800 text-justify font-serif font-normal text-emerald-300 xl:text-md biotxt1:text-lg biotxt2:text-xxl biotxt3:text-2xl">
                                        <p className="px-2 py-4">
                                            &#x2022; Graduate from McGill with a Bachelors in Computer Science and Political Science.
                                        </p>
                                        <p className="px-2 py-4">
                                            &#x2022; Currently studying Video Game Design at Dawson College.
                                        </p>
                                        <p className="px-2 py-4">
                                            &#x2022; An experienced peer tutor at the Dawson Student Center.
                                        </p>

                                    </div>

                                    {/** Pic */}
                                    <div className="">
                                        <div className="bg-gray-900 rounded-3xl my-4 mx-16 sm:mx-24 md:mx-20 lg:mx-8 2xl:mx-14 border-2 border-emerald-800 "> 
                                            <p className="font-serif font-normal text-secondary-foreground text-lg sm:text-xl text-wrap">
                                                Darcy Mazloum
                                            </p>
                                        </div>

                                        <div className="rounded border-4 xl:mb-12 xl:mx-12 lg:mb-8 lg:mx-8 border-emerald-950 overflow-hidden">
                                            <img src="/dm_grad.jpg" alt="Darcy Mazloum in a graduation gown holding a diploma that says 'Class of 2024'" />
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                            {/** With Python You Can:
                             * Title
                             * Domain - Explanation
                             */}
                            <div className="mx-6">
                                <div className="bg-gray-900 rounded-3xl my-4 sm:mx-18 md:mx-24 lg:mx-48 xl:mx-24 2xl:mx-24 border-2 border-emerald-800">
                                    <p className="font-serif font-normal text-secondary-foreground text-xl sm:text-2xl text-wrap px-2 py-2 sm:px-4 sm:py-4">
                                        With <span className="italic text-secondary-foreground-2"> Python  </span> you can...
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}