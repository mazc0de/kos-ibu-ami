import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BedSingle,
  CircleParking,
  CookingPot,
  House,
  MapPinned,
  Toilet,
  Zap
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Facility } from '@/types'

const facilities: Facility[] = [
  { icon: BedSingle, label: 'Kasur & Lemari' },
  { icon: CookingPot, label: 'Dapur Bersama' },
  { icon: House, label: 'Ruangan Luas 5x3m' },
  { icon: Toilet, label: 'Kamar Mandi Dalam' },
  { icon: MapPinned, label: 'Lokasi Strategis' },
  { icon: CircleParking, label: 'Parkir Luas' },
  { icon: Zap, label: 'Listrik Gratis' }
]

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-ivory min-h-screen scroll-smooth'>
        <div className='mx-auto max-w-6xl px-6'>
          <section id='home' className='relative isolate pt-28 pb-16 md:pt-32'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div className='order-1 md:order-2'>
                <Image
                  src='/images/halaman-depan.webp'
                  alt='halaman-depan'
                  width={1920}
                  height={1080}
                  sizes='100vw'
                  className='h-auto w-full rounded-3xl shadow-2xl'
                />
              </div>
              <div className='order-2 md:order-1'>
                <h1 className='text-wood text-3xl leading-tight font-extrabold tracking-tight'>
                  Kos Ibu Ami Petarukan
                </h1>
                <p className='text-wood mt-4 max-w-prose text-base/7 md:text-lg/8'>
                  Hunian yang nyaman dengan lokasi yang strategis dikawasan
                  Petarukan, sangat cocok untuk{' '}
                  <span className='font-semibold'>pelajar</span>,{' '}
                  <span className='font-semibold'>pekerja</span>, dan{' '}
                  <span className='font-semibold'>perantau</span> dengan
                  fasilitas yang memadai dan suasana yang tenang.
                </p>
                <div className='mt-6 flex gap-3'>
                  <Button asChild>
                    <Link href='/#'>Lihat Fasilitas</Link>
                  </Button>
                  <Button variant='outline'>
                    <Link href='/#'>Hubungi Kami</Link>
                  </Button>
                </div>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {facilities.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Badge key={index} className='flex items-center gap-1'>
                        <Icon className='h-4 w-4' />
                        {item.label}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
