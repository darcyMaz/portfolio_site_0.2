import { Hero } from "@/homepage/sections/Hero";
import { Projects } from "@/homepage/sections/Projects";
import { Education } from "@/homepage/sections/Education";
import { Contacts } from "@/homepage/sections/Contacts";

export const Homepage = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Education />
            <Contacts />
        </>
    );
}