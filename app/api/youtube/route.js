export async function GET() {

  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = "UCYdio1sCHiKHgY6WWdAVzKA"

  const url =
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10&type=video`

  const response = await fetch(url)
  const data = await response.json()

  const videos = data.items
    .filter(item => item.snippet.liveBroadcastContent === "none") // remove livestream/broadcast
    .slice(0,2)
    .map(video => ({
      title: video.snippet.title,
      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.high.url
    }))

  return Response.json(videos)
}