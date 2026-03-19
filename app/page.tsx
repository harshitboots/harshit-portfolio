'use client'

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
          padding: '80px 24px',
          maxWidth: '1300px',
          margin: '0 auto',
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          color: '#e2e8f0',
        }}
      >
        {/* TITLE */}
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: 'clamp(32px,6vw,56px)',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginBottom: '10px',
            }}
          >
            Harshit Tripathi
          </h1>

          <h2
            style={{
              fontSize: 'clamp(20px,3vw,20px)', // ✅ FIXED
              fontWeight: '800',
              color: '#d4af37',
              lineHeight: '1.5',
            }}
          >
            Lead Data Engineer • Data Platforms • Analytics & AI Enablement
          </h2>
        </div>

        {/* HERO GRID */}
        <div className="hero-grid">
          {/* PROFILE IMAGE */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                padding: '6px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#22d3ee,#3b82f6,#6366f1)',
                boxShadow: '0 0 40px rgba(59,130,246,0.6)',
                width: '200px',
                height: '200px',
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
          </div>

          {/* HERO TEXT */}
          <div style={{ width: '100%' }}>
            <p
              style={{
                fontSize: 'clamp(20px,2vw,18px)', // ✅ FIXED
                lineHeight: '1.5',
                color: '#cbd5f5',
                marginBottom: '20px',
              }}
            >
              I design and build modern data platforms that transform complex data into scalable,
              reliable, and business-ready insights. With over 10+ years of experience, I work
              across the full data lifecycle from ingestion and transformation to data modeling and
              analytics enablement.
            </p>

            <p
              style={{
                fontSize: 'clamp(20px,2vw,18px)',
                lineHeight: '1.5',
                color: '#cbd5f5',
              }}
            >
              My expertise spans multi-cloud ecosystems including Azure, GCP, and modern data stacks
              such as Databricks, Snowflake, BigQuery, and dbt. I focus on building governed,
              high-performance data platforms and data products that are trusted, reusable, and easy
              to consume enabling analytics, machine learning, and AI-driven decision making.
            </p>
          </div>
        </div>

        {/* GITHUB */}
        <section style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(22px,4vw,34px)',
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
              fontSize: 'clamp(22px,4vw,34px)',
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
              fontSize: 'clamp(22px,4vw,34px)',
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
              fontSize: 'clamp(14px,2vw,16px)',
              maxWidth: '700px',
            }}
          >
            Watch tutorials and discussions on Data Engineering, Databricks, Data Platforms and
            Modern Architectures.
          </p>

          <YoutubeVideos />
        </section>
      </main>

      {/* ✅ RESPONSIVE FIX */}
      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 80px;
        }

        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 280px 1fr;
          }
        }
      `}</style>
    </>
  )
}
