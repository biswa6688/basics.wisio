/**
 * Reference-matched poster infographic (light-theme fixed, per
 * ILLUSTRATION_GUIDELINES.md's "marketing/summary" style — distinct
 * from the outlined in-lesson diagram style used elsewhere).
 * Composition, layout proportions, and icon set are reproduced from
 * the approved reference; not intended to react to app theme.
 */

const COLORS = {
  bg: '#ffffff',
  card: '#ffffff',
  cardBorder: '#e3efe7',
  heroBg: '#eafaf1',
  heroBorder: '#bfead2',
  green: '#16a34a',
  greenDark: '#0c6e31',
  greenPale: '#d1fae0',
  greenFaint: '#eafaf1',
  text: '#101a15',
  textMuted: '#5b6f64',
  blue: '#2563eb',
  bluePale: '#dbeafe',
  yellow: '#eab308',
  yellowPale: '#fef3c7',
  navy: '#1e293b',
  navyPale: '#e2e8f0',
} as const

const FEATURES = [
  { title: 'Visual first', desc: 'Every idea is shown as a diagram before being explained in words.' },
  { title: 'Bite-sized', desc: 'Six focused lessons — no fluff, just the fundamentals that matter.' },
  { title: 'Any theme', desc: 'Light, dark, or match your system — easy on the eyes, day or night.' },
]

const TOPICS = [
  { title: 'Number Systems', subtitle: 'Binary, Decimal, Hex', desc: 'Count with 0 and 1; see the same value through different lenses.' },
  { title: 'How a Computer Works', subtitle: 'The Loop', desc: 'Trace a single instruction from storage to CPU and back again.' },
  { title: 'Input & Output Devices', subtitle: 'In and Out', desc: 'Devices that carry information into and out of a machine.' },
  { title: 'Operating Systems', subtitle: 'The Manager', desc: 'Juggles processes and memory for every running app.' },
  { title: 'Networking Basics', subtitle: 'Connected', desc: 'How devices are addressed and data hops across a network.' },
  { title: 'Internet Basics', subtitle: 'From Click to Page', desc: 'What happens between a click and a loaded page.' },
]

const COL_X = [25, 215, 405]
const CARD_W = 170
const FEATURE_Y = 262
const FEATURE_H = 130
const TOPIC_ROW_Y = [452, 622]
const TOPIC_H = 150

function cardCenter(index: number) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return { x: COL_X[col] + CARD_W / 2, y: TOPIC_ROW_Y[row] + TOPIC_H / 2 }
}

function connectorPath() {
  // Snake order: 0->1->2 (row 1, left to right), 2->3 (drop down), 3->4->5 (row 2, left to right)
  const pts = [0, 1, 2, 3, 4, 5].map(cardCenter)
  const [a, b, c, d, e, f] = pts
  return [
    `M ${a.x} ${a.y}`,
    `C ${a.x + 40} ${a.y - 30}, ${b.x - 40} ${b.y - 30}, ${b.x} ${b.y}`,
    `C ${b.x + 40} ${b.y + 30}, ${c.x - 40} ${c.y + 30}, ${c.x} ${c.y}`,
    `C ${c.x + 10} ${c.y + 60}, ${d.x + 10} ${d.y - 60}, ${d.x} ${d.y}`,
    `C ${d.x + 40} ${d.y - 30}, ${e.x - 40} ${e.y - 30}, ${e.x} ${e.y}`,
    `C ${e.x + 40} ${e.y + 30}, ${f.x - 40} ${f.y + 30}, ${f.x} ${f.y}`,
  ].join(' ')
}

function BinaryField({ side }: { side: 'left' | 'right' }) {
  const bits = side === 'left' ? ['0', '1', '0', '0', '1', '1', '0'] : ['1', '0', '1', '1', '0', '0', '1']
  const baseX = side === 'left' ? 10 : 520
  return (
    <g fontFamily="monospace" fontSize="11" fill={COLORS.greenPale} opacity={0.9}>
      {bits.map((bit, i) => (
        <text key={i} x={baseX + (i % 2) * 20} y={18 + i * 14}>
          {bit}
        </text>
      ))}
    </g>
  )
}

function FeatureIconVisual() {
  return (
    <g transform="translate(59,296)">
      <circle r="16" fill={COLORS.bluePale} />
      <rect x={-9} y={-8} width="9" height="7" rx="1.5" fill="none" stroke={COLORS.blue} strokeWidth="1.4" />
      <rect x={2} y={2} width="9" height="7" rx="1.5" fill="none" stroke={COLORS.blue} strokeWidth="1.4" />
      <path d="M -4 -1 L -4 4 L 2 4" fill="none" stroke={COLORS.blue} strokeWidth="1.4" />
    </g>
  )
}

function FeatureIconBiteSized() {
  return (
    <g transform="translate(249,296)">
      <circle r="16" fill={COLORS.greenPale} />
      <circle r="9" fill="none" stroke={COLORS.green} strokeWidth="1.6" />
      <line x1="0" y1="0" x2="0" y2="-5.5" stroke={COLORS.green} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="4" y2="2" stroke={COLORS.green} strokeWidth="1.4" strokeLinecap="round" />
      <rect x={-19} y={-24} width="38" height="13" rx="6.5" fill={COLORS.green} />
      <text x={-14} y={-15} fontSize="7.5" fontWeight="700" fill="#fff">
        6 lessons
      </text>
    </g>
  )
}

function FeatureIconTheme() {
  return (
    <g transform="translate(439,296)">
      <circle r="16" fill={COLORS.yellowPale} />
      <circle cx={-5} cy={0} r="5.5" fill="none" stroke={COLORS.yellow} strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={-5 + 7.5 * Math.cos((deg * Math.PI) / 180)}
          y1={7.5 * Math.sin((deg * Math.PI) / 180)}
          x2={-5 + 9.5 * Math.cos((deg * Math.PI) / 180)}
          y2={9.5 * Math.sin((deg * Math.PI) / 180)}
          stroke={COLORS.yellow}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ))}
      <path d="M 5 -6 a 6 6 0 1 0 0 12 a 5 5 0 0 1 0 -12 z" fill={COLORS.navy} />
      <rect x={-13} y={13} width="26" height="10" rx="5" fill={COLORS.green} />
      <circle cx={5.5} cy={18} r="3.4" fill="#fff" />
    </g>
  )
}

function TopicIcon({ index }: { index: number }) {
  const c = COLORS
  switch (index) {
    case 0: // Number Systems: grid + equation
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={i * 13} y={0} width="10" height="10" rx="2" fill={c.greenPale} stroke={c.green} strokeWidth="1" />
          ))}
          <text x={0} y={22} fontSize="7" fontFamily="monospace" fill={c.textMuted}>
            0+0=1
          </text>
        </g>
      )
    case 1: // How a Computer Works: chip -> memory/storage
      return (
        <g>
          <rect x={0} y={2} width="16" height="16" rx="2.5" fill="none" stroke={c.green} strokeWidth="1.4" />
          {[3, 7, 11].map((p) => (
            <g key={p}>
              <line x1={p} y1={2} x2={p} y2={-2} stroke={c.green} strokeWidth="1.2" />
              <line x1={p} y1={18} x2={p} y2={22} stroke={c.green} strokeWidth="1.2" />
            </g>
          ))}
          <path d="M 20 10 h 8" stroke={c.green} strokeWidth="1.2" markerEnd="url(#arrow)" />
        </g>
      )
    case 2: // Input & Output: monitor + keyboard
      return (
        <g>
          <rect x={0} y={0} width="20" height="13" rx="1.5" fill="none" stroke={c.green} strokeWidth="1.4" />
          <line x1={10} y1={13} x2={10} y2={17} stroke={c.green} strokeWidth="1.3" />
          <rect x={2} y={19} width="16" height="4" rx="1" fill={c.greenPale} stroke={c.green} strokeWidth="1" />
        </g>
      )
    case 3: // Operating Systems: person juggling apps
      return (
        <g>
          <circle cx={9} cy={4} r="3.4" fill="none" stroke={c.green} strokeWidth="1.4" />
          <path d="M 4 20 v -6 a 5 5 0 0 1 10 0 v 6" fill="none" stroke={c.green} strokeWidth="1.4" />
          <circle cx={-1} cy={2} r="2.4" fill={c.greenPale} stroke={c.green} strokeWidth="1" />
          <circle cx={19} cy={2} r="2.4" fill={c.greenPale} stroke={c.green} strokeWidth="1" />
          <circle cx={9} cy={-6} r="2.4" fill={c.greenPale} stroke={c.green} strokeWidth="1" />
        </g>
      )
    case 4: // Networking: cloud + nodes
      return (
        <g>
          <path
            d="M 2 14 a 5 5 0 0 1 1-9.8 6 6 0 0 1 11.5-1.8 4.5 4.5 0 0 1 3.5 7.6 4 4 0 0 1 -1 4 z"
            fill="none"
            stroke={c.green}
            strokeWidth="1.3"
          />
          <circle cx={4} cy={20} r="1.6" fill={c.green} />
          <circle cx={11} cy={22} r="1.6" fill={c.green} />
          <circle cx={17} cy={19} r="1.6" fill={c.green} />
          <line x1={4} y1={20} x2={11} y2={22} stroke={c.green} strokeWidth="1" />
          <line x1={11} y1={22} x2={17} y2={19} stroke={c.green} strokeWidth="1" />
        </g>
      )
    default: // Internet Basics: browser + cursor
      return (
        <g>
          <rect x={0} y={0} width="20" height="16" rx="2" fill="none" stroke={c.green} strokeWidth="1.4" />
          <line x1={0} y1={5} x2={20} y2={5} stroke={c.green} strokeWidth="1.2" />
          {[2.5, 5, 7.5].map((cx) => (
            <circle key={cx} cx={cx} cy={2.5} r="0.8" fill={c.green} />
          ))}
          <path d="M 11 9 l 6 5 -2.3 0.4 1.3 2.6 -1.6 0.8 -1.3 -2.6 -1.6 1.6 z" fill={c.blue} />
        </g>
      )
  }
}

export function SummaryInfographic() {
  return (
    <svg
      viewBox="0 0 600 810"
      role="img"
      aria-labelledby="wisio-poster-title wisio-poster-desc"
      className="h-auto w-full"
    >
      <title id="wisio-poster-title">Wisio — Learn how computers really work</title>
      <desc id="wisio-poster-desc">
        A summary poster: Wisio's key learning features (visual-first, bite-sized, any theme) and its six topics —
        Number Systems, How a Computer Works, Input &amp; Output Devices, Operating Systems, Networking Basics, and
        Internet Basics — connected along a single learning path.
      </desc>

      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={COLORS.green} />
        </marker>
        <linearGradient id="owl-face" gradientUnits="userSpaceOnUse" x1="63.407" y1="60.819" x2="63.716" y2="110.686">
          <stop offset=".05" stopColor="#f5dbb8" />
          <stop offset=".238" stopColor="#f2d2af" />
          <stop offset=".547" stopColor="#e9b996" />
          <stop offset=".894" stopColor="#dc9673" />
        </linearGradient>
      </defs>

      <g id="background">
        <rect x={0} y={0} width={600} height={810} rx={20} fill={COLORS.bg} />
      </g>

      <g id="decorative-elements">
        <BinaryField side="left" />
        <BinaryField side="right" />
      </g>

      <g id="header" textAnchor="middle">
        <circle cx={300} cy={30} r="17" fill={COLORS.greenPale} stroke={COLORS.green} strokeWidth="1.2" />
        <g transform="translate(284,14) scale(0.25)">
          <OwlMark />
        </g>
        <text x={300} y={62} fontSize="17" fontWeight="700" fill={COLORS.text}>
          Wisio
        </text>
        <text x={300} y={78} fontSize="8" fontWeight="600" fill={COLORS.green} letterSpacing="0.3">
          LEARN THE BASICS. BUILD YOUR WISDOM.
        </text>
      </g>

      <g id="hero">
        <rect x={90} y={100} width={420} height={110} rx={16} fill={COLORS.heroBg} stroke={COLORS.heroBorder} strokeWidth="1.5" />
        <text x={300} y={148} textAnchor="middle" fontSize="21" fontWeight="800" fill={COLORS.text}>
          Learn how computers
        </text>
        <text x={300} y={174} textAnchor="middle" fontSize="21" fontWeight="800" fill={COLORS.green}>
          really work
        </text>
        <rect x={272} y={186} width={56} height={16} rx={8} fill="#ffffff" stroke={COLORS.heroBorder} strokeWidth="1" />
        <text x={300} y={197} textAnchor="middle" fontSize="8.5" fontWeight="600" fill={COLORS.textMuted}>
          Intro
        </text>
      </g>

      <g id="labels-features">
        <text x={25} y={244} fontSize="15" fontWeight="700" fill={COLORS.text}>
          Key Learning Features
        </text>
      </g>

      <g id="feature-cards">
        {FEATURES.map((feature, i) => (
          <g key={feature.title} transform={`translate(${COL_X[i]},${FEATURE_Y})`}>
            <rect width={CARD_W} height={FEATURE_H} rx={14} fill={COLORS.card} stroke={COLORS.cardBorder} strokeWidth="1.4" />
            <text x={18} y={78} fontSize="12.5" fontWeight="700" fill={COLORS.text}>
              {feature.title}
            </text>
            <text x={18} y={96} fontSize="8.8" fill={COLORS.textMuted}>
              <tspan x={18} dy={0}>
                {wrap(feature.desc, 26)[0]}
              </tspan>
              <tspan x={18} dy={11}>
                {wrap(feature.desc, 26)[1]}
              </tspan>
              <tspan x={18} dy={11}>
                {wrap(feature.desc, 26)[2]}
              </tspan>
            </text>
          </g>
        ))}
        <FeatureIconVisual />
        <FeatureIconBiteSized />
        <FeatureIconTheme />
      </g>

      <g id="labels-topics">
        <text x={25} y={434} fontSize="15" fontWeight="700" fill={COLORS.text}>
          Explore the Topics
        </text>
      </g>

      <g id="connectors">
        <path d={connectorPath()} fill="none" stroke={COLORS.green} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity={0.55} />
      </g>

      <g id="topic-cards">
        {TOPICS.map((topic, i) => {
          const col = i % 3
          const row = Math.floor(i / 3)
          const x = COL_X[col]
          const y = TOPIC_ROW_Y[row]
          const lines = wrap(topic.desc, 24)
          return (
            <g key={topic.title} transform={`translate(${x},${y})`}>
              <rect width={CARD_W} height={TOPIC_H} rx={14} fill={COLORS.card} stroke={COLORS.cardBorder} strokeWidth="1.4" />
              <rect x={14} y={14} width={30} height={30} rx={8} fill={COLORS.greenFaint} />
              <g transform="translate(21,20)">
                <TopicIcon index={i} />
              </g>
              <text x={14} y={64} fontSize="12" fontWeight="700" fill={COLORS.text}>
                {wrapTitle(topic.title)[0]}
              </text>
              {wrapTitle(topic.title)[1] && (
                <text x={14} y={77} fontSize="12" fontWeight="700" fill={COLORS.text}>
                  {wrapTitle(topic.title)[1]}
                </text>
              )}
              <text x={14} y={wrapTitle(topic.title)[1] ? 92 : 79} fontSize="9" fontWeight="600" fill={COLORS.green}>
                {topic.subtitle}
              </text>
              <text fontSize="8.3" fill={COLORS.textMuted}>
                {lines.map((line, li) => (
                  <tspan key={li} x={14} y={(wrapTitle(topic.title)[1] ? 106 : 93) + li * 11}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

function wrap(text: string, maxChars: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      lines.push(current.trim())
      current = word
    } else {
      current = (current + ' ' + word).trim()
    }
  }
  if (current) lines.push(current.trim())
  return lines.slice(0, 3)
}

function OwlMark() {
  return (
    <g>
      <path d="M97.36 62.59s4.5-9.71 4.01-18.37c-.32-5.56.92-29.63-35.69-30.34c-36.6-.7-38.86 20.74-38.86 31.25c0 7.88 3.52 15.35 3.52 15.35s-2.96-.7-6.34 3.24s-3.54 12.47-1.13 17.18c3.03 5.91 8.02 9.29 8.02 9.29l10.42 15.35s-1.55 4.29-4.22 7.46c-1.8 2.14-5.58 5.46-5.49 6.76c.14 1.97 4.22.99 10.14 1.27c5.91.28 22.67-2.53 22.67-2.53l25.06 1.55c2.25.14 7.11.49 7.74-.99c.39-.91-3.42-4.2-5-7.04c-2.04-3.66-3.31-9.43-3.31-9.43s4.65-9.71 6.62-11.26c1.97-1.55 7.46-8.45 9.01-12.11s2.11-10.56-1.13-13.8c-2.4-2.43-6.04-2.83-6.04-2.83z" fill="#6e4f44" />
      <path d="M86.17 19.51s2.11-4.5 6.34-7.25c3.9-2.53 8.52-2.25 8.87-1.9c.35.35-.54 3.68-2.11 5.91c-1.34 1.9-2.75 3.38-2.53 3.59c.39.39 1.72-1.33 3.45-2.75c2.32-1.9 5.35-2.6 5.7-2.32s.84 5.35-1.41 9.64c-2.11 4.01-5.98 6.55-5.98 6.55l-5.42-7.32l-6.91-4.15z" fill="#6e4f44" />
      <path d="M44.28 19.01s-2.53-5.21-5.56-8.31s-7.74-4.86-8.31-4.29s-.49 4.01.21 6.26s2.82 4.5 2.18 4.93c-.63.42-1.73-2.13-2.82-3.31c-1.76-1.9-4.93-3.45-5.49-3.1c-.56.35-1.9 5.7.77 10.63c2.37 4.37 5.84 8.45 5.84 8.45l8.17-7.81l5.01-3.45z" fill="#6e4f44" />
      <path d="M46.96 111.06s-.5 2.08-3.1 4.41c-2.96 2.65-7.98 6.1-4.79 7.23c3.19 1.13 7.7 1.13 12.39.19s9.29-2.35 12.58-2.35c3.28 0 9.95 1.22 13.23 1.69c3.28.47 7.47.88 9.85.38c2.21-.47 3.26-1.45-.54-5.4c-1.63-1.69-4.43-6.43-4.43-6.43l-18.96 3.1l-16.23-2.82z" fill="#878787" />
      <path d="M36.45 61.41s-3.85.38-5.44 2.53s-3.75 8.26-3.38 16.89c.38 8.63 4.13 15.96 9.01 22.43c4.88 6.48 11.54 13.05 26.65 12.58c15.11-.47 22.99-4.32 26.94-11.26c3.94-6.95 8.82-16.14 9.29-24.78c.47-8.63-3.85-16.52-5.26-17.55c-1.41-1.03-30.5-2.44-30.5-2.44l-27.31 1.6z" fill="#875d54" />
      <path d="M42.17 61.41s-9.29 8.35-7.6 22.99c1.49 12.92 10.7 26.19 28.81 26.28c20.56.11 28.14-14.57 29.19-26.47c1.22-13.89-6.66-22.34-7.7-23.18c-1.03-.84-42.7.38-42.7.38z" fill="url(#owl-face)" />
      <path d="M64.23 73.43s8.07-8.54 14.45-10.23c6.38-1.69 15.58-.94 15.58-.94s4.29-6.43 4.6-18.77c.33-13.25-6.66-18.96-6.66-18.96s-11.64-2.25-19.71 6.19c-6.76 7.07-5.91 15.58-5.91 15.58l-3.64-.61s.05-9.46-6.62-15.27s-15.84-7.3-15.84-7.3s-11.14 5.95-11.4 19.69c-.28 14.73 5.28 18.93 5.28 18.93s9.03.23 17.01 3.05s12.86 8.64 12.86 8.64z" fill="#f2a35b" />
      <path d="M93.23 42.83c0 7.3-3.93 12.97-12.11 13.89c-8.86 1-13.24-5.75-13.24-13.05s5.67-13.22 12.67-13.22s12.68 5.08 12.68 12.38z" fill="#d0805f" />
      <path d="M59.65 36.6c3.63 6.6 2.18 16.37-3.87 18.99c-7.13 3.1-14.67.03-18.3-6.57s-1.23-14.14 4.9-17.51S56.02 30 59.65 36.6z" fill="#d0805f" />
      <path d="M78.35 73.14c1.67.37 2.53-2.82 4.46-1.27c1.92 1.55-.8 4.5-3.8 4.6c-3 .09-6.24-1.97-5.12-3.94c1.13-1.97 2.54.19 4.46.61z" fill="#d0805f" />
      <path d="M85.49 81.26c2.39-.23 3.57-2.91 5.16-1.27s-.99 4.46-5.02 4.69c-4.04.23-6.19-1.83-5.3-3.43c.89-1.58 2.29.29 5.16.01z" fill="#d0805f" />
      <path d="M64.6 82.34c2.95.17 3.14-2.82 5.3-1.78c2.16 1.03-.37 5.53-5.02 5.49c-5.26-.05-7.17-3.88-5.73-5.07c2.07-1.69 2.26 1.17 5.45 1.36z" fill="#d0805f" />
      <path d="M50.24 73.94c2.02-.12 1.69-2.63 4.41-1.69c2.3.8-.33 5.21-4.74 5.16c-3.94-.04-6.1-3.33-5.02-4.32c2.14-1.94 3.01.99 5.35.85z" fill="#d0805f" />
      <path d="M41.42 81.17c1.74-.05 2.11-2.35 4.04-1.22c1.92 1.13.28 4.74-4.18 4.79c-3.99.04-5.46-2.73-4.36-3.94c1.69-1.88 2.77.42 4.5.37z" fill="#d0805f" />
      <path d="M70.52 45.13c1.45 4.58 6.87 7.03 11.73 5.49s7.38-6.41 5.82-11.4c-1.77-5.66-6.91-6.84-11.78-5.3c-4.87 1.53-7.23 6.62-5.77 11.21z" fill="#fffeff" />
      <path d="M41.75 35.88c-2.87 3.86-2.5 9.25 1.6 12.29s9.63 3.25 12.76-.94c3.56-4.75 2.07-9.95-2.02-13s-9.47-2.2-12.34 1.65z" fill="#fffeff" />
      <path d="M84.78 39.76c1.2 3.06.12 6.56-3.04 7.81c-3.17 1.25-7.21-.23-8.42-3.29c-1.2-3.06.09-6.62 3.26-7.88c3.42-1.36 6.99.3 8.2 3.36z" fill="#303232" />
      <path d="M54.98 44.52c-1.63 2.85-6.01 3.71-9.39 1.55c-2.87-1.83-3.09-5.59-1.45-8.45c1.63-2.85 5.36-3.33 8.49-2.02c3.81 1.6 3.99 6.07 2.35 8.92z" fill="#303232" />
      <path d="M59.39 46.11s-.16 6.1 0 8.17c.23 2.96.86 5.09 1.74 6.85c.94 1.88 2.35 3.94 3.05 3.94c.7 0 2.16-1.99 3-3.89c.7-1.6 1.45-3.75 1.78-7.46c.28-3.15.28-6.95.28-6.95l-9.85-.66z" fill="#2f2f2f" />
      <path d="M64.23 40.58c3.24-.07 4.18 1.92 4.88 3.61c.42 1.01.7 3.1.42 3.47c-.28.38-2.72.99-4.93.99s-5.91-.8-5.96-1.41c-.05-.61.56-2.89 1.17-3.8c1.13-1.69 2.21-2.82 4.42-2.86z" fill="#feb903" />
    </g>
  )
}

function wrapTitle(title: string): [string, string?] {
  if (title.length <= 16) return [title]
  const words = title.split(' ')
  const mid = Math.ceil(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}
