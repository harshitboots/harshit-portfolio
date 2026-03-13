export async function GET() {
  const username = 'harshitboots'

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
  )

  const repos = await response.json()

  const projects = repos
    .filter((repo) => !repo.fork)
    .slice(0, 2)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }))

  return Response.json(projects)
}
