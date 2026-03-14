import { XMLParser } from 'fast-xml-parser'

export async function GET() {
  try {
    const url = 'https://medium.com/feed/@harshit.herts'

    const res = await fetch(url, { cache: 'no-store' })
    const xml = await res.text()

    const parser = new XMLParser()
    const json = parser.parse(xml)

    const items = json.rss.channel.item

    const articles = items.slice(0, 3).map((article) => {
      const content = article['content:encoded']

      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)

      const image = imgMatch ? imgMatch[1] : '/medium-default.png'

      return {
        title: article.title,
        link: article.link,
        image,
        date: article.pubDate,
        description: content.replace(/<[^>]+>/g, '').slice(0, 120),
      }
    })

    return Response.json(articles)
  } catch (error) {
    console.error('Medium fetch error:', error)

    return Response.json([])
  }
}
