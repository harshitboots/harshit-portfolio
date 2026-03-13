export async function GET() {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@harshit.herts'

  const res = await fetch(url)
  const data = await res.json()

  const articles = data.items.slice(0, 3).map((article) => {
    // Extract first image from content
    const imgMatch = article.content.match(/<img[^>]+src="([^">]+)"/)

    const image = imgMatch ? imgMatch[1] : '/medium-default.png'

    return {
      title: article.title,
      link: article.link,
      image: image,
    }
  })

  return Response.json(articles)
}
