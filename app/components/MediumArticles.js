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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        marginTop: '20px',
        alignItems: 'stretch',
      }}
    >
      {/* MEDIUM PROFILE CARD */}

      <a href="https://medium.com/@harshit.herts" target="_blank">
        <div
          style={{
            border: '1px solid #374151',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#0f172a',
            cursor: 'pointer',
            transition: 'all .3s',
            height: '100%',
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
            <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>My Medium Blog</h3>

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

      {/* LATEST ARTICLES */}

      {articles.slice(0, 2).map((article, index) => (
        <a key={index} href={article.link} target="_blank">
          <div
            style={{
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
              height: '100%',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(16,185,129,.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={article.image}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  marginBottom: '6px',
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {article.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
