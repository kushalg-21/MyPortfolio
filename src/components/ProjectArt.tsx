import type { VisualVariant } from '../data/portfolio'

function CornerTicks() {
  return (
    <g className="art-ticks" aria-hidden="true">
      <path d="M28 44V28h16" />
      <path d="M692 44V28h-16" />
      <path d="M28 476v16h16" />
      <path d="M692 476v16h-16" />
    </g>
  )
}

function AetherDiagram() {
  return (
    <svg viewBox="0 0 720 520" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="aether-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" className="art-dot-fill" />
        </pattern>
      </defs>

      <rect width="720" height="520" className="art-ground" />
      <rect x="0" y="0" width="720" height="520" fill="url(#aether-dots)" opacity="0.5" />

      <text x="28" y="36" className="art-label">
        FIG. 01 / SYSTEM SKETCH
      </text>
      <text x="692" y="36" textAnchor="end" className="art-label art-label--accent">
        AETHER OS
      </text>

      <g className="art-modules">
        <rect x="290" y="104" width="140" height="54" />
        <text x="360" y="126" textAnchor="middle" className="art-small">
          MODULE 01
        </text>
        <text x="360" y="143" textAnchor="middle" className="art-faint">
          CAPABILITY
        </text>

        <rect x="108" y="240" width="140" height="54" />
        <text x="178" y="262" textAnchor="middle" className="art-small">
          MODULE 02
        </text>
        <text x="178" y="279" textAnchor="middle" className="art-faint">
          INTERFACE
        </text>

        <rect x="472" y="240" width="140" height="54" />
        <text x="542" y="262" textAnchor="middle" className="art-small">
          MODULE 03
        </text>
        <text x="542" y="279" textAnchor="middle" className="art-faint">
          TOOLING
        </text>

        <rect x="290" y="378" width="140" height="54" />
        <text x="360" y="400" textAnchor="middle" className="art-small">
          MODULE 04
        </text>
        <text x="360" y="417" textAnchor="middle" className="art-faint">
          CONTEXT
        </text>
      </g>

      <g className="art-connectors">
        <path d="M360 158v52" />
        <path d="M248 267h52" />
        <path d="M420 267h52" />
        <path d="M360 378v-58" />
        <circle cx="360" cy="195" r="2.5" />
        <circle cx="285" cy="267" r="2.5" />
        <circle cx="435" cy="267" r="2.5" />
        <circle cx="360" cy="335" r="2.5" />
      </g>

      <g className="art-core">
        <rect x="292" y="210" width="136" height="110" />
        <text x="360" y="252" textAnchor="middle" className="art-title">
          CORE
        </text>
        <text x="360" y="272" textAnchor="middle" className="art-faint">
          SHARED LOGIC
        </text>
        <rect x="347" y="288" width="26" height="3" className="art-accent-fill" />
      </g>

      <text x="28" y="490" className="art-small">
        MODULAR / EXTENSIBLE / ONE CORE
      </text>
      <text x="692" y="490" textAnchor="end" className="art-faint">
        CONCEPT ONLY
      </text>
      <CornerTicks />
    </svg>
  )
}

function RagDiagram() {
  return (
    <svg viewBox="0 0 720 520" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="rag-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0v36" className="art-grid-line" />
        </pattern>
      </defs>

      <rect width="720" height="520" className="art-ground" />
      <rect x="0" y="0" width="720" height="520" fill="url(#rag-grid)" opacity="0.35" />

      <text x="28" y="36" className="art-label">
        FIG. 02 / RETRIEVAL FLOW
      </text>
      <text x="692" y="36" textAnchor="end" className="art-label art-label--accent">
        RAG
      </text>

      <g className="art-doc">
        <rect x="60" y="112" width="184" height="256" />
        <line x1="82" y1="140" x2="198" y2="140" />
        <line x1="82" y1="160" x2="168" y2="160" />
        <line x1="82" y1="180" x2="190" y2="180" />
        <line x1="82" y1="200" x2="152" y2="200" />
        <line x1="82" y1="220" x2="184" y2="220" />
        <line x1="82" y1="240" x2="164" y2="240" />
        <line x1="82" y1="260" x2="192" y2="260" />
        <line x1="82" y1="280" x2="146" y2="280" />
        <line x1="82" y1="300" x2="180" y2="300" />
        <line x1="82" y1="320" x2="170" y2="320" />
        <text x="82" y="148" className="art-small">
          STUDY MATERIAL
        </text>
        <text x="82" y="352" className="art-faint">
          SOURCE
        </text>
      </g>

      <g className="art-flow">
        <path d="M252 240h64" />
        <path d="M310 234l8 6-8 6" />
        <path d="M470 240h58" />
        <path d="M522 234l8 6-8 6" />
        <path d="M616 274v32" />
      </g>

      <g className="art-chunks">
        <rect x="324" y="132" width="138" height="58" />
        <rect x="324" y="211" width="138" height="58" />
        <rect x="324" y="290" width="138" height="58" />
        <text x="342" y="157" className="art-small">
          CHUNK 01
        </text>
        <text x="342" y="236" className="art-small">
          CHUNK 02
        </text>
        <text x="342" y="315" className="art-small">
          CHUNK 03
        </text>
        <circle cx="438" cy="158" r="3" className="art-accent-fill" />
        <circle cx="438" cy="237" r="3" className="art-accent-fill" />
        <circle cx="438" cy="316" r="3" className="art-accent-fill" />
      </g>

      <g className="art-core">
        <rect x="532" y="212" width="156" height="62" />
        <text x="610" y="237" textAnchor="middle" className="art-small">
          RETRIEVED CONTEXT
        </text>
        <text x="610" y="256" textAnchor="middle" className="art-faint">
          RELEVANT ONLY
        </text>
      </g>

      <g className="art-answer">
        <rect x="532" y="306" width="156" height="72" />
        <text x="610" y="334" textAnchor="middle" className="art-small">
          ANALYSIS
        </text>
        <text x="610" y="354" textAnchor="middle" className="art-faint">
          GROUNDED OUTPUT
        </text>
      </g>

      <text x="60" y="420" className="art-small">
        RETRIEVE → AUGMENT → ANALYSIS
      </text>
      <text x="660" y="420" textAnchor="end" className="art-faint">
        CONCEPT ONLY
      </text>
      <CornerTicks />
    </svg>
  )
}

export function ProjectArt({ variant }: { variant: VisualVariant }) {
  const isAether = variant === 'aether'

  return (
    <figure className={`project-art project-art--${variant}`}>
      <div className="project-art__bar">
        <span>Concept diagram</span>
        <span>{isAether ? 'SYS—01' : 'SYS—02'}</span>
      </div>
      <div className="project-art__canvas">
        {isAether ? <AetherDiagram /> : <RagDiagram />}
      </div>
    </figure>
  )
}
