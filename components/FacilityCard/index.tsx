import Image from 'next/image'
import { IFacilityCardProps } from '@/interface'

const FacilityCard = ({
  title,
  desc,
  img,
  icon: Icon,
  iconClassName,
  iconSize = 20,
  iconStroke = 1.8
}: IFacilityCardProps) => {
  return (
    <div className='group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-md'>
      <div className='relative aspect-[16/10] w-full'>
        <Image
          src={img}
          alt={title}
          fill
          className='object-cover transition duration-300 group-hover:scale-105'
          sizes='(min-width:1024px)33vw,(min-width:640px)50vw,100vw'
          priority={false}
        />

        {Icon && (
          <div className='bg-ivory/90 absolute top-3 right-3 flex items-center justify-center rounded-2xl p-2 shadow backdrop-blur'>
            <Icon
              size={iconSize}
              strokeWidth={iconStroke}
              className={iconClassName ?? 'text-wood mt-1'}
            />
          </div>
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition duration-300 group-hover:scale-105' />
      </div>

      <div className='flex items-start gap-3 p-4'>
        <div>
          <h3 className='text-base font-semibold text-[#2f1808]'>{title}</h3>
          <p className='text-wood/80 mt-1 text-sm'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default FacilityCard
