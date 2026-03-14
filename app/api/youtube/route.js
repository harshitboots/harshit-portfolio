export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const channelId = 'UCYdio1sCHiKHgY6WWdAVzKA'

    if (!apiKey) {
      return Response.json({ error: 'Missing YouTube API key' }, { status: 500 })
    }

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10&type=video`

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // cache for 1 hour (great for Vercel)
    })

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos')
    }

    const data = await response.json()

    const videos =
      data.items
        ?.filter((item) => item.id?.videoId) // remove invalid entries
        .filter((item) => item.snippet.liveBroadcastContent === 'none') // remove livestreams
        .slice(0, 2)
        .map((video) => ({
          title: video.snippet.title,
          link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          thumbnail: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url,
          publishedAt: video.snippet.publishedAt,
        })) || []

    return Response.json(videos)
  } catch (error) {
    console.error('YouTube API error:', error)
    return Response.json({ error: 'Failed to fetch videos' }, { status: 500 })
  }
}
