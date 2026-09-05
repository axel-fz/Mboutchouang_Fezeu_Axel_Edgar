'use client'
import React from 'react' ;
import Contact from './Contact';
import Experiences from './Experinces/Experiences';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/Testimonials';


const Sections  = () => {
    return (
        <main className ="flex flex-col  gap-[142px] w:full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
            <Hero />
            <Skills />
            <Projects />
            <Testimonials />
            <Experiences />
            <Contact />
        </main>
    )
}

export default Sections