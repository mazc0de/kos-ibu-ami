// facilities.ts
import { IFacilityCardProps } from '@/interface'
import {
  Lock,
  Toilet,
  BedSingle,
  MapPinned,
  CookingPot,
  CircleParking
} from 'lucide-react'

export const facilities: IFacilityCardProps[] = [
  {
    title: 'Full Furnished',
    desc: 'Kamar full furnished, tersedia kasur dan lemari sehingga lebih praktis tanpa perlu beli perabot lagi.',
    img: '/images/tampak-dalam-kamar.webp',
    icon: BedSingle
  },
  {
    title: 'Kamar Mandi Dalam',
    desc: 'Kamar mandi dalam, jadi lebih mudah, nyaman, dan terjaga privasinya.',
    img: '/images/kamar-mandi-dalam.webp',
    icon: Toilet
  },
  {
    title: 'Parkir Luas',
    desc: 'Parkir motor lega, jadi lebih mudah keluar-masuk tanpa repot.',
    img: '/images/halaman-parkir.webp',
    icon: CircleParking
  },
  {
    title: 'Dapur Bersama',
    desc: 'Dapur bersama dilengkapi fasilitas lengkap, siap menunjang kebutuhan memasak Anda.',
    img: '/images/dapur-bersama.webp',
    icon: CookingPot
  },
  {
    title: 'Nyaman & Aman',
    desc: 'Jauh dari bising jalan raya, suasana jadi lebih nyaman. Pagar yang terkunci di malam hari juga bikin tidur lebih tenang.',
    img: '/images/nyaman-aman.webp',
    icon: Lock
  },
  {
    title: 'Lokasi Strategis',
    desc: 'Dekat ke mana saja! Pasar, toko, sekolah, kampus, bahkan pabrik—praktis untuk mahasiswa maupun karyawan.',
    img: '/images/lokasi-strategis.webp',
    icon: MapPinned
  }
]
