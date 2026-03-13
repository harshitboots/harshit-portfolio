'use client'

export default function LakehouseArchitectureBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.5,
        pointerEvents: 'none',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1800 1200">
        {/* SOURCES */}

        <circle cx="150" cy="200" r="8" fill="#38bdf8" />
        <circle cx="150" cy="350" r="8" fill="#38bdf8" />
        <circle cx="150" cy="500" r="8" fill="#38bdf8" />
        <circle cx="150" cy="650" r="8" fill="#38bdf8" />

        {/* INGESTION */}

        <circle cx="450" cy="425" r="10" fill="#0ea5e9" />

        {/* BRONZE */}

        <circle cx="800" cy="250" r="10" fill="#f59e0b" />

        {/* SILVER */}

        <circle cx="800" cy="425" r="10" fill="#9ca3af" />

        {/* GOLD */}

        <circle cx="800" cy="600" r="10" fill="#facc15" />

        {/* SERVING */}

        <circle cx="1200" cy="300" r="10" fill="#22c55e" />
        <circle cx="1200" cy="500" r="10" fill="#2563eb" />

        {/* CONNECTION LINES */}

        <line x1="150" y1="200" x2="450" y2="425" stroke="#1e293b" strokeWidth="1" />
        <line x1="150" y1="350" x2="450" y2="425" stroke="#1e293b" strokeWidth="1" />
        <line x1="150" y1="500" x2="450" y2="425" stroke="#1e293b" strokeWidth="1" />
        <line x1="150" y1="650" x2="450" y2="425" stroke="#1e293b" strokeWidth="1" />

        <line x1="450" y1="425" x2="800" y2="250" stroke="#1e293b" strokeWidth="1" />
        <line x1="450" y1="425" x2="800" y2="425" stroke="#1e293b" strokeWidth="1" />
        <line x1="450" y1="425" x2="800" y2="600" stroke="#1e293b" strokeWidth="1" />

        <line x1="800" y1="250" x2="1200" y2="300" stroke="#1e293b" strokeWidth="1" />
        <line x1="800" y1="600" x2="1200" y2="500" stroke="#1e293b" strokeWidth="1" />

        {/* ANIMATED DATA FLOW */}

        <circle r="4" fill="#22d3ee">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M150 200 L450 425 L800 250 L1200 300"
          />
        </circle>

        <circle r="4" fill="#22d3ee">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M150 350 L450 425 L800 425 L1200 300"
          />
        </circle>

        <circle r="4" fill="#22d3ee">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M150 650 L450 425 L800 600 L1200 500"
          />
        </circle>
      </svg>
    </div>
  )
}
