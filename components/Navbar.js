import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  return (
    <div className="relative">
      <nav className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scroll-smooth scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-10 cursor-pointer transition durartion-100 transform hover:scale-125 hover:text-white active:text-red-900">
            {title}
          </h2>
        ))}
      </nav>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-blue h-10 w-1/12" />
    </div>
  )
}

export default Navbar
