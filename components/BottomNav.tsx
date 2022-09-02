import Link from 'next/link'
import { useRouter } from 'next/router'
import { BookmarkIcon, HomeIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import { ReactNode } from 'react'

const NavLink = ({children, currentPath, activePath}: {children: ReactNode, currentPath: string, activePath: string}) => {
    return (
        <section className={`flex-1 text-center px-2 py-2 bg-primary-dark ${currentPath === activePath ? 'text-white' : 'text-primary-200'} text-white`}>
            <Link href={activePath}>
                <a className="w-full">
                    {children}
                </a>
            </Link>
        </section>
    )
}

const BottomNav = () => {

    const router = useRouter()

  return (
    <nav className='z-10 fixed bottom-0 left-[50%] rounded-t-lg overflow-hidden translate-x-[-50%] max-w-[500px] w-full flex items-center justify-evenly transition-all'>
        <NavLink currentPath={router.pathname} activePath="/">
            <>
                <HomeIcon className='w-7 h-7 m-auto' />
                Home
            </>
        </NavLink>
        <NavLink currentPath={router.pathname} activePath="/kantin">
            <>
                <SearchIcon className='w-7 h-7 m-auto' />
                Explore
            </>
        </NavLink>
        <NavLink currentPath={router.pathname} activePath="/account/bookmark">
            <>
                <BookmarkIcon className='w-7 h-7 m-auto' />
                Bookmark
            </>
        </NavLink>
        <NavLink currentPath={router.pathname} activePath="/account/profile">
            <>
                <UserCircleIcon className='w-7 h-7 m-auto' />
                Profile
            </>
        </NavLink>
    </nav>
  )
}

export default BottomNav