import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectModal } from '@/components/projects/ProjectModal'
import { projects } from '@/data/resume'
import type { Project } from '@/types'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <Section
      id="projects"
      label="Projects"
      title="Key Projects"
      subtitle="Production initiatives from my time at PayPal and HCL Tech, alongside personal, AI-assisted projects on GitHub."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
