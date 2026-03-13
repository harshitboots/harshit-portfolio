import Projects from './components/Projects'
import MediumArticles from './components/MediumArticles'
import YoutubeVideos from './components/YoutubeVideos'
import GithubProjects from './components/GithubProjects'
import LakehouseArchitectureBackground from './components/LakehouseArchitectureBackground'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <LakehouseArchitectureBackground />

      <main
        style={{
          padding: '90px 80px',
          maxWidth: '1400px',
          margin: '0 auto',
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          color: '#e2e8f0',
        }}
      >
        {/* HERO SECTION */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* PROFILE IMAGE */}

          <div
            style={{
              padding: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#22d3ee,#3b82f6,#6366f1)',
              boxShadow: '0 0 40px rgba(59,130,246,0.6)',
            }}
          >
            <div className="profile-container">
              <Image
                src="/profile.jpg"
                width={300}
                height={300}
                alt="Harshit Tripathi"
                className="profile-image"
                style={{
                  borderRadius: '50%',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* HERO TEXT */}

          <div style={{ maxWidth: '1500px' }}>
            <h1
              style={{
                fontSize: '50px',
                fontWeight: '800',
                letterSpacing: '-1px',
                marginBottom: '14px',
              }}
            >
              Harshit Tripathi
            </h1>

            <h2
              style={{
                fontSize: '20px',
                marginBottom: '30px',
                fontWeight: '500',
                color: '#d4af37',
              }}
            >
              Lead Data Engineer • Data Platforms • Lakehouse Architect
            </h2>

            <p
              style={{
                fontSize: '21px',
                lineHeight: '1.9',
                color: '#cbd5f5',
                maxWidth: '1000px',
              }}
            >
              I design and build modern data platforms that transform complex data ecosystems into
              scalable, reliable analytical systems. My work focuses on lakehouse architectures,
              data mesh principles, and distributed data pipelines, using modeling approaches like
              Data Vault and knowledge graphs to make enterprise data discoverable, governed, and
              analytics-ready.
            </p>
          </div>
        </div>

        {/* GITHUB */}

        <section style={{ marginTop: '60px' }}>
          <h2
            style={{
              fontSize: '34px',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            GitHub Projects
          </h2>

          <GithubProjects />
        </section>

        {/* MEDIUM */}

        <section style={{ marginTop: '90px' }}>
          <h2
            style={{
              fontSize: '34px',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            Latest Articles
          </h2>

          <MediumArticles />
        </section>

        {/* YOUTUBE */}

        <section style={{ marginTop: '90px' }}>
          <h2
            style={{
              fontSize: '34px',
              marginBottom: '10px',
              fontWeight: '600',
            }}
          >
            YouTube Channel
          </h2>

          <p
            style={{
              marginBottom: '30px',
              color: '#94a3b8',
              fontSize: '17px',
            }}
          >
            Watch tutorials and discussions on Data Engineering, Databricks, Data Platforms and
            Modern Lakehouse Architectures.
          </p>

          <YoutubeVideos />
        </section>
      </main>
    </>
  )
}
