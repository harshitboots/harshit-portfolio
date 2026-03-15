'use client'

const architecture = [
  {
    layer: 'Data Sources',
    tools: [
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'APIs',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      },
      {
        name: 'Files / Storage',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      },
    ],
  },

  {
    layer: 'Streaming & Event Systems',
    tools: [
      {
        name: 'Kafka',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      },
      {
        name: 'Google Pub/Sub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      },
      {
        name: 'Azure Event Hub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      },
    ],
  },

  {
    layer: 'Data Ingestion',
    tools: [
      {
        name: 'Apache Airflow',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
      },
      {
        name: 'Azure Data Factory',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      },
      {
        name: 'Databricks Auto Loader',
        logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
      },
    ],
  },

  {
    layer: 'Data Processing',
    tools: [
      {
        name: 'Apache Spark',
        logo: 'https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg',
      },
      {
        name: 'Databricks',
        logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'SQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
  },

  {
    layer: 'Lakehouse & Warehousing',
    tools: [
      { name: 'Delta Lake', logo: 'https://www.vectorlogo.zone/logos/deltaio/deltaio-icon.svg' },
      { name: 'Snowflake', logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg' },
      { name: 'dbt', logo: 'https://www.vectorlogo.zone/logos/getdbt/getdbt-icon.svg' },
      {
        name: 'Microsoft Fabric',
        logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-fabric.svg',
      },
    ],
  },

  {
    layer: 'Serving & Analytics',
    tools: [
      {
        name: 'Power BI',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg',
      },
      {
        name: 'Machine Learning',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      },
      {
        name: 'Knowledge Graph (Neo4j)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      },
      {
        name: 'Vector Database',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      },
    ],
  },

  {
    layer: 'Platform Engineering',
    tools: [
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Kubernetes',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      },
      {
        name: 'Azure',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      },
      {
        name: 'Google Cloud',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      },
    ],
  },
]

export default function TechStack() {
  return (
    <main
      style={{
        padding: '80px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        color: '#e2e8f0',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: '800',
          marginBottom: '20px',
        }}
      >
        Data Platform Technology Stack
      </h1>

      <p
        style={{
          marginBottom: '60px',
          fontSize: '18px',
          color: '#94a3b8',
          maxWidth: '800px',
        }}
      >
        Technologies I use to design modern lakehouse platforms, distributed data systems, streaming
        pipelines, and AI-ready analytics architectures.
      </p>

      {architecture.map((layer) => (
        <section key={layer.layer} style={{ marginBottom: '70px' }}>
          <h2
            style={{
              fontSize: '30px',
              marginBottom: '25px',
              color: '#d4af37',
            }}
          >
            {layer.layer}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
              gap: '30px',
            }}
          >
            {layer.tools.map((tool) => (
              <div
                key={tool.name}
                style={{
                  background: '#0f172a',
                  borderRadius: '12px',
                  padding: '18px',
                  textAlign: 'center',
                  border: '1px solid #1e293b',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,.6)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <img src={tool.logo} width="60" height="60" style={{ marginBottom: '12px' }} />

                <p style={{ fontSize: '15px' }}>{tool.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
