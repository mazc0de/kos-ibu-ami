import { TContact } from '@/types'
import { Instagram, MapPinned, Phone } from 'lucide-react'

export const CONTACT: TContact[] = [
  {
    label: 'Telepon / WhatsApp',
    value: '0815-4834-4614',
    icon: Phone
  },
  {
    label: 'Instagram',
    value: '@kos_petarukan',
    icon: Instagram
  },
  {
    label: 'Alamat',
    value: ' Jl. Perwira No.51 Kapangsari, Kec. Petarukan, Kab.Pemalang',
    icon: MapPinned
  }
]
