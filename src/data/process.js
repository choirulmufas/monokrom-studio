import { ClipboardList, Code2, Compass, PenTool, Rocket, ShieldCheck } from 'lucide-react'

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We clarify your goals, users, constraints, and the problem the product needs to solve.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the scope, priorities, technical direction, and a practical project roadmap.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Design',
    description: 'We shape user flows, wireframes, and visual interfaces around clarity and usability.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Develop',
    description: 'We build the solution with appropriate technology and keep progress visible along the way.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Test & Refine',
    description: 'We check functionality, responsiveness, and quality, then refine what needs attention.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Launch & Grow',
    description: 'We prepare the product for real users and leave a foundation that can evolve with your needs.',
    icon: Rocket,
  },
]
