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
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          color: '#e2e8f0',
        }}
      >
        {/* HERO SECTION */}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* PROFILE IMAGE */}

          <div
            style={{
              padding: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg,#22d3ee,#3b82f6,#6366f1)',
              boxShadow: '0 0 40px rgba(59,130,246,0.6)',
              width: '220px',
              height: '220px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/profile.jpg"
              width={300}
              height={300}
              alt="Harshit Tripathi"
              style={{
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* HERO TEXT */}

          <div
            style={{
              flex: '1',
              minWidth: '260px',
              maxWidth: '700px',
              textAlign: 'left',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(32px,6vw,48px)',
                fontWeight: '800',
                letterSpacing: '-1px',
                marginBottom: '10px',
              }}
            >
              Harshit Tripathi
            </h1>

            <h2
              style={{
                fontSize: 'clamp(16px,3vw,20px)',
                marginBottom: '25px',
                fontWeight: '500',
                color: '#d4af37',
              }}
            >
              Lead Data Engineer • Data Platforms • Analytics & AI Enablement
            </h2>

            <p
              style={{
                fontSize: 'clamp(16px,2.5vw,20px)',
                lineHeight: '1.8',
                color: '#cbd5f5',
              }}
            >
              Idesign and build modern data platforms that transform complex data into scalable,
              reliable, and business ready insights. With over 10+ years of experience, I work
              across the full data lifecycle—from ingestion and transformation to data modeling and
              analytics enablement. My expertise spans multi-cloud data ecosystems, including Azure,
              GCP, and modern data stacks using Databricks, Snowflake, BigQuery, and dbt. I focus on
              building governed, high-performance data platforms that support both analytics and
              advanced use cases like machine learning and AI. Beyond engineering pipelines, I aim
              to create data products that are trusted, reusable, and easy to consume—enabling
              analysts, data scientists, and business teams to make faster, data-driven decisions.
              I’m passionate about solving real-world data challenges, improving data quality and
              governance, and designing platforms that scale with business needs.
            </p>
          </div>
        </div>

        {/* GITHUB */}

        <section style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(22px,4vw,32px)',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            GitHub Projects
          </h2>

          <GithubProjects />
        </section>

        {/* MEDIUM */}

        <section style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(22px,4vw,32px)',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            Latest Articles
          </h2>

          <MediumArticles />
        </section>

        {/* YOUTUBE */}

        <section style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(22px,4vw,32px)',
              marginBottom: '10px',
              fontWeight: '600',
            }}
          >
            YouTube Channel
          </h2>

          <p
            style={{
              marginBottom: '40px',
              color: '#94a3b8',
              fontSize: 'clamp(14px,2vw,17px)',
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
