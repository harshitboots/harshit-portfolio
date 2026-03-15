export async function GET() {
  try {
    const username = 'harshitboots'
    const token = process.env.GITHUB_TOKEN

    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'harshit-portfolio',
      Authorization: `Bearer ${token}`,
    }

    // -----------------------------
    // FETCH GITHUB REPOSITORIES
    // -----------------------------

    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers,
        cache: 'no-store',
      }
    )

    if (!repoResponse.ok) {
      console.error('GitHub repo fetch failed:', repoResponse.status)
      return Response.json([])
    }

    const repoData = await repoResponse.json()

    const githubProjects = repoData
      .filter((repo) => !repo.fork && repo.name.toLowerCase() !== 'portfolio-documents')
      .map((repo) => ({
        type: 'github',

        name: repo.name,

        description:
          repo.description ||
          'End-to-end data engineering project using modern data platform architecture.',

        url: repo.html_url,

        stars: repo.stargazers_count || 0,

        language: repo.language || 'Data Engineering',

        image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/docs/images/thumbnail.png`,
      }))

    // -----------------------------
    // FETCH ARCHITECTURE DOCUMENTS
    // -----------------------------

    const docsRepo = 'portfolio-documents'

    const docsResponse = await fetch(
      `https://api.github.com/repos/${username}/${docsRepo}/contents`,
      {
        headers,
        cache: 'no-store',
      }
    )

    let pdfProjects = []

    if (docsResponse.ok) {
      const docsData = await docsResponse.json()

      pdfProjects = docsData
        .filter((file) => file.name.toLowerCase().endsWith('.pdf'))
        .map((file) => ({
          type: 'pdf',

          name: file.name.replace('.pdf', ''),

          description:
            'Architecture solution document explaining the design and implementation approach.',

          url: file.download_url,

          stars: '',

          language: 'Architecture',

          image: '/pdf-thumbnail.png',
        }))
    } else {
      console.error('Docs repo fetch failed:', docsResponse.status)
    }

    // -----------------------------
    // MERGE PROJECTS
    // -----------------------------

    const allProjects = [...githubProjects, ...pdfProjects]

    return Response.json(allProjects)
  } catch (error) {
    console.error('GitHub API error:', error)

    return Response.json({
      error: 'Failed to fetch projects',
      projects: [],
    })
  }
}
