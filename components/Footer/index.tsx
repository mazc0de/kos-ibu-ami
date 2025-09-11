import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='border-coffee/10 bg-ivory border-t py-8'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left'>
        <p className='text-wood text-sm'>
          © 2025 Kos Ibu Ami Petarukan. All rights reserved.
        </p>
        <div className=''>
          <p className='text-wood flex items-center justify-center text-sm'>
            Made with
            <span>
              <Heart className='mx-1 h-4 w-4' />
            </span>
            by her son
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
