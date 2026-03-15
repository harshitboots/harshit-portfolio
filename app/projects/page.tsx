import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

type Project = {
  name: string
  description: string
  image: string
  url: string
}

export default async function Projects() {
  const res = await fetch('http://localhost:3000/api/github', {
    cache: 'no-store',
  })

  const projects: Project[] = await res.json()

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="cursor-default text-3xl font-extrabold tracking-tight text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] sm:text-4xl md:text-6xl">
            Projects
          </h1>

          <p className="divide-y divide-gray-200 dark:divide-gray-400">
            This section have end-to-end projects & architectures solutions
          </p>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.name}
                description={project.description}
                imgSrc={project.image}
                href={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
