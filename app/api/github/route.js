export async function GET() {
  const username = 'harshitboots'

  // -------- FETCH GITHUB PROJECTS --------

  const repoResponse = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      cache: 'no-store',
    }
  )

  const repoData = await repoResponse.json()

  const githubProjects = repoData
    .filter((repo) => !repo.fork && repo.name.toLowerCase() !== 'portfolio-documents')
    .map((repo) => ({
      type: 'github',

      name: repo.name,
      description: repo.description || 'GitHub Project',
      url: repo.html_url,

      stars: repo.stargazers_count,
      language: repo.language,

      image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/docs/images/thumbnail.png`,
    }))

  // -------- FETCH PDF DOCUMENTS --------

  const docsRepo = 'Portfolio-documents'

  const docsResponse = await fetch(
    `https://api.github.com/repos/${username}/${docsRepo}/contents`,
    { cache: 'no-store' }
  )

  const docsData = await docsResponse.json()

  const pdfProjects = docsData
    .filter((file) => file.name.endsWith('.pdf'))
    .map((file) => ({
      type: 'pdf',

      name: file.name.replace('.pdf', ''),
      description: 'Solution Design Document',

      url: file.download_url,

      stars: '',
      language: 'Architecture',

      image: '/pdf-thumbnail.png',
    }))

  const allProjects = [...githubProjects, ...pdfProjects]

  return Response.json(allProjects)
}
