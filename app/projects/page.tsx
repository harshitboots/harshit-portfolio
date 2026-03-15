import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

type Project = {
  name: string
  description: string
  image: string
  url: string
}

async function getProjects(): Promise<Project[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.harshittripathi.com'

    const res = await fetch(`${baseUrl}/api/github`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('Failed to fetch projects:', res.status)
      return []
    }

    const data = await res.json()

    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Projects fetch error:', error)
    return []
  }
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="cursor-default text-3xl font-extrabold tracking-tight text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] sm:text-4xl md:text-6xl">
            Projects
          </h1>

          <p className="divide-y divide-gray-200 dark:divide-gray-400">
            This section have end-to-end projects & architecture solutions
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
