import Image from 'next/image'
import NavItem from './NavItem'
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <nav className="flex grow justify-evenly max-w-xl items-center">
        <NavItem title="Home" Icon={HomeIcon} />
        <NavItem title="Trending" Icon={LightningBoltIcon} />
        <NavItem title="Verified" Icon={BadgeCheckIcon} />
        <NavItem title="Collection" Icon={CollectionIcon} />
        <NavItem title="Search" Icon={SearchIcon} />
        <NavItem title="Account" Icon={UserIcon} />
      </nav>
      <Image
        className="object-contain h-fit"
        src="/hulu-white.png" width={140} height={70} alt="logo"
      />
    </header>
  )
}

export default Header
