'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { TNavMenu } from '@/types'
import { NAV_MENU } from '@/constant/navMenu'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full rounded-b-lg px-4 py-3 md:rounded-b-2xl ${isScrolled ? 'glassmorphic' : 'bg-transparent'} ${isOpen && 'h-screen'}`}
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between lg:px-6'>
        <Image
          src='/images/logo-kos-ibu-ami.webp'
          alt='logo-kos-ibu-ami'
          width={56}
          height={56}
          className={`rounded-md transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rotate-[360deg] ${isScrolled ? 'scale-90' : 'scale-100'}`}
        />

        <div>
          <div className='hidden lg:block'>
            <div className='flex gap-5'>
              {NAV_MENU?.map((item: TNavMenu, index: number) => {
                return (
                  <Link href={item.href} key={index}>
                    <p className='text-wood hover:text-wood/80 font-semibold transition-all duration-150'>
                      {item.label}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
          <button
            className={`group fixed right-6 z-[150] transition-all duration-300 ease-in-out lg:hidden ${isScrolled ? 'top-3' : 'top-3'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className='relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200'>
              <div className='flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
                <div
                  className={`bg-wood h-[2px] w-7 origin-left transform transition-all duration-300 ${
                    isOpen ? 'translate-x-10' : ''
                  }`}
                ></div>
                <div
                  className={`bg-wood h-[2px] w-7 transform rounded transition-all delay-75 duration-300 ${
                    isOpen ? 'translate-x-10' : ''
                  }`}
                ></div>
                <div
                  className={`bg-wood h-[2px] w-7 origin-left transform transition-all delay-150 duration-300 ${
                    isOpen ? 'translate-x-10' : ''
                  }`}
                ></div>

                {/* X icon */}
                <div
                  className={`absolute top-6 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                    isOpen ? 'w-12 translate-x-0' : ''
                  }`}
                >
                  <div
                    className={`bg-wood absolute h-[2px] w-5 rotate-0 transform transition-all delay-300 duration-500 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  ></div>
                  <div
                    className={`bg-wood absolute h-[2px] w-5 -rotate-0 transform transition-all delay-300 duration-500 ${
                      isOpen ? '-rotate-45' : ''
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`bg-sand fixed top-0 right-0 z-[100] h-screen w-[75%] max-w-sm rounded-l-2xl shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col items-center justify-center gap-3 p-4'>
          {NAV_MENU?.map((item: TNavMenu, index: number) => {
            return (
              <Link
                href={item.href}
                key={index}
                className='w-full'
                onClick={() => setIsOpen(false)}
              >
                <div className='border-wood flex w-full items-center justify-center rounded-lg border py-3'>
                  <p className='text-wood font-semibold'>{item.label}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='bg-wood/20 fixed inset-0 z-[90] backdrop-blur-sm'
        ></div>
      )}
    </nav>
  )
}

export default Navbar
