import { Blocks, FolderKanban, Layers3, ShieldCheck } from 'lucide-react'

export const achievements = [
  {
    value: '5',
    label: 'Layanan inti',
    labelEn: 'Core services',
    description: 'Cakupan profil studio saat ini',
    descriptionEn: 'Current studio profile coverage',
    icon: FolderKanban,
  },
  {
    value: '4',
    label: 'Disiplin produk',
    labelEn: 'Product disciplines',
    description: 'Desain, pengembangan, aplikasi seluler, dan jaminan kualitas',
    descriptionEn: 'Design, engineering, mobile, and quality assurance',
    icon: Blocks,
  },
  {
    value: '1',
    label: 'Sistem desain bersama',
    labelEn: 'Shared design system',
    description: 'Fondasi yang konsisten untuk pengalaman',
    descriptionEn: 'A consistent foundation for digital experiences',
    icon: Layers3,
  },
  {
    value: '100%',
    label: 'Fokus berorientasi kualitas',
    labelEn: 'Quality-led focus',
    description: 'Komitmen terhadap pekerjaan digital yang matang',
    descriptionEn: 'A commitment to thoughtful digital work',
    icon: ShieldCheck,
  },
]
