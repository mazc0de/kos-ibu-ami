// interface.ts
import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'

export interface IFacilityCardProps {
  title: string
  desc: string
  img: string
  /** Komponen ikon lucide, contoh: BedSingle (bukan <BedSingle />) */
  icon?: ComponentType<LucideProps>
  /** opsional: override class ikon */
  iconClassName?: string
  /** opsional: override ukuran & tebal stroke lucide */
  iconSize?: number
  iconStroke?: number
}
