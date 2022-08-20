import Link from 'next/link'
import { useRouter } from 'next/router'
import { CodeIcon, HomeIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

const BottomNav = () => {

    const router = useRouter()

  return (
    <nav className='fixed bottom-0 left-[50%] rounded-t-[20px] overflow-hidden translate-x-[-50%] max-w-screen-sm w-full flex items-center justify-evenly'>
        <section className={`flex-1 text-center px-2 py-2 ${router.pathname === '/' ? 'bg-primary-light' : 'bg-primary-dark'} text-white`}>
            <Link href="/">
                <a className="w-full">
                    <HomeIcon className='w-7 h-7 m-auto' />
                    Home
                </a>
            </Link>
        </section>
        <section className={`flex-1 text-center px-2 py-2 ${router.pathname === '/explore' ? 'bg-primary-light' : 'bg-primary-dark'} text-white`}>
            <Link href="/">
                <a className="w-full">
                    <SearchIcon className='w-7 h-7 m-auto' />
                    Explore
                </a>
            </Link>
        </section>
        <section className={`flex-1 text-center px-2 py-2 ${router.pathname === '/profile' ? 'bg-primary-light' : 'bg-primary-dark'} text-white`}>
            <Link href="/">
                <a className="w-full">
                    <UserCircleIcon className='w-7 h-7 m-auto' />
                    Profile
                </a>
            </Link>
        </section>
        <section className={`flex-1 text-center px-2 py-2 ${router.pathname === '/about' ? 'bg-primary-light' : 'bg-primary-dark'} text-white`}>
            <Link href="/">
                <a className="w-full">
                    <CodeIcon className='w-7 h-7 m-auto' />
                    About
                </a>
            </Link>
        </section>
    </nav>
  )
}

export default BottomNav