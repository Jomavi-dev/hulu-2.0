import { useRouter } from 'next/router'

function NavItem({ Icon, title }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/`)} className="flex flex-col items-center w-12 sm:w-20 mt-5 hover:text-white cursor-pointer group">
      <Icon className="h-7 mb-1 group-hover:animate-bounce" />
      <p className="uppercase font-xs font-medium opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default NavItem
