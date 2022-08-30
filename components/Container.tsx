import Image from 'next/image'
import React from 'react'
import Logo from 'public/LogoCariKantin.png'

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <main className={`flex flex-col bg-gradient-to-tr from-primary via-primary to-secondary flex-1 ${className}`}>
            <h1 className="text-white pt-4 pl-4 text-xl flex items-center">
                <Image width={30} height={30} src={Logo} alt="Logo CariKantin" /> 
                <span className='ml-1.5'>CariKantin</span>
            </h1>
            {children}
        </main>
    )
}

export default Container
