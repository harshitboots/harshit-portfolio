'use client'

const certifications = [
  {
    name: 'Databricks Data Engineer Professional',
    org: 'Databricks',
    logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
    image: '/certifications/databricks.jpg',
    link: 'https://credentials.databricks.com',
    description:
      'Advanced certification demonstrating expertise in building scalable data pipelines, Delta Lake architectures, and production-grade Spark systems.',
  },

  {
    name: 'HackerRank SQL (Advanced)',
    org: 'HackerRank',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hackerrank/hackerrank-original.svg',
    image: '/certifications/hackerrank.png',
    link: 'https://www.hackerrank.com/certificates/008c2c4dc675',
    description:
      'Certification validating advanced SQL problem-solving skills including complex joins, window functions, query optimization, and analytical SQL.',
  },
]

export default function Certifications() {
  return (
    <main
      style={{
        padding: '80px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        color: '#e2e8f0',
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: 'clamp(32px,6vw,48px)',
          fontWeight: '800',
          marginBottom: '20px',
        }}
      >
        Certifications
      </h1>

      <p
        style={{
          marginBottom: '60px',
          fontSize: '18px',
          color: '#94a3b8',
          maxWidth: '800px',
        }}
      >
        Professional certifications demonstrating expertise in modern data engineering, distributed
        systems, and cloud analytics platforms.
      </p>

      {/* Certifications Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))',
          gap: '35px',
        }}
      >
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            style={{
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                background: '#0f172a',
                borderRadius: '14px',
                padding: '25px',
                border: '1px solid #1e293b',
                textAlign: 'center',
                transition: 'all .3s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 0 25px rgba(34,211,238,.6)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <img src={cert.image} width="90" style={{ marginBottom: '18px' }} />

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#fff',
                }}
              >
                {cert.name}
              </h3>

              <p style={{ fontSize: '14px', color: '#94a3b8' }}>{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
