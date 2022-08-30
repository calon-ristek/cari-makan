import Image from 'next/image'
import React from 'react'
import Logo from 'public/LogoCariKantin.png'

const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="bg-gradient-to-tr from-primary via-primary to-secondary min-h-screen">
            <h1 className="text-white pt-2 pl-2 text-xl flex items-center">
                <Image width={30} height={30} src={Logo} alt="Logo CariKantin" /> 
                <span className='ml-1.5'>CariKantin</span>
            </h1>
            {children}
        </main>
    )
}

export default Container
