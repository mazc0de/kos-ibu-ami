import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import FacilityCard from '@/components/FacilityCard'

import { TContact, TFacility } from '@/types'

import { CONTACT } from '@/constant/contacts'
import { facilities } from '@/constant/facilities'
import { facilitiesBadge } from '@/constant/facilitiesBadge'

const Home = () => {
  return (
    <div className='min-h-screen scroll-smooth'>
      <Navbar />
      <div className='bg-ivory'>
        <div className='mx-auto max-w-6xl px-6'>
          <section id='home' className='relative isolate pt-28 pb-10 md:pt-32'>
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
                  Petarukan. Sangat cocok untuk{' '}
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
                  {facilitiesBadge.map((item: TFacility, index: number) => {
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
          <section id='fasilitas' className='relative isolate py-14'>
            <h2 className='text-wood text-3xl leading-tight font-extrabold tracking-tight'>
              Fasilitas
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {facilities.map((item, idx) => (
                <FacilityCard key={idx} {...item} />
              ))}
            </div>
          </section>
        </div>
        <div className='bg-white'>
          <div className='mx-auto max-w-6xl px-6'>
            <section id='kontak' className='relative isolate py-14'>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                  <h2 className='text-wood text-3xl leading-tight font-extrabold tracking-tight'>
                    Kontak
                  </h2>
                  <p className='text-wood mt-4 max-w-prose text-base/7 md:text-lg/8'>
                    Hubungi kami untuk ketersediaan kamar dan info harga.
                  </p>
                  <ul className='mt-6 space-y-3 text-sm'>
                    {CONTACT?.map((item: TContact, index: number) => {
                      const Icon = item.icon
                      return (
                        <li className='flex items-start gap-3' key={index}>
                          <div className='bg-sage inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl'>
                            <Icon className='text-wood' />
                          </div>
                          <div>
                            <p className='text-wood font-semibold'>
                              {item.label}
                            </p>
                            <p className='text-wood/90'>{item.value}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <div className='mt-6 flex gap-3'>
                    <Button asChild>
                      <Link href='/#'>Chat via WhatsApp</Link>
                    </Button>
                    <Button variant='outline'>
                      <Link href='/#'>Kembali Ke Atas</Link>
                    </Button>
                  </div>
                </div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.943450126874!2d109.45041717499628!3d-6.897367393101819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdb69bc6e4a31%3A0xa511e87e83c5fd42!2sKos%20Ibu%20Ami%20Petarukan!5e0!3m2!1sid!2sid!4v1757570445123!5m2!1sid!2sid'
                  className='h-[300px] w-full rounded-2xl md:h-[450px]'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
