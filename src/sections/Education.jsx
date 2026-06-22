const education_items = [
    {
        period: "2025-Present",
        school: "Dawson College",
        program: "Independent Video Game Design",
        degree: "Attestation of Collegial Studies",
        description: "Specializing in building games in all of its aspects. Programming in C# in the Unity Game Engine, 3D Modelling in Autodesk Maya, using Substance Painter to paint models, and learning all about design games.",
        current: true,
    },
    {
        period: "2020-2024",
        school: "McGill University",
        program: "Double Major in Computer Science and Political Science",
        degree: "Bachelor of Arts and Sciences",
        description: "At McGill University, I completed two majors. One in Computer Science and one in Political Science. I learned an incredible amount of skills that perfectly suited me for video game development and design.",
        current: false,
    },
    {
        period: "2018-2020",
        school: "Marianopolis College",
        program: "Pure and Applied Sciences",
        degree: "DEC",
        description: "My time at the CEGEP Marianopolis College showed me a variety of skills in the sciences including biology, chemistry, physics, and maths. I decided however, to pursue Computer Science.",
        current: false,
    },
    {
        period: "2013-2018",
        school: "Loyola High School",
        program: "",
        degree: "High School Diploma",
        description: "Born and raised in Montreal, I went to Loyola High School in Notre-Dame-de-Grace.",
        current: false,
    },
]

export const Education = () => {
    return (
    <section id="education" className="py-24 relative overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0">
            <img src="/psp-bg.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" />
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

        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-5xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Education
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Crafting my expertise via elite <span className="font-serif italic font-normal text-white"> education. </span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A brief timeline of my education.
                </p>

            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                {/* Education Items */}
                <div className="space-y-12">
                    {education_items.map((edu, idx) =>
                        (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: `${(idx+1)*150}ms`}}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    { edu.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />)}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${ idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2"> <span className="text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in">{edu.school} {'  ~  '} </span>  {edu.program}</h3>
                                        <p className="text-muted-foreground">   {edu.degree} </p>
                                        <p className="text-sm text-muted-foreground mt-4"> {edu.description} </p>

                                        
                                    </div>
                                </div>

                            </div>
                        )               
                        )
                    }
                </div>

            </div>
        </div>

    </section>
    );
}