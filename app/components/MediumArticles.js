'use client'

import { useEffect, useState } from 'react'

export default function MediumArticles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('/api/medium')
      .then((res) => res.json())
      .then((data) => setArticles(data))
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
      {/* MEDIUM PROFILE */}

      <a href="https://medium.com/@harshit.herts" target="_blank">
        <div
          style={{
            border: '1px solid #374151',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#0f172a',
            cursor: 'pointer',
            transition: 'all .3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(16,185,129,.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          <img
            src="/medium-profile.jpg"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />

          <div style={{ padding: '18px' }}>
            <h3 style={{ fontSize: '18px' }}>My Medium Blog</h3>

            <p
              style={{
                fontSize: '14px',
                color: '#94a3b8',
              }}
            >
              Data Engineering • AI • Lakehouse Architecture
            </p>
          </div>
        </div>
      </a>

      {/* ARTICLE 1 */}

      {articles[0] ? (
        <a href={articles[0].link} target="_blank">
          <div
            style={{
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(16,185,129,.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={articles[0].image}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '18px' }}>{articles[0].title}</h3>
            </div>
          </div>
        </a>
      ) : (
        <ComingSoon />
      )}

      {/* ARTICLE 2 */}

      {articles[1] ? (
        <a href={articles[1].link} target="_blank">
          <div
            style={{
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(16,185,129,.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={articles[1].image}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '18px' }}>{articles[1].title}</h3>
            </div>
          </div>
        </a>
      ) : (
        <ComingSoon />
      )}
    </div>
  )
}

function ComingSoon() {
  return (
    <div
      style={{
        border: '1px solid #374151',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#0f172a',
      }}
    >
      <img
        src="/coming-soon.jpg"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />

      <div style={{ padding: '18px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '18px' }}>Coming Soon ✍️</h3>

        <p
          style={{
            fontSize: '14px',
            color: '#94a3b8',
          }}
        >
          New article will appear here soon
        </p>
      </div>
    </div>
  )
}
