'use client'

import { useEffect, useState } from 'react'

export default function GithubProjects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        marginTop: '20px',
      }}
    >
      {/* GITHUB PROFILE CARD */}

      <a href="https://github.com/harshitboots" target="_blank">
        <div
          style={{
            height: '100%',
            border: '1px solid #374151',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
            background: '#0f172a',
            transition: 'all .3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(56,189,248,.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          <img
            src="/github-profile.jpg"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />

          <div style={{ padding: '18px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>My GitHub</h3>

            <p
              style={{
                fontSize: '14px',
                color: '#94a3b8',
              }}
            >
              Data Engineering Projects • AI Tools • Data Platforms
            </p>
          </div>
        </div>
      </a>

      {/* GITHUB REPOS */}

      {repos.slice(0, 2).map((repo, index) => (
        <a key={index} href={repo.url} target="_blank">
          <div
            style={{
              height: '100%',
              border: '1px solid #374151',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0f172a',
              transition: 'all .3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(56,189,248,.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={repo.image}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <div style={{ padding: '18px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{repo.name}</h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                }}
              >
                {repo.description}
              </p>

              {/* EXTRA DETAILS */}

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#94a3b8',
                }}
              >
                ⭐ {repo.stars}•{repo.language}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
