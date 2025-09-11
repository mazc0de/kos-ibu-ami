import { TFacility } from '@/types'
import {
  BedSingle,
  CircleParking,
  CookingPot,
  House,
  MapPinned,
  Toilet,
  Zap
} from 'lucide-react'

export const facilitiesBadge: TFacility[] = [
  { icon: BedSingle, label: 'Kasur & Lemari' },
  { icon: CookingPot, label: 'Dapur Bersama' },
  { icon: House, label: 'Ruangan Luas 5x3m' },
  { icon: Toilet, label: 'Kamar Mandi Dalam' },
  { icon: MapPinned, label: 'Lokasi Strategis' },
  { icon: CircleParking, label: 'Parkir Luas' },
  { icon: Zap, label: 'Listrik Gratis' }
]
