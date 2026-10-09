import { ClipboardList, Code2, Compass, PenTool, Rocket, ShieldCheck } from 'lucide-react'

export const processSteps = [
  {
    number: '01',
    title: 'Temukan',
    titleEn: 'Discover',
    description: 'Kami memperjelas tujuan, pengguna, batasan, dan masalah yang harus diselesaikan produk.',
    descriptionEn: 'We clarify the goals, users, constraints, and problems the product needs to solve.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Rencanakan',
    titleEn: 'Plan',
    description: 'Kami menentukan ruang lingkup, prioritas, arah teknis, dan peta jalan proyek yang praktis.',
    descriptionEn: 'We define scope, priorities, technical direction, and a practical project roadmap.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Desain',
    titleEn: 'Design',
    description: 'Kami membentuk alur pengguna, wireframe, dan antarmuka visual yang berfokus pada kejelasan dan kegunaan.',
    descriptionEn: 'We shape user flows, wireframes, and visual interfaces around clarity and usability.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Bangun',
    titleEn: 'Build',
    description: 'Kami membangun solusi dengan teknologi yang tepat dan menjaga progres tetap terlihat sepanjang perjalanan.',
    descriptionEn: 'We build with the right technology and keep progress visible throughout the project.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Uji & Perbaiki',
    titleEn: 'Test & Refine',
    description: 'Kami memeriksa fungsionalitas, responsivitas, dan kualitas, lalu memperbaiki apa yang perlu diperhatikan.',
    descriptionEn: 'We check functionality, responsiveness, and quality, then refine what needs attention.',
    icon: ShieldCheck,
  },
  {
    number: '06',
    title: 'Luncurkan & Tumbuhkan',
    titleEn: 'Launch & Grow',
    description: 'Kami menyiapkan produk untuk pengguna nyata dan meninggalkan fondasi yang bisa berkembang sesuai kebutuhan Anda.',
    descriptionEn: 'We prepare the product for real users and leave a foundation that can grow with your needs.',
    icon: Rocket,
  },
]
