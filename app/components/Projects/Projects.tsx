import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Project from './Project'
import projectsData from '@/data/projects.json'
import Image from 'next/image'

// Define TypeScript type for a project
interface ProjectType {
  thumbnail: string
  title: string
  link: { label: string; url: string }
  description: string
  languageIcon: string[]

}

// Tell TypeScript that the imported JSON matches the type
const projects: ProjectType[] = projectsData as ProjectType[]

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]">
        <SectionHeader plainText=" Some of my" highlightText="Best works">
          <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            {projects.map((project, id) => (
              <Project
                key={id}
                thumbnail={project.thumbnail}
                title={project.title}
                link={project.link}
                description={project.description}
                languageIcon={project.languageIcon} // matches ProjectType
              />
            ))}
          </div>
        </SectionHeader>
      </div>
      <Image
        src = "/projects_highlight.svg"
        alt = "background highlight decoration"
        width = {558}
        height = {558}
        className = "absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src = "/projects_highlight_mobile.svg"
        alt = "Mobile background highlight decoration"
        width = {321}
        height = {530}
        className = "absolute md:hidden  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </SectionContainer>
  )
}

export default Projects
