import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Kos Ibu Ami Petarukan',
  description:
    'Kos Ibu Ami Petarukan menyediakan hunian nyaman, aman, dan strategis dengan fasilitas lengkap. Cocok untuk mahasiswa dan pekerja yang mencari kost bersih, terjangkau, dan lokasi yang strategis.',
  keywords: [
    'kos Petarukan',
    'kost Petarukan',
    'kos murah Petarukan',
    'kost murah Petarukan',
    'kos nyaman Petarukan',
    'kost nyaman Petarukan',
    'kos bersih Petarukan',
    'kost bersih Petarukan',
    'kos aman Petarukan',
    'kost aman Petarukan',
    'kos strategis Petarukan',
    'kost strategis Petarukan',
    'kos dekat kampus Petarukan',
    'kost dekat kampus Petarukan',
    'kos dekat stasiun Petarukan',
    'kost dekat stasiun Petarukan',
    'kos ibu ami',
    'kos ibu ami petarukan',
    'kost ibu ami petarukan',
    'kos terjangkau Petarukan',
    'kost terjangkau Petarukan',
    'kos untuk mahasiswa Petarukan',
    'kost untuk mahasiswa Petarukan',
    'kos untuk pekerja Petarukan',
    'kost untuk pekerja Petarukan'
  ],
  authors: [{ name: 'Kos Ibu Ami' }],
  openGraph: {
    title: 'Kos Ibu Ami Petarukan',
    description:
      'Kos Ibu Ami Petarukan - kost nyaman, aman, dan terjangkau dengan fasilitas lengkap di lokasi strategis Petarukan.',
    url: 'https://kosibuami.my.id',
    siteName: 'Kos Ibu Ami Petarukan',
    images: [
      {
        url: '/images/logo-kos-ibu-ami.webp',
        width: 1200,
        height: 630,
        alt: 'Kos Ibu Ami Petarukan'
      }
    ],
    locale: 'id_ID',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
