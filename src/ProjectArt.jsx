// Line drawings of what each system actually does, rather than a screenshot.
// Screenshots of an admin panel say very little; the shape of the system says more.

const line = { fill: 'none', stroke: '#4d8df5', strokeWidth: 1.25, vectorEffect: 'non-scaling-stroke' }
const faint = { ...line, stroke: '#2b3f66' }
const brass = { ...line, stroke: '#c9a227' }
const label = {
  fill: '#8e9ab5',
  fontFamily: 'Archivo, system-ui, sans-serif',
  fontSize: 11,
  fontWeight: 500,
}

function Flow() {
  return (
    <svg viewBox="0 0 420 330" role="img" aria-label="Diagram: student questions pass through a router to several knowledge sources, with staff managing them from an admin panel">
      <rect x="10" y="26" width="118" height="42" rx="8" {...line} />
      <text x="26" y="52" {...label}>student asks</text>
      <rect x="22" y="80" width="106" height="34" rx="8" {...faint} />
      <rect x="34" y="124" width="94" height="30" rx="8" {...faint} />

      <path d="M128 47 H186" {...line} />
      <path d="M128 97 C160 97 158 55 186 49" {...faint} />
      <path d="M128 139 C166 139 158 58 186 51" {...faint} />

      <rect x="186" y="18" width="70" height="70" rx="10" {...brass} />
      <text x="196" y="48" {...label} fill="#c9a227">route</text>
      <text x="196" y="64" {...label} fill="#c9a227">+ detect</text>

      <path d="M256 40 H300" {...line} />
      <path d="M256 56 C284 56 286 108 306 118" {...line} />
      <path d="M256 68 C280 68 284 186 306 196" {...line} />

      <rect x="300" y="22" width="106" height="36" rx="8" {...line} />
      <text x="313" y="45" {...label}>knowledge base</text>
      <rect x="306" y="100" width="100" height="36" rx="8" {...line} />
      <text x="319" y="123" {...label}>campus APIs</text>
      <rect x="306" y="178" width="100" height="36" rx="8" {...line} />
      <text x="325" y="201" {...label}>live staff</text>

      <path d="M221 88 V244" {...faint} strokeDasharray="4 5" />
      <rect x="120" y="244" width="202" height="62" rx="10" {...line} />
      <text x="138" y="270" {...label} fill="#b7c2da">admin panel</text>
      <path d="M138 284 H304" {...faint} />
      <circle cx="146" cy="296" r="3.5" {...faint} />
      <circle cx="164" cy="296" r="3.5" {...faint} />
      <circle cx="182" cy="296" r="3.5" {...brass} />
      <text x="198" y="300" {...label} fontSize="10">roles per office</text>
    </svg>
  )
}

function Pipeline() {
  const stages = ['enquire', 'requirements', 'submit', 'track']
  return (
    <svg viewBox="0 0 420 330" role="img" aria-label="Diagram: an applicant moves through four stages, from first enquiry to tracking a submitted application">
      <path d="M40 66 H380" {...faint} />
      {stages.map((s, i) => {
        const y = 66 + i * 74
        const done = i < 3
        return (
          <g key={s}>
            {i > 0 && <path d={`M62 ${y - 74} V ${y}`} {...(done ? line : faint)} />}
            <circle cx="62" cy={y} r="11" {...(i === 3 ? brass : line)} />
            {done && <path d={`M57 ${y} l4 4 l7 -8`} {...line} strokeWidth="1.6" />}
            <text x="92" y={y + 5} {...label} fill={i === 3 ? '#c9a227' : '#b7c2da'} fontSize="13">
              {s}
            </text>
            <rect x="92" y={y + 16} width={i === 3 ? 150 : 232 - i * 26} height="9" rx="4.5" {...faint} />
          </g>
        )
      })}
      <path d="M300 40 V300" {...faint} strokeDasharray="4 6" />
      <text x="312" y="170" {...label} fontSize="10">records</text>
      <text x="312" y="185" {...label} fontSize="10">persist</text>
    </svg>
  )
}

function Globe() {
  const rings = [0.28, 0.52, 0.74, 0.92]
  return (
    <svg viewBox="0 0 420 330" role="img" aria-label="Diagram: a wireframe globe with points marking where the company operates">
      <circle cx="210" cy="165" r="118" {...line} />
      {rings.map((r, i) => (
        <ellipse key={`h${i}`} cx="210" cy="165" rx="118" ry={118 * r} {...faint} />
      ))}
      {rings.map((r, i) => (
        <ellipse key={`v${i}`} cx="210" cy="165" rx={118 * r} ry="118" {...faint} />
      ))}
      <path d="M210 47 V283" {...faint} />
      <path d="M92 165 H328" {...faint} />

      <circle cx="268" cy="112" r="4.5" fill="#c9a227" />
      <circle cx="166" cy="196" r="4.5" fill="#c9a227" />
      <circle cx="238" cy="222" r="3.5" fill="#4d8df5" />
      <path d="M268 112 C240 130 190 160 166 196" {...brass} strokeDasharray="3 5" />

      <path d="M268 112 L352 74" {...faint} />
      <text x="356" y="72" {...label} fontSize="10">offices</text>
      <path d="M166 196 L78 236" {...faint} />
      <text x="34" y="250" {...label} fontSize="10">clients</text>
    </svg>
  )
}

export default function ProjectArt({ kind }) {
  if (kind === 'flow') return <Flow />
  if (kind === 'pipeline') return <Pipeline />
  return <Globe />
}
