'use client'

import { useEffect, useState } from 'react'

export default function YoutubeVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((data) => setVideos(data))
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '30px',
        marginTop: '20px',
      }}
    >
      {/* CHANNEL CARD */}

      <a href="https://www.youtube.com/channel/UCYdio1sCHiKHgY6WWdAVzKA" target="_blank">
        <div
          style={{
            border: '1px solid #374151',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#0f172a',
            cursor: 'pointer',
            transition: 'all .3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(239,68,68,.6)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          <img
            src="/youtube-channel.jpg"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />

          <div style={{ padding: '18px' }}>
            <h3 style={{ fontSize: '18px' }}>My YouTube Channel</h3>

            <p
              style={{
                fontSize: '14px',
                color: '#94a3b8',
              }}
            >
              Databricks • Data Engineering • AI Systems
            </p>
          </div>
        </div>
      </a>

      {/* VIDEO 1 */}

      {videos[0] && (
        <a href={videos[0].link} target="_blank">
          <div
            style={{
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(239,68,68,.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={videos[0].thumbnail}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '18px' }}>{videos[0].title}</h3>
            </div>
          </div>
        </a>
      )}

      {/* VIDEO 2 */}

      {videos[1] && (
        <a href={videos[1].link} target="_blank">
          <div
            style={{
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(239,68,68,.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={videos[1].thumbnail}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '18px' }}>{videos[1].title}</h3>
            </div>
          </div>
        </a>
      )}
    </div>
  )
}
