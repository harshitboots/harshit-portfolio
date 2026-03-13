"use client"

const certifications = [

  {
    name: "Databricks Data Engineer Professional",
    org: "Databricks",
    logo: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
    image: "/certifications/databricks.jpg",
    link: "https://credentials.databricks.com",
    description:
      "Advanced certification demonstrating expertise in building scalable data pipelines, Delta Lake architectures, and production-grade Spark systems."
  },

  {
    name: "HackerRank SQL (Advanced)",
    org: "HackerRank",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hackerrank/hackerrank-original.svg",
    image: "/certifications/hackerrank.png",
    link: "https://www.hackerrank.com/certificates/008c2c4dc675",
    description:
      "Certification validating advanced SQL problem-solving skills including complex joins, window functions, query optimization, and analytical SQL."
  }

]

export default function Certifications() {

  return (

    <main
      style={{
        padding: "100px 80px",
        maxWidth: "1400px",
        margin: "0 auto",
        color: "#e2e8f0"
      }}
    >

      {/* PAGE TITLE */}

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "20px"
        }}
      >
        Certifications
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#94a3b8",
          maxWidth: "800px",
          marginBottom: "60px"
        }}
      >
        Professional certifications validating expertise in modern data platforms,
        distributed processing, and data engineering best practices.
      </p>

      {/* CERTIFICATION GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "40px"
        }}
      >

        {certifications.map((cert) => (

          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <div
              style={{
                background: "#0f172a",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #1e293b",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(59,130,246,.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >

              {/* CERTIFICATE IMAGE */}

              <img
                src={cert.image}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover"
                }}
              />

              {/* CERT INFO */}

              <div style={{ padding: "25px" }}>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px"
                  }}
                >

                  <img src={cert.logo} width="30" height="30" />

                  <span style={{ color: "#94a3b8" }}>
                    {cert.org}
                  </span>

                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "10px"
                  }}
                >
                  {cert.name}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#94a3b8"
                  }}
                >
                  {cert.description}
                </p>

              </div>

            </div>

          </a>

        ))}

      </div>

    </main>
  )

}